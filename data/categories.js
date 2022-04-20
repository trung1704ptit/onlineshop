import { MdSportsTennis } from "react-icons/md";
import { GiSmartphone, GiSonicShoes } from 'react-icons/gi'
import { BsLaptop, BsSmartwatch, BsClockHistory, BsCamera, BsArrowDownUp, BsHeadphones, BsBook } from 'react-icons/bs';
import { MdFlashOn, MdOutlineDesktopMac } from 'react-icons/md'
export const categories = [
    {
        id: "0",
        name: "Smart Phones",
        slug: "smart-phones",
        icon: GiSmartphone,
        isShow: true,
        sub: [{
            id: '0-0',
            name: 'Apple',
            slug: 'apple',
            image: '/images/iphone13pro.png',
            isShow: true,
            sub: [
                {
                    id: '0-0-0',
                    name: 'iPhone 11 Series',
                    slug: 'iphone-11-series'
                },
                {
                    id: '0-0-1',
                    name: 'iPhone 12 Series',
                    slug: 'iphone-12-series'
                },
                {
                    id: '0-0-2',
                    name: 'iPhone 13 Series',
                    slug: 'iphone-13-series'
                },
                {
                    id: '0-0-3',
                    name: 'iPhone 14 Series',
                    slug: 'iphone-14-series'
                }
            ]
        },
        {
            id: '0-1',
            name: 'Samsung',
            slug: 'samsung',
            image: '/images/products/samsung-galaxy-s22-ultra.png',
            isShow: true,
            sub: [
                {
                    id: '0-1-0',
                    name: 'Galaxy Note 20 Series',
                    slug: 'galaxy-note-20-series'
                },
                {
                    id: '0-1-2',
                    name: 'Galaxy S20 Series',
                    slug: 'galaxy-s20-series'
                },
                {
                    id: '0-1-3',
                    name: 'Galaxy S21 Series',
                    slug: 'galaxy-s21-series'
                }, {
                    id: '0-1-4',
                    name: 'Galaxy S22 Series',
                    slug: 'galaxy-s22-series'
                }, {
                    id: '0-1-5',
                    name: 'Galaxy A Series',
                    slug: 'galaxy-a-series'
                }
                , {
                    id: '0-1-6',
                    name: 'Galaxy Z Flip 3',
                    slug: 'galaxy-z-flip-3'
                }
                , {
                    id: '0-1-7',
                    name: 'Galaxy Z Fold 3',
                    slug: 'galaxy-z-fold-3'
                }
            ]
        },
        {
            id: '0-2',
            name: 'Xiaomi',
            slug: 'xiaomi',
            image: '/images/products/redmi-note.png',
            isShow: true,
            sub: [
                {
                    id: '0-2-0',
                    name: 'Xiaomi Redmi 9',
                    slug: 'xiaomi-redmi-9'
                },
                {
                    id: '0-2-1',
                    name: 'Xiaomi Redmi 10',
                    slug: 'xiaomi-redmi-10'
                },
                {
                    id: '0-2-2',
                    name: 'Xiaomi Redmi Note 10',
                    slug: 'xiaomi-redmi-note-10'
                }, {
                    id: '0-2-3',
                    name: 'Xiaomi Redmi Note 11',
                    slug: 'xiaomi-redmi-note-11'
                }, {
                    id: '0-2-4',
                    name: 'Xiaomi 11T',
                    slug: 'xiaomi-11t'
                }
            ]
        },
        {
            id: '0-3',
            name: 'OPPO',
            slug: 'oppo',
            image: '/images/products/oppo-reno7.png',
            isShow: true,
            sub: [
                {
                    id: '0-3-0',
                    name: 'OPPO A Series',
                    slug: 'oppo-a-series'
                },
                {
                    id: '0-3-1',
                    name: 'OPPO Reno6 Series',
                    slug: 'oppo-reno6-series'
                },
                {
                    id: '0-3-2',
                    name: 'OPPO Reno7 Series',
                    slug: 'oppo-reno7-series'
                },
            ]
        }
        ],
    },
    {
        id: "1",
        name: "Computer & Accessories",
        slug: "computer-acccessories",
        icon: BsLaptop,
        isShow: true,
        sub: [],
    },
    {
        id: "2",
        name: "Television & Video",
        slug: "television-video",
        icon: MdOutlineDesktopMac,
        isShow: true,
        sub: [],
    },
    {
        id: "3",
        name: "Smartwatches",
        slug: "smartwatches",
        icon: BsSmartwatch,
        isShow: true,
        sub: [],
    },
    {
        id: "4",
        name: "Headphones",
        slug: "headphones",
        icon: BsHeadphones,
        isShow: true,
        sub: [],
    },
    {
        id: "5",
        name: "Camera & Photo",
        slug: "camera & photo",
        icon: BsCamera,
        isShow: true,
        sub: [],
    },
    {
        id: "6",
        name: "Sport and Outdoor",
        slug: "sport-and-outdoor",
        icon: MdSportsTennis,
        isShow: true,
        sub: [],
    },
    {
        id: "7",
        name: "Fashion",
        slug: "fashion",
        icon: GiSonicShoes,
        isShow: true,
        sub: [],
    },
    {
        id: "8",
        name: "Books",
        slug: "books",
        icon: BsBook,
        isShow: true,
        sub: [],
    },
    {
        id: "9",
        name: "Best Sellers",
        slug: "best-sellers",
        icon: BsArrowDownUp,
        isShow: true,
        sub: [],
    },
    {
        id: "10",
        name: "New Arrivals",
        slug: "new-arrivals",
        icon: BsClockHistory,
        isShow: true,
        sub: [],
    }, {
        id: "11",
        name: "Hot Deals",
        slug: "hot-deals",
        icon: MdFlashOn,
        isShow: true,
        sub: [],
    }
];
