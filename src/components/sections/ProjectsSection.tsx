import { Box } from "@chakra-ui/react";
import { AnimatedSection } from "..";
import Text from "../Text";

export function ProjectsSection() {
  return (
    <AnimatedSection delay={0.7}>
      <Box
        id="projects"
        py={2}
        display="flex"
        flexDir="column"
        gap={5}
      >
        <Box display="flex">
          <Text
            tx="navbar.projects" 
            fontSize="xl"
            fontFamily="heading"
            fontWeight={700}
            borderBottomWidth={4}
          />
        </Box>
        <Text text="description !" />
      </Box>
    </AnimatedSection>
  )
}
