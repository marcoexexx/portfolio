  export function sectionScroll(id: string) {
    return function() {
      const section = document.getElementById(id);
      if (section) {
        const offset = section.offsetTop - 70;
        window.scrollTo({ behavior: "smooth", top: offset })
      }
    }
  }
