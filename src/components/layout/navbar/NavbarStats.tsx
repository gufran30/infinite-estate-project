import { DownloadItem, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Services",
    href: "#services"
  },
  {
    label: "Showcase",
    href: "#work"
  },
  {
    label: "Residental",
    nestedLinks: [
      {
        label: "Mixed Use",
        href: "/residental/mixed-use"
      },
      {
        label: "High Rise",
        href: "/residental/high-rise"
      },
      {
        label: "Plotted/Villas",
        href: "/residental/plotted-villas"
      },
    ]
  },
  {
    label: "Commercial",
    nestedLinks: [
      {
        label: "IT",
        href: "/commercial/it"
      },
      {
        label: "IT/ITES SEZ",
        href: "/commercial/it-ites-sez"
      },
      {
        label: "Retail Malls",
        href: "/commercial/retail-malls"
      },
    ]
  },
]

export const downloadItems: DownloadItem[] = [
  {
    label: "📄 Download Brochure",
    href: "https://infinitebuildingtech.com/downloads/Infinite%20Building%20Technologies%20Consultancy%20Profile.pdf",
  },
  {
    label: "💳 Download Visiting Card",
    href: "https://infinitebuildingtech.com/downloads/VISTING-CARD.jpg",
  },
]