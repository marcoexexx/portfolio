import { Box, Image, VStack } from "@chakra-ui/react";
import { AnimatedSection } from "..";
import Text from "../Text";

export default function ProfileSection() {
  return (
    <AnimatedSection delay={0.2}>
      <Box
        w="full"
        p={2}
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        gap="13px"
        alignItems={{ base: "start", md: "center" }}
        justifyContent="space-between"
      >
        <Box
          rounded="full"
          overflow="hidden"
          borderWidth={2}
          borderColor="gray.400"
        >
          <Image 
            src="/me.jpg"
            w="6.3rem"
          />
        </Box>
        <VStack
          alignItems={{ base: "start", md: "end" }}
          gap={0}
        >
          <Text
            text="Aung Koko Lwin" 
            fontFamily="heading"
            fontSize="3xl"
            letterSpacing="tighter"
            fontWeight={700}
          />
          <Text 
            fontSize="sm"
            text="Digital Craftsman ( Artist / Developer / Designer )"
          />
        </VStack>
      </Box>
    </AnimatedSection>
  )
}
