/* eslint-disable jsx-a11y/alt-text */
//
import Card from "../Cards/Cards";
import {
  Icon,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Hero from "../Hero/Hero";
// import   './global.css'
import React, { Component } from "react";
import Slider from "react-slick";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const partnerList = [
  {
    id: 0,
    img: "public\\img\\clients\\client-1.png",
  },
  {
    id: 1,
    img: "public\\img\\clients\\client-2.png",
  },
  {
    id: 2,
    img: "public\\img\\clients\\client-3.png",
  },
  {
    id: 3,
    img: "public\\img\\clients\\client-4.png",
  },
  {
    id: 4,
    img: "public\\img\\clients\\client-5.png",
  },
  {
    id: 5,
    img: "public\\img\\clients\\client-6.png",
  },
  {
    id: 6,
    img: "public\\img\\clients\\client-7.png",
  },
  {
    id: 7,
    img: "public\\img\\clients\\client-8.png",
  },
];

const products = [
  {
    id: 0,
    head: "IFMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#",
  },
  {
    id: 1,
    head: "IHRM",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    href: "#",
  },
  {
    id: 2,
    head: "IWMS",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#",
  },
  {
    id: 3,
    head: "IVS Workflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#",
  },
  {
    id: 4,
    head: "kintone",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    href: "#",
  },
  {
    id: 5,
    head: "Aizen",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#",
  },
];

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      arrows: false,
    };

    return (
      <Container maxW={"full"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          pt={"100px"}
          pb={"40px"}
        >
          <Heading fontSize={"3xl"}>ĐỐI TÁC CỦA CHÚNG TÔI</Heading>
          <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        </Stack>
        <Container maxW={"100%"}>
          {" "}
          <Slider {...settings}>
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/lgo-ntt.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/partner2.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/logo_kddi_01.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/Cybozu-logo-2.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/logo_chatwork.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/logo_keyence.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/lgo-ntt.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/partner2.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/logo_kddi_01.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/Cybozu-logo-2.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/logo_chatwork.jpeg"}
            />
            <Image
              p={2}
              h={"100px"}
              w={"full"}
              src={"https://indivisys.vn/img/logo_keyence.jpeg"}
            />
          </Slider>
        </Container>
      </Container>
    );
  }
}
