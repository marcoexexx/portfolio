import { Box, Spinner } from "@chakra-ui/react"
import Text from "./Text"

export function Loading() {
  return (
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
        flexDir='column'
        alignItems="center"
        justifyContent="space-around"
      >
        <Spinner size='xl' />
        <Text tx="common.loading" />
      </Box>
    </Box>
  )
}
