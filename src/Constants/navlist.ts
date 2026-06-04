export const navList = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
    children: [
      {
        id: 21,
        name: "Oil Change",
        path: "/services/oil-change",
      },
      {
        id: 22,
        name: "Engine Repair",
        path: "/services/engine-repair",
      },
    ],
  },
  {
    id: 3,
    name: "Appearance",
    path: "/appearance",
    children: [
      {
        id: 31,
        name: "Car Wash",
        path: "/appearance/car-wash",
      },
      {
        id: 32,
        name: "Detailing",
        path: "/appearance/detailing",
      },
    ],
  },
  {
    id: 4,
    name: "Maintenance",
    path: "/maintenance",
    children: [
      {
        id: 41,
        name: "Brake Service",
        path: "/maintenance/brake-service",
      },
      {
        id: 42,
        name: "Tire Rotation",
        path: "/maintenance/tire-rotation",
      },
    ],
  },
  {
    id: 5,
    name: "About Us",
    path: "/about",
  },
  {
    id: 6,
    name: "Contact Us",
    path: "/contact",
  },
];