import { Container } from "@chakra-ui/react";
import { AppContainer, Bio, Footer, Header, LanguageSelectionButton } from "./components";
import { AboutSection, ContactSection, HeroSection, ProfileSection, ProjectsSection } from "./components/sections";
import { Suspense, useState } from "react";
import { countries, i18n } from "./i18n";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const [current, setCurrent] = useState<keyof typeof countries>(i18n.local as keyof typeof countries);

  const onChangeCurrent = (current: keyof typeof countries) => {
    i18n.load(current);
    setCurrent(current);
  }

  return (
    <AppContainer>
      <Header />
      <Container>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<Error />}>
            <HeroSection />
            <ProfileSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Bio />
            <LanguageSelectionButton current={current} onChangeCurrent={onChangeCurrent} />
          </ErrorBoundary>
        </Suspense>
        <Footer />
      </Container>
    </AppContainer>
  )
}
