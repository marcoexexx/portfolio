import { Box } from "@chakra-ui/react";
import { AnimatedSection } from "..";
import Text from "../Text";

export function AboutSection() {
  return (
    <AnimatedSection delay={0.4}>
      <Box
        id="about"
        py={2}
        display="flex"
        flexDir="column"
        gap={5}
      >
        <Box display="flex">
          <Text
            tx="navbar.about" 
            fontSize="xl"
            fontFamily="heading"
            fontWeight={700}
            borderBottomWidth={4}
          />
        </Box>
        <Text tx="about.content" />
      </Box>
    </AnimatedSection>
  )
}
