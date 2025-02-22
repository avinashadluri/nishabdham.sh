import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "హోమ్",
    href: "/",
    external: false,
  },
  {
    title: "పరిచయం",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "అభిప్రాయాలు",
    href: "/comments",
  },
  {
    title: "ఇంస్టాగ్రామ్",
    href: "https://www.instagram.com/nishabdham.sh",
    external: true,
  },
  {
    title: "ఫేస్బుక్",
    href: "https://www.facebook.com/profile.php?id=61571755285332",
    external: true,
  },
  {
    title: "ట్విటర్",
    href: "https://twitter.com/nishabdham_sh",
    external: true,
  },
  {
    title: "ఈమెయిల్",
    href: "mailto:nishabdham.sh@gmail.com",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/avinashadluri/nishabdham.sh",
}
