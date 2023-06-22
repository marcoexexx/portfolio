import { Box } from "@chakra-ui/react"
import Text from "./Text"

function Error() {
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
        alignItems="center"
        justifyContent="space-around"
      >
        <Text tx="common.error" />
      </Box>
    </Box>
  )
}

export default Error;
