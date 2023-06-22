import { Box, Container, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import { IoLogoGithub } from 'react-icons/io5';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, ThemeToggleButton } from ".";
import Text from "./Text";

export function Header() {
  function onMenuClick(href: string = "#", mode: "page" | "link" = 'page') {
    return function() {
      if (mode==='page') window.document.location = `#${href}`;
      else if (mode === 'link') window.open(href, "_blank");
    }
  }

  return (
    <Box
      position="fixed"
      as="nav"
      w="full"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      p={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <Flex align="center">
          <Heading as="h1" fontSize="xl" letterSpacing="tighter">Aung Koko Lwin</Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex"}}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap={5}
        >
          <Link tx="navbar.about" href="#about" />
          <Link tx="navbar.projects" href="#projects" />
          <Link tx="navbar.contact" href="#contact" />
          <Link 
            href="https://github.com/alk-neq-me/portfolio" 
            target="_blank"
            display="inline-flex"
            alignItems="center"
            gap={1}
          >
            <IoLogoGithub />
            <Text tx="navbar.source" />
          </Link>
        </Stack>

        <Box display="flex" flexDirection="row" gap={3}>
          <ThemeToggleButton />
          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link as={MenuItem} tx="navbar.about" onClick={onMenuClick("about")} />
                <Link as={MenuItem} tx="navbar.projects" onClick={onMenuClick("projects")} />
                <Link as={MenuItem} tx="navbar.contact" href="#contact" />
                <Link as={MenuItem} tx="navbar.viewSource" onClick={onMenuClick("https://github.com/alk-neq-me/portfolio", "link")} />
              </MenuList>
            </Menu>
          </Box>
         </Box>
      </Container>
    </Box>
  )
}
