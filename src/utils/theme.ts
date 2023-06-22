import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#0e7db", "#202023")(props)
    }
  })
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({
  config,
  styles,
  fonts,
  // components,
  // colors,
})
