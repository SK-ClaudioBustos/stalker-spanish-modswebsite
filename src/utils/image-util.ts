function getImageUrl(imagePath: string) {
  return new URL(imagePath, import.meta.url).href;
}

export { getImageUrl };
