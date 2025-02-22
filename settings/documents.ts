import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "పరిచయం",
    href: "/parichayam",
  },
  {
    title: "ఆలోచనలు",
    href: "/alochanalu",
  },
  {
    title: "కథలు",
    href: "/kathalu",
    items: [
      {
        title: "భావావేశాలు",
        href: "/emotions",
      },
    ],
  },
  {
    title: "కవితలు",
    href: "/kavitalu",
  },
  {
    title: "ప్రేరణ",
    href: "/prerana",
  },
  {
    title: "పుస్తకాలు",
    href: "/pustakalu",
  },
  {
    title: "తర్కము",
    href: "/tarkam",
  },
  {
    title: "సాహిత్యం",
    href: "/sahityam",
  },
]
