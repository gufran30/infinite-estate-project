const images = [
  { src: "/images/home-images/biiion.webp", alt: "Project 1" },
  { src: "/images/home-images/bion1.webp", alt: "Project 2" },
  { src: "/images/home-images/bion4.webp", alt: "Project 3" },
  { src: "/images/home-images/zion1.webp", alt: "Project 4" },
  { src: "/images/home-images/zion2.webp", alt: "Project 5" },
];

// Doubling the array ensures a seamless infinite transition
export const duplicatedImages = [...images, ...images];
