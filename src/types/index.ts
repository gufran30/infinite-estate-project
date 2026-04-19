export interface NavLink {
  label: string;
  href?: string;
  nestedLinks?: {
    label: string;
    href: string;
  }[];
}

export interface DownloadItem {
  label: string;
  href: string;
}

export interface ShowcaseImages {
  title: string;
  src: string;
  alt: string;
}

export interface ShowcaseImagesCommpiled {
  heading: string;
  paragraph: string;
  images: ShowcaseImages[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  name: string;
  description: string;
  href?: string;
}
