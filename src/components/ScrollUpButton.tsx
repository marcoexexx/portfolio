import { useCallback } from "react";
import { Button } from ".";

interface ScrollUpButtonProps {
  visibility: boolean;
}

export function ScrollUpButton(props: ScrollUpButtonProps) {
  const { visibility } = props;

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <Button 
      onClick={handleScrollTop}
      variant='text' 
      fontSize='4xl' 
      opacity={visibility ? 1 : 0}
      position='fixed' 
      bottom='20px'
      right={{ base: '15px', md: '30px' }}
      text="☝️" 
      zIndex={100}
    />
  )
}
