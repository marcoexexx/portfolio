import { useCallback } from "react";
import { Button } from ".";

export function ScrollUpButton() {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <Button 
      onClick={handleScrollTop}
      variant='text' 
      fontSize='4xl' 
      position='fixed' 
      bottom='20px'
      right={{ base: '15px', md: '30px' }}
      text="☝️" 
      zIndex={100}
    />
  )
}
