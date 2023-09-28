import { Box, IconButton, Image } from "@chakra-ui/react";
import { IoLogoGithub } from 'react-icons/io5';

import Text from "./Text";
import { ProjectEnum, getProject, getTechnology, linkOpen } from "../utils";
import { Link } from ".";

interface ProjectCardProps {
  project: ProjectEnum;
  showDescription?: boolean
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project, showDescription } = props;

  const { title, getDescription, image, source, link, technologies } = getProject(project);

  return (
    <Box
      m={2}
      mb={7}
      display="flex"
      flexDir='column'
      gap={2}
      overflow='hidden'
    >
      <Image 
        onClick={link ? linkOpen(link) : linkOpen(source)} 
        cursor="pointer" 
        rounded="xl" 
        objectFit='cover' 
        src={image} 
        alt={title} 
        width="100%" 
      />
      <Link
        href={source}
        target="_blank"
      >
        <Text
          fontFamily="heading" 
          fontSize="lg" 
          letterSpacing='tighter' 
          fontWeight='medium' 
          text={title} 
          lineHeight="1.3rem"
        />
      </Link>
      {showDescription && <Text lineHeight="1.33rem" fontFamily="heading">
        {getDescription()}
        <Text ml={5} display="inline">―</Text><IconButton onClick={linkOpen(source)} size='xs' ml={1} variant='text' icon={<IoLogoGithub size="1.2rem" />} aria-label="external link" />
      </Text>}

      {showDescription &&
        <Box
          display='flex'
          flexDir='row'
          gap={2}
        >
          {technologies.map(tech => (
            <Link text={tech} target="_blank" key={tech} fontFamily='heading' href={getTechnology(tech)} letterSpacing='tighter' fontWeight={500} />
          ))}
        </Box>
      }
    </Box>
  )
}
