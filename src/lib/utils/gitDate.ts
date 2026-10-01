import { execSync } from "node:child_process";

export interface GitBuildInfo {
  currentYear: number;
  lastUpdatedDate: string;
}

export function getGitLastUpdated(): GitBuildInfo {
  const now = new Date();
  const currentYear = now.getFullYear();
  let commitDate: Date | null = null;

  try {
    // %cI returns ISO 8601 strict date string with timezone offset (e.g., 2026-09-28T13:04:06+05:30)
    const gitDateStr = execSync("git log -1 --format=%cI", {
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();

    if (gitDateStr) {
      const parsed = new Date(gitDateStr);
      if (!isNaN(parsed.getTime())) {
        commitDate = parsed;
      }
    }
  } catch {
    // Git execution failed or repository doesn't have git history in build context
  }

  const targetDate = commitDate || now;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Explicitly extract date components in IST (Asia/Kolkata, UTC+5:30)
  // regardless of whether the build server (e.g. Vercel/GitHub Actions) is set to UTC.
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const parts = formatter.formatToParts(targetDate);
  const partMap = Object.fromEntries(parts.map((p) => [p.type, p.value]));

  const monthIdx = parseInt(partMap.month, 10) - 1;
  const day = parseInt(partMap.day, 10);
  const year = partMap.year;

  const month = monthNames[monthIdx];
  const lastUpdatedDate = `${month} ${day}, ${year}`;

  return {
    currentYear,
    lastUpdatedDate,
  };
}
