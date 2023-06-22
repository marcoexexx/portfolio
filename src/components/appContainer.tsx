import { ChakraProvider } from "@chakra-ui/react";

import { GlobalStyle, theme } from '../utils'


interface AppContainerProps {
  children: React.ReactNode
}

export function AppContainer(props: AppContainerProps) {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  )
}
