---
enable: true # Control the visibility of this section across all pages where it is used
title: "Profil de l'entreprise - <span class='relative inline-block pb-1'>Notre équipe<span class='absolute left-0 bottom-0 w-full h-1 bg-[#61CE70] rounded-full'></span></span>"
subtitle: "Rencontrez l'équipe dédiée derrière votre succès et votre croissance"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "Voir tous les membres"
  url: "/team/"
  hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  # variant: "fill" # Optional: fill | fill-white | outline | text | circle; omitted to follow the section appearance
  # rel: "" # Optional
  # target: "" # Optional
  # class: "" # Optional
  icon: # Optional
    enable: true
    name: "ArrowUpRight"
    position: "right" # left | right

options:
  layout: "grid" # grid | carousel
  limit: false # false / number
  marquee: # Used when layout is "carousel"
    elementWidthAuto: false
    elementWidth: "20rem"
    elementWidthResponsive: "18rem"
    pauseOnHover: true
    reverse: "" # reverse / ""
    duration: "40s"
---
