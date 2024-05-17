import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBrunchDining } from "react-icons/md";
import { TbSofa, TbArmchair2, TbLamp2 } from "react-icons/tb";
import { GiOfficeChair } from "react-icons/gi";
import { BlogPostData, ProductType } from "types";

export const HOMEPAGE_MAIN_SLIDES = [
  {
    image: "/assets/img/1.jpg",
    content: {
      badge: "badge",
      heading: "heading",
      paragraph: "paraa",
    },
  },
  {
    image: "/assets/img/2.jpg",
    content: {
      badge: "sssssss",
      heading: "ssssss",
      paragraph: "sssssss",
    },
  },
  {
    image: "/assets/img/3.jpg",
    content: {
      badge: "sssssss",
      heading: "ssssss",
      paragraph: "sssssss",
    },
  },
];

export const HOMEPAGE_SECOND_SLIDES = [
  {
    icon: IoBedOutline,
    label: "Bedroom",
  },
  {
    icon: MdOutlineBrunchDining,
    label: "Dining table",
  },
  {
    icon: TbSofa,
    label: "sofa",
  },
  {
    icon: TbArmchair2,
    label: "armchair",
  },
  {
    icon: GiOfficeChair,
    label: "chair",
  },
  {
    icon: TbLamp2,
    label: "desk lamp",
  },
];

export const TEST_PRODUCT = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
} as ProductType;

export const PRODUCTS_SLIDER_ITEMS = [
  TEST_PRODUCT,
  TEST_PRODUCT,
  TEST_PRODUCT,
  TEST_PRODUCT,
  TEST_PRODUCT,
  TEST_PRODUCT,
] as ProductType[];

export const BLOG_POST_ITEM = {
  id: 1,
  title: "But I must explain to you how all this mistaken idea",
  commentsCount: 10,
  dateOfPublish: "2022-01-01",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  postContent:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In reprehenderit accusamus tenetur voluptate at esse expedita. Deleniti quaerat laboriosam saepe.",
} as BlogPostData;
