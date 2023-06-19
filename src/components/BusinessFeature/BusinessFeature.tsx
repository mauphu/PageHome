/* eslint-disable @next/next/no-img-element */
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import {IoMdClock} from "react-icons/io"
import{IoIosEye}from "react-icons/io";
import{
  AiOutlineUnorderedList,
}from "react-icons/ai"
import Card from "../Cards/Cards";

const products = [
  {
    id: 0,
    head: "IFMS",
    description: "Indivi Factory Management System (IFMS) là giải pháp quản lý sản xuất được phát triển bởi công ty IVS. IFMS là một phần mềm dễ dàng sử dụng và có khả năng tích hợp được nhiều thông tin. IFMS hiện thực hóa mọi ý tưởng quản lý của bạn.",
    href: "#",
    Icon: IoMdClock,
    img:"https://picsum.photos/id/137/1000/1000",
  },
  {
    id: 1,
    head: "IHRM",
    description: "Indivi Human Resources Management (IHRM) là phần mềm quản lý thông tin nhân viên, chấm công, tính lương, và các nghiệp vụ nhân sự khác. IHRM được kiểm chứng thực tiễn cho nhiều khách hàng ở Việt Nam.",
    href: "#",
    img:"https://picsum.photos/id/251/1000/1000",
    Icon: AiOutlineUnorderedList,
  },
  {
    id: 2,
    head: "IWMS",
    description: "Indivi Warehouse Management System (IWMS) là một giải pháp quản lý hàng tồn kho được xây dựng bởi các kỹ sư hàng đầu của công ty IVS. IWMS là sự lựa chọn tối ưu cho các công ty muốn quản lý tồn kho một cách hiệu quả và chuyên nghiệp.",
    href: "#",
    img:"https://picsum.photos/id/312/1000/1000",
    Icon: IoIosEye,
    
  },
  {
    id: 3,
    head: "IVS Workflow",
    description: "IVS WORKFLOW là bộ sản phẩm dành cho quy trình phê duyệt trong doanh nghiệp qua nhiều cấp bao gồm chữ kí điện tử và email phê duyệt. IVS WORKFLOW giúp doanh nghiệp tiết kiệm thời gian và giảm chi phí cho việc quản lý hồ sơ giấy tờ.",
    href: "#",
    img:"https://picsum.photos/id/423/1000/1000",
    Icon: IoMdClock,
  },
  {
    id: 4,
    head: "kintone",
    description: "kintone là dịch vụ điện toán đám mây cho phép người dùng nhanh chóng hệ thống hóa quản lý dựa trên nền tảng nghiệp vụ của từng công ty. Có hai phiên bản: kintone Light và kintone Standard linh động theo nhu cầu của người dùng.",

    href: "#",
    img:"https://picsum.photos/id/443/1000/1000",
    Icon: AiOutlineUnorderedList,
  },
  {
    id: 5,
    head: "Aizen",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#",
    img:"https://picsum.photos/id/555/1000/1000.jpg",
    Icon: IoIosEye,
    
  },
]

export default function BusinessFeature() {
  return (
    <Box className="parallax" p={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading  fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          SẢN PHẨM PHẦN MỀM
        </Heading>
        <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Ứng dụng công nghệ cao cho cuộc sống dễ dàng hơn.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0}>
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              heading={product.head}
              icon={<Icon as={product.Icon} w={10} h={10} color={"white"} />}
              description= {product.description}
              imgs={product.img}
              href={product.href}
            />
          ))}
        </SimpleGrid>
      </Container>
      
    </Box>
  );
}
