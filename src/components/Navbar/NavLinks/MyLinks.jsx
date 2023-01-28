export const navLinks = [
  //* link ba sub menu
  { id: 39, name: " اخبار نجوم", link: "/blog", submenu: false, sublinks: [] },
  { id: 61, name: "فیلم ها", link: "/movies", submenu: false, sublinks: [] },

  { id: 60, name: "کتاب ها", link: "/books", submenu: false, sublinks: [] },
  { id: 38, name: "گالری", link: "/gallery", submenu: false, sublinks: [] },
  {
    id: 0,
    name: "علم نجوم",
    submenu: true,
    link: "/blog",
    sublinks: [
      {
        id: 43,
        Head: "کهکشان ها",
        sublink: [
          { id: 14, name: "کهکشان ما", link: "/" },
          { id: 15, name: "کهکشان بچه قورباغه", link: "/" },
          { id: 16, name: "کهکشان چشم سیاه", link: "/" },
          { id: 17, name: "کهکشان کلاه مکزیکی", link: "/" },
          { id: 18, name: "کهکشان گرداب", link: "/" },
        ],
      },
      {
        id: 44,
        Head: "منظومه ی شمسی",
        sublink: [
          { id: 19, name: "زمین", link: "/" },
          { id: 20, name: "مشتری", link: "/" },
          { id: 21, name: "مریخ", link: "/" },
          { id: 22, name: "زحل", link: "/" },
          { id: 23, name: "عطارد", link: "/" },
        ],
      },
      {
        id: 45,
        Head: "کهکشان ها",
        sublink: [
          { id: 24, name: "کهکشان ما", link: "/" },
          { id: 25, name: "کهکشان بچه قورباغه", link: "/" },
          { id: 26, name: "کهکشان چشم سیاه", link: "/" },
          { id: 27, name: "کهکشان کلاه مکزیکی", link: "/" },
          { id: 28, name: "کهکشان گرداب", link: "/" },
        ],
      },
      {
        id: 46,
        Head: "منظومه ی شمسی",
        sublink: [
          { id: 29, name: "زمین", link: "/" },
          { id: 30, name: "مشتری", link: "/" },
          { id: 31, name: "مریخ", link: "/" },
          { id: 32, name: "زحل", link: "/" },
          { id: 33, name: "عطارد", link: "/" },
        ],
      },
      {
        id: 48,
        Head: "باقی موارد",
        sublink: [
          { id: 34, name: "رصد آسمان شب", link: "/" },
          { id: 35, name: "سیاره ها", link: "/" },
        ],
      },
      
    ],
  },
];
