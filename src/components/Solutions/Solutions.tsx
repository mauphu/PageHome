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
  Avatar,
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
import PeopleAvatar from "./PeopleAvatar";

const products = [
  {
    id: 0,
    head: "Quản lý sản xuất trong may mặc",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 1,
    head: "Quản lý nhân sự cho chuỗi cửa hàng",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 2,
    head: "Quản lý nhân sự cho công ty sản xuất",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      arrows: false,
    };
    return (
      <Container maxW={"90%"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          pt={"60px"}
          pb={"20px"}
        >
          <Heading fontSize={"3xl"}>MỘT SỐ GIẢI PHÁP NỔI BẬT</Heading>
          <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        </Stack>
        <Slider {...settings}>
          <PeopleAvatar/>
          <PeopleAvatar/>
          <PeopleAvatar/>
        </Slider>
        
      </Container>
    );
  }
}
