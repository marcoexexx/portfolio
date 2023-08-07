import { Box, HStack, VStack, useColorModeValue } from "@chakra-ui/react";

import { AnimatedSection, Link } from "..";
import Text from "../Text";
import { sectionScroll } from "../../utils";

export function HeroSection() {
  return (
    <AnimatedSection delay={0.3}>
      <Box
        w="full"
        pt={{ base: "130px", md: "150px" }}
        pb={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="full"
          h="150px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box 
            display="block"
            bgGradient={`linear(to-t, ${useColorModeValue("#202023", 'orange')}, ${useColorModeValue("white", '#202023')})`}
            w="7px"
            h="full"
            borderRadius={100}
          />
          <VStack
            alignItems="start"
            gap={4}
          >
            <Text
              fontSize="4xl" 
              fontFamily="heading" 
              fontWeight="700" 
              letterSpacing="tighter" 
              tx="hero.welcome" 
            />
            <Text 
              fontFamily="heading" 
              tx="hero.iam" 
              maxW={{ base: "270px", md: "320px" }}
            />
            <HStack gap={3}>
              <Link  tx="hero.cv" textDecor="underline" href="/RESUME.pdf" download />
              <Link onClick={sectionScroll("contact")} tx="hero.contact" textDecor="underline" />
            </HStack>
          </VStack>
        </Box>
      </Box>
    </AnimatedSection>
  )
}
