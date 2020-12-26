import React from "react";
import {
  HStack,
  Button,
  useColorMode,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Container from "../components/container";
import NextLink from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("gray.500", "gray.600")}
          _hover={{ color: useColorModeValue("gray.600", "gray.500") }}
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
        py={4}
      >
        <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.600")}>
          © {date} Daniel Wirtz{" "}
        </Text>
        <HStack spacing={4}>
          <FooterLink href="/disclaimer" name="Disclaimer" />
          <FooterLink href="/privacy" name="Privacy" />
        </HStack>
      </HStack>
    </Container>
  );
};
export default Footer;
