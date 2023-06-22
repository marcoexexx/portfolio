import { Box, FormControl, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, useColorModeValue, useToast } from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

import { AnimatedSection, Button } from "..";
import Text from "../Text";
import { useRef } from "react";



export function ContactSection() {
  const form = useRef<HTMLFormElement|null>(null);
  const toast = useToast();

  const isInvalid = false;

  const infomations = [
    {
      icon: <FaMapMarkerAlt color={useColorModeValue("black", "orange")} />,
      content: "Yangon, Myanmar, Mingaladon Township"
    },
    {
      icon: <IoMdMail color={useColorModeValue("black", "orange")} />,
      content: "toyko2001@gmail.com"
    },
    {
      icon: <AiFillPhone color={useColorModeValue("black", "orange")} />,
      content: "+959 263 446 808"
    },
  ]

  const sendEmail = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (form.current) emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(_ => {
        toast({
          title: 'Email sent.',
          description: 'Your email has been successfully sent.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch(_err => {
        toast({
          title: 'Error!',
          description: 'An error occurred while sending the email.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  return (
    <AnimatedSection delay={0.9}>
      <Box
        id="contact"
        py={2}
        display="flex"
        flexDir="column"
        gap={5}
      >
        <Box display="flex">
          <Text
            tx="navbar.contact" 
            fontSize="xl"
            fontFamily="heading"
            fontWeight={700}
            borderBottomWidth={4}
          />
        </Box>

        <Text text="Interested in working together or have any questions? Feel free to reach out to me!" />

        <Box
          display="flex"
          flexDir="column"
        >
          <Tabs align="end" colorScheme={useColorModeValue("purple", "orange")}>
            <TabList>
              <Tab>Address</Tab>
              <Tab>Email</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* Social */}
                <Box p={2}
                  display="flex"
                  flexDir="column"
                  alignItems="start"
                  gap={6}
                >
                  <Text text="Social and Address"
                    fontSize="3xl"
                    fontFamily="heading"
                    textAlign="center"
                  />
                  <Box
                    display="flex"
                    flexDir="column"
                    gap={2}
                  >
                    {infomations.map((info, i) => (
                      <Box
                        key={i}
                        display='flex'
                        alignItems="center"
                        flexDir='row'
                        gap={4}
                        fontSize="lg"
                      >
                        {info.icon}
                        <Text textAlign="start" opacity={0.5} fontSize="md" text={info.content} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                {/* Email form */}
                <Box p={2}
                  display="flex"
                  flexDir="column"
                  alignItems="start"
                  gap={6}
                >
                  <Text text="Send me a message"
                    fontSize="3xl"
                    fontFamily="heading"
                    textAlign="center"
                  />
                  <FormControl ref={form} as="form" isInvalid={isInvalid} p={2} display="flex" gap={2} flexDir="column" onSubmit={sendEmail}>
                    <Input type="text" placeholder="Type your full name" name="from_name" required />
                    <Input type="email" placeholder="Email address" name="email" required />
                    <Textarea placeholder="Message" name="message" />
                    <Box alignSelf="end">
                      <Button type="submit" text="Submit" variant="solid" />
                    </Box>
                  </FormControl>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </Box>
      </Box>
    </AnimatedSection>
  )
}
