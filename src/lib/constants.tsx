interface NavLink {
  label: string;
  href?: string;
  nestedLinks?: {
    label: string;
    href: string;
  }[]
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Showcase",
    href: "/showcase"
  },
  {
    label: "Services",
    nestedLinks: [
      {
        label: "View Services",
        href: "/services/view-services"
      },
      {
        label: "UPVC",
        href: "/services/upvc"
      },
    ]
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
        label: "Plotter/Villas",
        href: "/residental/plotted-or-villas"
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
        href: "/commercial/it-or-ites-sez"
      },
      {
        label: "Retail Malls",
        href: "/commercial/retail-malls"
      },
    ]
  },
]

interface DownloadItem {
  label: string;
  href: string;
}

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

export interface ShowcaseImages {
  title: string,
  src: string,
  alt: string,
}

export interface ShowcaseImagesCommpiled {
  heading: string,
  paragraph: string,
  images: ShowcaseImages[]
}