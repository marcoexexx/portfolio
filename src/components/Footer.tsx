import { Box } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Aung koko Lwin. All Rights Reserved.
    </Box>
  )
}
