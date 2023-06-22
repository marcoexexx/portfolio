import { Box, FormControl, Input, Textarea } from "@chakra-ui/react";
import { FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

import { AnimatedSection, Button } from "..";
import Text from "../Text";
import { useRef } from "react";


const infomations = [
  {
    icon: <FiMapPin />,
    content: "Home"
  },
  {
    icon: <FiMapPin />,
    content: "Home"
  },
]

export function ContactSection() {
  const form = useRef<HTMLFormElement|null>(null);

  const isInvalid = false;

  const sendEmail = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (form.current) emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(res => console.log(res.text))
      .catch(err => console.log(err))
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

        <Box
          display="flex"
          // flexDir={{ md: "row", base: "column" }}
          flexDir="column"
        >
          {/* Social */}
          <Box p={2}
            display="flex"
            flexDir="column"
            alignItems="start"
            gap={6}
          >
            <Text text="Contact Infomation"
              fontSize="3xl"
              fontFamily="heading"
              textAlign="center"
            />
            {infomations.map((info, i) => (
              <Box
                key={i}
                display='flex'
                flexDir='row'
                gap={4}
                fontSize="lg"
              >
                {info.icon}
                <Text text={info.content} />
              </Box>
            ))}
          </Box>

          {/* Email form */}
          <FormControl ref={form} as="form" isInvalid={isInvalid} p={2} display="flex" gap={2} flexDir="column" onSubmit={sendEmail}>
            <Input type="text" placeholder="Type your full name" name="from_name" required />
            <Input type="email" placeholder="Email address" name="email" required />
            <Textarea placeholder="Message" name="message" />
            <Box alignSelf="end">
              <Button type="submit" text="Submit" variant="solid" />
            </Box>
          </FormControl>
        </Box>
      </Box>
    </AnimatedSection>
  )
}
