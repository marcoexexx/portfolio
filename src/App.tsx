import { Container } from "@chakra-ui/react";
import { AppContainer, Bio, Footer, Header, LanguageSelectionButton } from "./components";
import { useLanguage } from "./hooks";
import { AboutSection, ContactSection, HeroSection, ProfileSection, ProjectsSection } from "./components/sections";
import Text from "./components/Text";

export default function App() {
  const { current, onChangeLanguage, loading } = useLanguage();

  if (loading) return <Text tx="common.loading" />

  return (
    <AppContainer>
      <Header />
      <Container>
        <HeroSection />
        <ProfileSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Bio />
        <LanguageSelectionButton current={current} onChange={onChangeLanguage} />
        <Footer />
      </Container>
    </AppContainer>
  )
}
