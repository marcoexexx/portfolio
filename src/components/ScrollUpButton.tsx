import { useCallback } from "react";
import { Button } from ".";
import { Collapse } from "@chakra-ui/react";

interface ScrollUpButtonProps {
  visibility: boolean;
}

export function ScrollUpButton(props: ScrollUpButtonProps) {
  const { visibility } = props;

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <Collapse in={visibility} animateOpacity>
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
    </Collapse>
  )
}
