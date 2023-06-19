import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";
import {} from "react-icons/"
import {IoMdClock} from "react-icons/io"
import{AiOutlineUnorderedList}from "react-icons/ai"
import{IoIosEye}from "react-icons/io";
// Replace test data with your own
const features =
    [
        {   id: 0,
            title: "Đội ngũ nhân sự giàu kinh nghiệm",
            text: "Tại Công ty IVS, các chuyên gia không chỉ tiếp nhận các yêu cầu mà còn tư vấn về xây dựng hệ thống linh động tùy theo nét đặc trưng của từng khách hàng nhằm đảm bảo sự dễ dàng khi sử dụng cho người dùng.",
            Icon: IoMdClock
            
        },
        {
            id: 1,
            title: "Giao diện thân thiện với người dùng",
            text: "Được thiết kế bởi các chuyên gia, các sản phẩm phần mềm do công ty IVS xây dựng đểu có giao diện thân thiện, dễ sử dụng. Người dùng có thể dễ dàng sử dụng hệ thống của IVS mà không cần đến tài liệu hướng dẫn." ,
            Icon:AiOutlineUnorderedList
        },
        {
            id: 2,
            title: "Linh động theo từng khách hàng",
            text: "Tại Công ty IVS, các chuyên gia không chỉ tiếp nhận các yêu cầu mà còn tư vấn về xây dựng hệ thống linh động tùy theo nét đặc trưng của từng khách hàng nhằm đảm bảo sự dễ dàng khi sử dụng cho người dùng.",
            Icon: IoIosEye
        },
        {
            id: 3,
            title: "Dịch vụ hỗ trợ nhanh chóng",
            text: "Đội ngũ bảo trì, hỗ trợ vận hành, xử lí sự cố trong suốt quá trình sử dụng hệ thống. Các nhân viên của IVS nhiệt tình hỗ trợ giúp khách hàng yên tâm vì luôn có chuyên gia bên cạnh mình khi sử dụng hệ thống.",
            Icon: IoMdClock

        },
        {
            id: 4,
            title: "Sản phẩm theo tiêu chuẩn Nhật Bản",
            text: "Tại IVS, chất lượng sản phẩm luôn là tiêu chuẩn hàng đầu. Chúng tôi cam kết mang đến cho khách hàng sự hài lòng nhất khi lựa chọn IVS để xây dụng hệ thống cho quý khách hàng.",
            Icon:AiOutlineUnorderedList
        },
        {
            id: 5,
            title: "Có chi nhánh trên toàn quốc",
            text: "Hiện tại, Công ty IVs đã có 4 chi nhánh trên 3 miền Bắc - Trung - Nam nhằm đảm bảo hỗ  trợ khách hàng tốt nhất, nhanh chóng nhất.",
            Icon: IoIosEye
        },
        
    ];


export default function Advantages() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>LỢI THẾ CẠNH TRANH CỦA IVS</Heading>
        <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        <Text color={"gray.600"} fontSize={"xl"}>
        {"Chúng tôi luôn coi khách hàng là khách mời tham dự một bữa tiệc mà chúng tôi là chủ nhà."}
-Jeff Bezos (Amazon)-
        </Text>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"} _hover={{color:"OrangeRed"}}>
              <Box color={"green.400"} px={2}>
               {<Icon as={feature.Icon} w={10} h={10} color={"OrangeRed"} />} 
              </Box>
              <VStack align={"start"}>
                <Text _hover={{color:"orangered"}} fontWeight={700} fontSize={20} >{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
