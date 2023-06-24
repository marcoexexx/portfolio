import { useEffect, useState } from "react";

export function useScrollTop() {
  const [scrollButtonVisiblity, setScrollButtonVisiblity] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 50 ? setScrollButtonVisiblity(true) : setScrollButtonVisiblity(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisiblity);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    }
  }, []);

  return {scrollButtonVisiblity};
}
