import React, { useState } from "react";
import {
  Box,
  Image,
  Link,
  useColorModeValue,
  VStack,
  Text,
  Skeleton,
  AspectRatio,
  HStack,
  Tag,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Center,
  Fade,
} from "@chakra-ui/react";
import { format } from "timeago.js";
import ReactPlayer from "react-player/lazy";
import { Play } from "heroicons-react";

const BookmarkCard = (props) => {
  const { title, excerpt, cover, type, link, created } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (type == "link") {
      window.open(link);
    } else {
      onOpen();
    }
  };

  return (
    <Box
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor={type == "image" ? "zoom-in" : "pointer"}
    >
      <VStack
        w="100%"
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{
          transform: "translateY(-4px)",
          shadow: "sm",
          textDecoration: "none",
        }}
        overflow="hidden"
        align="start"
        spacing={0}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={1.85 / 1}
            maxW="400px"
            w="100%"
            borderBottomWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
          >
            <Image src={cover} fallback={<Skeleton />} objectFit="cover" />
          </AspectRatio>
          <Center
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            transition="all 0.6s"
            transition-timing-function="spring(1 100 10 10)"
            opacity={type == "video" && isHovered ? "1" : "0"}
          >
            <Fade in>
              <Icon as={Play} w={12} h={12} color="white" />
            </Fade>
          </Center>
        </Box>

        <VStack py={2} px={4} spacing={0} align="start">
          <Text fontSize="sm" noOfLines={1} fontWeight="500">
            {title}
          </Text>
          <HStack spacing={1}>
            <Text
              fontSize="xs"
              fontWeight="500"
              color={useColorModeValue("gray.500", "gray.400")}
              textTransform="capitalize"
            >
              {type}
            </Text>
            {/* <Box bg="blue.500" rounded="full" p="2px" color="whites">
              <LinkOutline size="8"></LinkOutline>
            </Box> */}
            <Text
              fontSize="xs"
              fontWeight="400"
              color={useColorModeValue("gray.400", "gray.500")}
            >
              – {format(created)}
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
        <ModalOverlay />
        <ModalContent
          bg="none"
          maxW={type === "video" ? "auto" : "28rem"}
          w="auto"
        >
          <ModalBody p={0} rounded="lg" overflow="hidden" bg="none">
            <Center>
              {type == "image" ? (
                <Image src={cover} rounded="lg" />
              ) : (
                <ReactPlayer url={link} controls playing />
              )}
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BookmarkCard;
