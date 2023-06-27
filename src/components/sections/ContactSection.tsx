import { Box, FormControl, IconButton, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, useColorModeValue, useToast } from "@chakra-ui/react";
import { FaFacebookF, FaGithubAlt, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

import { AnimatedSection, Button } from "..";
import Text from "../Text";
import { useMemo, useRef, useState } from "react";
import { IconBaseProps } from "react-icons";
import { linkOpen } from "../../utils/linkOpen";
import { i18n } from "../../i18n";


export default function ContactSection() {
  const form = useRef<HTMLFormElement|null>(null);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const isInvalid = false;

  const infomations = useMemo(() => [
    {
      icon: (props: IconBaseProps) => <FaMapMarkerAlt {...props} />,
      content: i18n.t("contact.address")
    },
    {
      icon: (props: IconBaseProps) => <IoMdMail {...props} />,
      content: i18n.t("contact.email")
    },
    {
      icon: (props: IconBaseProps) => <AiFillPhone {...props} />,
      content: i18n.t("contact.phone")
    },
  ], [i18n.local]);


  const sendEmail = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    setLoading(true);

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
      .finally(() => setLoading(false))
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

        <Text tx="contact.description" />

        <Box
          display="flex"
          flexDir="column"
        >
          <Tabs align="end" colorScheme={useColorModeValue("purple", "orange")}>
            <TabList>
              <Tab>{i18n.t("contact.labelAddress")}</Tab>
              <Tab>{i18n.t("contact.labelEmail")}</Tab>
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
                  <Text tx="contact.socialAndAddress"
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
                        {info.icon({
                          color: useColorModeValue("black", "orange")
                        })}
                        <Text textAlign="start" opacity={0.5} fontSize="md" text={info.content} />
                      </Box>
                    ))}
                  </Box>
                  <Box
                    display='flex'
                    flexDir='row'
                    alignItems='center'
                    mt={2}
                  >
                    <IconButton onClick={linkOpen("https://www.facebook.com/marco.exexx/")} color={useColorModeValue("black", "white")} variant='link' icon={<FaFacebookF />} aria-label="facebook link" />
                    <IconButton onClick={linkOpen("https://www.instagram.com/marco.exexx/")} color={useColorModeValue("black", "white")} variant='link' icon={<FaInstagram />} aria-label="facebook link" />
                    <IconButton onClick={linkOpen("https://www.github.com/alk-neq-me/")} color={useColorModeValue("black", "white")} variant='link' icon={<FaGithubAlt />} aria-label="facebook link" />
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
                  <Text tx="contact.sendMe"
                    fontSize="3xl"
                    fontFamily="heading"
                    textAlign="center"
                  />
                  <FormControl ref={form} as="form" isInvalid={isInvalid} p={2} display="flex" gap={2} flexDir="column" onSubmit={sendEmail}>
                    <Input type="text" placeholder={i18n.t("contact.inputs.name")} name="from_name" required />
                    <Input type="email" placeholder={i18n.t("contact.inputs.email")} name="email" required />
                    <Textarea placeholder={i18n.t("contact.inputs.message")} name="message" />
                    <Box alignSelf="end">
                      <Button isLoading={loading} type="submit" tx="contact.submit" variant="solid" />
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
