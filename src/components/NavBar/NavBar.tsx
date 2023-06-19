import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useEffect, useState } from 'react';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ bgColor, setBgColor ] = useState('transparent');
  const [ minHeight, setMinHeight ] = useState('100px');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
        setBgColor('rgba(0, 0, 0, 0.7)')
        setMinHeight('20px')
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
        setBgColor('transparent')
        setMinHeight('100px')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);


  return (
    <Box as="header" position="fixed" w="100%" top={0} zIndex={100}>
      <Flex
        bg={bgColor}
        transition={"all 1s"}
        color={useColorModeValue("while", "white")}
        minH={minHeight}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            flex={{ base: 1 }} 
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize={"40px"}
            fontWeight={"700"}
            color={useColorModeValue("white", "orange")}
          >
            IVS
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10} >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("orange", "orange");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} pt={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "orange" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  id: number;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    id: 0,
    label: "TRANG CHỦ",
    href: "#",
  },
  {
    id: 1,
    label: "SẢN PHẨM",
    children: [
      {
        id: 0,
        label: "Quản lý nhân sự",
        href: "#",
      },
      {
        id: 1,
        label: "Quản lý tồn kho",
        href: "#",
      },
      {
        id: 2,
        label: "Quản lý sản xuất",
        href: "#",
      },
      {
        id: 3,
        label: "Quy trình phê duyệt",
        children: [
          {id: 0,
            label: "Phê duyệt nhân sự",
            href: "#"
          },
          {id: 1,
            label: "Quản lý hồ sơ giấy tờ",
            href: "#"
          }

        ]
      },  
      {
        id: 4,
        label: "kintone",
        href: "#",
      }, 
    ],
  },
  {
    id: 3,
    label: "DỊCH VỤ",
    children: [
      {
        id: 0,
        label: "Tư vấn giải pháp",
        href: "#",
      },
      {
        id: 1,
        label: "Quản trị nhân sự",
        href: "#",
      },
      {
        id: 2,
        label: "Xây dựng phần mềm",
        href: "#",
      },
      {
        id: 3,
        label: "Dịch vụ bảo trì",
        href: "#",
      },
      {
        id: 4,
        label: "Xây dựng ứng dụng di động",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    label: "SỰ KIỆN",
    href: "#",
  },
  {
    id: 5,
    label: "GIẢI PHÁP",
    href: "#",
  },
  {
    id: 6,
    label: "KHÁCH HÀNG",
    href: "#",
  },
  {
    id: 7,
    label: "VIDEO",
    href: "#",
  },
  {
    id: 8,
    label: "LIÊN HỆ",
    href: "#",
  },
];
