import { MdSportsTennis } from "react-icons/md";
import { GiSmartphone, GiSonicShoes } from 'react-icons/gi'
import { BsLaptop, BsSmartwatch, BsClockHistory, BsCamera, BsArrowDownUp, BsHeadphones, BsBook } from 'react-icons/bs';
import { MdFlashOn, MdOutlineDesktopMac } from 'react-icons/md';

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
            parent: '0',
            sub: [
                {
                    id: '0-0-0',
                    name: 'iPhone 11 Series',
                    slug: 'iphone-11-series',
                    parent: '0-0',
                    isShow: true,
                },
                {
                    id: '0-0-1',
                    name: 'iPhone 12 Series',
                    slug: 'iphone-12-series',
                    parent: '0-0',
                    isShow: true,
                },
                {
                    id: '0-0-2',
                    name: 'iPhone 13 Series',
                    slug: 'iphone-13-series',
                },
                {
                    id: '0-0-3',
                    name: 'iPhone 14 Series',
                    slug: 'iphone-14-series',
                    parent: '0-0',
                    isShow: true,
                }
            ]
        },
        {
            id: '0-1',
            name: 'Samsung',
            slug: 'samsung',
            image: '/images/products/samsung-galaxy-s22/samsung-galaxy-s22.png',
            isShow: true,
            parent: '0',
            sub: [
                {
                    id: '0-1-0',
                    name: 'Galaxy Note 20 Series',
                    slug: 'galaxy-note-20-series',
                    parent: '0-1',
                    isShow: true,
                },
                {
                    id: '0-1-1',
                    name: 'Galaxy S20 Series',
                    slug: 'galaxy-s20-series',
                    parent: '0-1',
                    isShow: true,
                },
                {
                    id: '0-1-2',
                    name: 'Galaxy S21 Series',
                    slug: 'galaxy-s21-series',
                    parent: '0-1',
                    isShow: true,
                }, {
                    id: '0-1-3',
                    name: 'Galaxy S22 Series',
                    slug: 'galaxy-s22-series',
                    parent: '0-1',
                    isShow: true,
                }, {
                    id: '0-1-4',
                    name: 'Galaxy A Series',
                    slug: 'galaxy-a-series',
                    parent: '0-1',
                    isShow: true,
                }
                , {
                    id: '0-1-5',
                    name: 'Galaxy Z Flip - Z Fold',
                    slug: 'galaxy-z-flip-and-z-fold',
                    parent: '0-1',
                    isShow: true,
                }
            ]
        },
        {
            id: '0-2',
            name: 'Xiaomi',
            slug: 'xiaomi',
            image: '/images/products/redmi-note.png',
            isShow: true,
            parent: '0',
            sub: [
                {
                    id: '0-2-0',
                    name: 'Xiaomi Redmi 9',
                    slug: 'xiaomi-redmi-9',
                    parent: '0-2',
                    isShow: true,
                },
                {
                    id: '0-2-1',
                    name: 'Xiaomi Redmi 10',
                    slug: 'xiaomi-redmi-10',
                    parent: '0-2',
                    isShow: true,
                },
                {
                    id: '0-2-2',
                    name: 'Xiaomi Redmi Note 10',
                    slug: 'xiaomi-redmi-note-10',
                    parent: '0-2',
                    isShow: true,
                }, {
                    id: '0-2-3',
                    name: 'Xiaomi Redmi Note 11',
                    slug: 'xiaomi-redmi-note-11',
                    parent: '0-2',
                    isShow: true,
                }, {
                    id: '0-2-4',
                    name: 'Xiaomi 11T',
                    slug: 'xiaomi-11t',
                    parent: '0-2',
                    isShow: true,
                }
            ]
        },
        {
            id: '0-3',
            name: 'OPPO',
            slug: 'oppo',
            image: '/images/products/oppo-reno7.png',
            isShow: true,
            parent: '0',
            sub: [
                {
                    id: '0-3-0',
                    name: 'OPPO A Series',
                    slug: 'oppo-a-series',
                    parent: '0-3',
                    isShow: true,
                },
                {
                    id: '0-3-1',
                    name: 'OPPO Reno6 Series',
                    slug: 'oppo-reno6-series',
                    parent: '0-3',
                    isShow: true,
                },
                {
                    id: '0-3-2',
                    name: 'OPPO Reno7 Series',
                    slug: 'oppo-reno7-series',
                    parent: '0-3',
                    isShow: true,
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
        sub: [{
            id: '1-0',
            name: 'Macbook',
            slug: 'macbook',
            image: '/images/products/laptop-mac-pro/macbook-pro-16-2021_1.png',
            isShow: true,
            parent: '1',
            sub: [
                {
                    id: '1-0-0',
                    name: 'Macbook pro 16 series',
                    slug: 'macbook-pro-16-series',
                    parent: '1-0',
                    isShow: true,
                },
                {
                    id: '1-0-1',
                    name: 'Macbook pro 13 series',
                    slug: 'macbook-pro-13-series',
                    parent: '1-0',
                    isShow: true,
                },
                {
                    id: '1-0-2',
                    name: 'Macbook-air-series',
                    slug: 'macbook-air-series',
                    parent: '1-0',
                    isShow: true,
                }
            ]
        },
        {
            id: '1-1',
            name: 'iMac',
            slug: 'imac',
            image: '/images/products/imac/imac-green.png',
            isShow: true,
            parent: '1',
            sub: [
                {
                    id: '1-1-0',
                    name: 'iMac 2021 series',
                    slug: 'imac-2021-series',
                    parent: '1-1',
                    isShow: true,
                },
                {
                    id: '1-1-1',
                    name: 'iMac 2020 series',
                    slug: 'imac-2020-series',
                    parent: '1-1',
                    isShow: true,
                },
            ]
        }
    ],
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
        sub: [
            {
                id: '3-0',
                name: 'Apple watch',
                slug: 'apple-watch',
                image: '/images/products/apple-watch/apple-watch-7.png',
                isShow: true,
                parent: '3',
                sub: [
                    {
                        id: '3-0-0',
                        name: 'Apple watch 7 series',
                        slug: 'apple-watch-7-series',
                        parent: '3-0',
                        isShow: true,
                    }
                ]
            },
            {
                id: '3-1',
                name: 'Samsung watch',
                slug: 'samsung-watch',
                image: '/images/products/samsung-watch/samsung-watch-4.png',
                isShow: true,
                parent: '3',
                sub: [
                    {
                        id: '3-1-0',
                        name: 'Samsung Galaxy Watch 4',
                        slug: 'samsung-galaxy-watch-4',
                        parent: '3-1',
                        isShow: true,
                    }
                ]
            },
            {
                id: '3-2',
                name: 'Garmin watch',
                slug: 'garmin-watch',
                image: '/images/products/garmin-watch/garmin-venu.png',
                isShow: true,
                parent: '3',
                sub: [
                    {
                        id: '3-2-0',
                        name: 'Garmin Venu',
                        slug: 'garmin-venu',
                        parent: '3-2',
                        isShow: true,
                    }
                ]
            }
        ],
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

export const categoryList = [
    {
        id: "0",
        name: "Smart Phones",
        slug: "smart-phones",
        icon: GiSmartphone,
        isShow: true,
        sub: ['0-0', '0-1', '0-2', '0-3']
    }, {
        id: '0-0',
        name: 'Apple',
        slug: 'apple',
        image: '/images/iphone13pro.png',
        isShow: true,
        parent: '0',
        sub: ['0-0-0', '0-0-1', '0-0-2', '0-0-3']
    },
    {
        id: '0-0-0',
        name: 'iPhone 11 Series',
        slug: 'iphone-11-series',
        parent: '0-0',
        isShow: true,
    },
    {
        id: '0-0-1',
        name: 'iPhone 12 Series',
        slug: 'iphone-12-series',
        parent: '0-0',
        isShow: true,
    },
    {
        id: '0-0-2',
        name: 'iPhone 13 Series',
        slug: 'iphone-13-series',
        parent: '0-0',
        isShow: true,
    },
    {
        id: '0-0-3',
        name: 'iPhone 14 Series',
        slug: 'iphone-14-series',
        parent: '0-0',
        isShow: true,
    },
    {
        id: '0-1',
        name: 'Samsung',
        slug: 'samsung',
        image: '/images/products/samsung-galaxy-s22-ultra.png',
        isShow: true,
        parent: '0',
        sub: ['0-1-0', '0-1-1', '0-1-2', '0-1-3', '0-1-4']
    },
    {
        id: '0-1-0',
        name: 'Galaxy Note 20 Series',
        slug: 'galaxy-note-20-series',
        parent: '0-1',
        isShow: true,
    },
    {
        id: '0-1-1',
        name: 'Galaxy S20 Series',
        slug: 'galaxy-s20-series',
        parent: '0-1',
        isShow: true,
    },
    {
        id: '0-1-2',
        name: 'Galaxy S21 Series',
        slug: 'galaxy-s21-series',
        parent: '0-1',
        isShow: true,
    }, {
        id: '0-1-3',
        name: 'Galaxy S22 Series',
        slug: 'galaxy-s22-series',
        parent: '0-1',
        isShow: true,
    }, {
        id: '0-1-4',
        name: 'Galaxy A Series',
        slug: 'galaxy-a-series',
        parent: '0-1',
        isShow: true,
    }
    , {
        id: '0-1-5',
        name: 'Galaxy Z Flip - Z Fold',
        slug: 'galaxy-z-flip-and-z-fold',
        parent: '0-1',
        isShow: true,
    },
    {
        id: '0-2',
        name: 'Xiaomi',
        slug: 'xiaomi',
        image: '/images/products/redmi-note.png',
        isShow: true,
        parent: '0',
        sub: ['0-2-0', '0-2-1', '0-2-2', '0-2-3', '0-2-4']
    },
    {
        id: '0-2-0',
        name: 'Xiaomi Redmi 9',
        slug: 'xiaomi-redmi-9',
        parent: '0-2',
        isShow: true,
    },
    {
        id: '0-2-1',
        name: 'Xiaomi Redmi 10',
        slug: 'xiaomi-redmi-10',
        parent: '0-2',
        isShow: true,
    },
    {
        id: '0-2-2',
        name: 'Xiaomi Redmi Note 10',
        slug: 'xiaomi-redmi-note-10',
        parent: '0-2',
        isShow: true,
    }, {
        id: '0-2-3',
        name: 'Xiaomi Redmi Note 11',
        slug: 'xiaomi-redmi-note-11',
        parent: '0-2',
        isShow: true,
    }, {
        id: '0-2-4',
        name: 'Xiaomi 11T',
        slug: 'xiaomi-11t',
        parent: '0-2',
        isShow: true,
    },
    {
        id: '0-3',
        name: 'OPPO',
        slug: 'oppo',
        image: '/images/products/oppo-reno7.png',
        isShow: true,
        parent: '0',
        sub: ['0-3-0', '0-3-1', '0-3-2']
    },
    {
        id: '0-3-0',
        name: 'OPPO A Series',
        slug: 'oppo-a-series',
        parent: '0-3',
        isShow: true,
    },
    {
        id: '0-3-1',
        name: 'OPPO Reno6 Series',
        slug: 'oppo-reno6-series',
        parent: '0-3',
        isShow: true,
    },
    {
        id: '0-3-2',
        name: 'OPPO Reno7 Series',
        slug: 'oppo-reno7-series',
        parent: '0-3',
        isShow: true,
    },
]
