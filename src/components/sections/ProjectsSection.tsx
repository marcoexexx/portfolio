import { Box, Switch } from "@chakra-ui/react";
import { AnimatedSection } from "..";
import Text from "../Text";
import ProjectCard from "../ProjectCard";
import { ProjectEnum, getStore, projects, setStore } from "../../utils";
import { useState } from "react";

const NUMBER_OF_COLS_PREFIX: "cols" = "cols";

export function ProjectsSection() {
  const [numberOfCols, setNumberOfCols] = useState(getStore<number>(NUMBER_OF_COLS_PREFIX) || 2);

  const handleChangeGridView = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const cols = checked ? 2 : 1;
    setStore(NUMBER_OF_COLS_PREFIX, cols);
    setNumberOfCols(_ => cols);
  }

  return (
    <AnimatedSection delay={0.7}>
      <Box
        id="projects"
        py={2}
        display="flex"
        flexDir="column"
        gap={5}
      > 
        <Box display="flex" 
          justifyContent='space-between'
        > 
          <Text
            tx="navbar.projects" 
            fontSize="xl"
            fontFamily="heading"
            fontWeight={700}
            borderBottomWidth={4}
          />
          <Box display='flex' gap={2} alignItems='center'>
            <Text 
              text="View Grid" 
              fontSize="md"
              fontFamily="heading"
              fontWeight={400}
            />
            <Switch defaultChecked={numberOfCols === 2} onChange={handleChangeGridView} />
          </Box>
        </Box>

        <Box display='flex' flexDir='row'>
          {Array.from(Array(numberOfCols)).map((_, colIndex) => (
            <Box key={colIndex} flex={1}>
              {[...projects.entries()].filter((_, index) => index % numberOfCols === colIndex).map(([project, _], index: number) => (
                <ProjectCard key={index} project={project as ProjectEnum} showDescription={numberOfCols === 1} />
              )).filter(e => !!e)}
            </Box>
          ))}
        </Box>
      </Box>
    </AnimatedSection>
  )
}
