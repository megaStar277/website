import React from "react";
import {
  HStack,
  Button,
  useColorMode,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import Container from "../components/container";
import NextLink from "next/link";
import { PencilAltIcon, MailIcon } from "@heroicons/react/outline";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import Link from "./link";

const Footer = () => {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{ color: useColorModeValue("neutral.1000", "neutralD.1000") }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        <FooterLink href="mailto:daniel@danielwirtz.com" name="Contact" />
        {/* <Text
          fontSize="sm"
          color={useColorModeValue("neutral.800", "neutralD.800")}
        >
          © {date} Daniel Wirtz{" "}
        </Text> */}
        <HStack spacing={4}>
          <Link href="https://twitter.com/wirtzdan/" isExternal unstyled>
            <IconButton
              icon={<TwitterLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.800")}
            ></IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/wirtzdan/"
            isExternal
            unstyled
          >
            <IconButton
              icon={<LinkedinLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.800")}
            ></IconButton>
          </Link>
          <Link href="https://github.com/wirtzdan" isExternal unstyled>
            <IconButton
              icon={<GithubLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.800")}
            ></IconButton>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCje_bQMr6F45x0Auii7IOvA"
            unstyled
            isExternal
          >
            <IconButton
              icon={<YoutubeLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.800")}
            ></IconButton>
          </Link>
        </HStack>
        <FooterLink href="/privacy" name="Privacy" />
      </HStack>
    </Container>
  );
};
export default Footer;
