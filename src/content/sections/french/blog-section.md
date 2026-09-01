---
enable: true # Control the visibility of this section across all pages where it is used
title: "Dernières <span class='relative inline-block pb-1'>actualités<span class='absolute left-0 bottom-0 w-full h-1 bg-[#61CE70] rounded-full'></span></span>"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "Voir tous les articles"
  url: "/blog/"
  hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  variant: "fill" # Optional: fill | fill-white | outline | text | circle
  # rel: "" # Optional
  # target: "" # Optional
  # class: "" # Optional
  icon: # Optional
    enable: true
    name: "ArrowUpRight"
    position: "right" # left | right

options:
  layout: "grid" # grid | overlay | horizontal
  limit: 2 # false / number
---
