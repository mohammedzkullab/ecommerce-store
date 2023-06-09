import { IoBedOutline } from "react-icons/io5"
import { MdOutlineBrunchDining } from "react-icons/md"
import { TbSofa, TbArmchair2, TbLamp2 } from "react-icons/tb"
import { GiOfficeChair } from "react-icons/gi"

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
        label: "Bedroom"
    },
    {
        icon: MdOutlineBrunchDining,
        label: "Dining table"
    },
    {
        icon: TbSofa,
        label: "sofa"
    },
    {
        icon: TbArmchair2,
        label: "armchair"
    },
    {
        icon: GiOfficeChair,
        label: "chair"
    },
    {
        icon: TbLamp2,
        label: "desk lamp"
    },

];

export const TEST_PRODUCT = { "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }