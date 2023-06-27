import { useEffect, useState } from "react";

export function useScrollTop(offset: number) {
  const [scrollButtonVisiblity, setScrollButtonVisiblity] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > offset ? setScrollButtonVisiblity(true) : setScrollButtonVisiblity(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisiblity);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    }
  }, []);

  return {scrollButtonVisiblity};
}
