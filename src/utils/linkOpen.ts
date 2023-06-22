export function linkOpen(link: string) {
  return function() {
    window.open(link, "_blank");
  }
}
