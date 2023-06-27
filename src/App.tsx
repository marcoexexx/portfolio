import { Container } from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";

import { countries, i18n } from "./i18n";
import { AppContainer, Bio, Error, ErrorBoundary, Footer, Header, Loading, ScrollUpButton } from "./components";
import { AboutSection, HeroSection, ProfileSection, ProjectsSection,  } from "./components/sections";
import { useScrollTop } from "./hooks";

const ContactSection = lazy(() => import("./components/sections/ContactSection"));
const LanguageSelectionButton = lazy(() => import("./components/LanguageSelectionButton"));

export default function App() {
  const [current, setCurrent] = useState<keyof typeof countries>(i18n.local as keyof typeof countries);

  const { scrollButtonVisiblity } = useScrollTop(70);

  const onChangeCurrent = (current: keyof typeof countries) => {
    setCurrent(current);
    i18n.load(current);
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
      { scrollButtonVisiblity && <ScrollUpButton /> }
    </AppContainer>
  )
}
