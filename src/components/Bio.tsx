import { Box, HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { AnimatedSection } from ".";
import { FcMusic } from 'react-icons/fc';
import { GiGalley } from 'react-icons/gi';
import { FaGuitar, FaCode } from 'react-icons/fa';
import { MdAddAPhoto } from 'react-icons/md';
import { BsRobot } from 'react-icons/bs';

import Text from "./Text";

const hobbies = [
  {
    icon: FcMusic,
    label: "Music"
  },
  {
    icon: FaGuitar,
    label: "Guitar"
  },
  {
    icon: FaCode,
    label: "Coding"
  },
  {
    icon: GiGalley,
    label: "Art"
  },
  {
    icon: MdAddAPhoto,
    label: "Photography"
  },
  {
    icon: BsRobot,
    label: "Machine Learning"
  }
]

export function Bio() {
  return (
    <AnimatedSection delay={0.7}>
      <Box
        py={2}
        display="flex"
        flexDir="column"
        gap={5}
      >
        <Box display="flex">
          <Text
            text="I ♥"
            fontSize="xl"
            fontFamily="heading"
            fontWeight={700}
            borderBottomWidth={4}
          />
        </Box>

        <HStack wrap="wrap">
          {hobbies.map(hobby => (
            <Tag key={hobby.label}>
              <TagLeftIcon as={hobby.icon} />
              <TagLabel>{hobby.label}</TagLabel>
            </Tag>
          ))}
        </HStack>
      </Box>
    </AnimatedSection>
  )
}
