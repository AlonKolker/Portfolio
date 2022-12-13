import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin,FaGithubSquare,FaNode } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb,SiVuetify,SiRedux,SiFirebase,SiPostman,SiJavascript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
// import work1 from "./assets/work1.png";
import work11 from "./assets/work11.png";
import work22 from "./assets/work22.png";
import work33 from "./assets/work33.png";
import work44 from "./assets/work44.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  {icon:<FaLinkedin />,link:"https://www.linkedin.com/in/alon-kolker/"},
  {icon:<FaGithubSquare />,link:"https://github.com/AlonKolker"},
  // <FaInstagram />,
  // <FaLinkedin />,
  // <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Alon Kolker"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "0546308290"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "alonkolk@gmail.com"
  }
]

export const icons = [<IoLogoJavascript/>,<FaHtml5 />, <FaCss3 />, <FaSass />, <FaReact />,<SiRedux/>, <FaNode />,<FaVuejs/>,<SiVuetify/>,<SiFirebase/>,<SiMongodb/>,<SiPostman/>]

export const experiences = [
  {
    id: 1,
    year: "2022-2022",
    position: "Coding Academy Boot camp graduate - Web developing 640 hours) | May 2022",
    company: "Coding Academy"
  },
  {
    id: 2,
    year: "2020-2022",
    position: "Radar System Integration Engineer",
    company: "IAI - Israel Aerospace Industries"
  },
  {
    di: 3,
    year: "2019-2020",
    position: "Project Manager and Control Engineer",
    company: "Contel Technologies"
  },
  // {
  //   id: 3,
  //   year: "2019",
  //   position: "Intern Web Dveloper",
  //   company: "shop.com.mm"
  // }
]
// export const finishes = [
//   {
//     id: 1,
//     number: '6+',
//     itemName: "Years Of Experience"
//   },
//   {
//     id: 2,
//     number: "150+",
//     itemName: "Satisfied Customers"
//   },
//   {
//     id: 3,
//     number: "669+",
//     itemName: "Designed Items"
//   },
//   {
//     id: 4,
//     number: "117+",
//     itemName: "Clients Served"
//   }
// ]
export const workImages = [
  {
    id: 1,
    img: work11,
    name: "Trello clone",
    category: "web",
    description:"Vue 3, Vuex, Node.js, Express and MongoDB",
    gitHub:"https://github.com/AlonKolker/Sprint4-Shmerllo-frontend",
    site:"https://shmerllo.onrender.com/",
  },
  {
    id: 2,
    img: work22,
    name: "Whatsup clone",
    category: "web",
    description:"React, Redux and local storage",
    gitHub:"https://github.com/AlonKolker/Whatsup-Clone-React-Redux",
    site:"https://alonkolker.github.io/Whatsup-Clone-React-Redux/",

  },
  {
    id: 3,
    img: work33,
    name: "OMNIFOOD",
    category: "web",
    description:"Just HTML and CSS.",
    gitHub:"https://github.com/AlonKolker/OMNIFOOD",
    site:"https://alonkolker.github.io/OMNIFOOD/",

  },
  {
    id: 4,
    img: work44,
    name: "Mister Bitcoin",
    category: "web",
    description:"React, Redux, React Router external API and local storage",
    gitHub:"https://github.com/AlonKolker/Mister-Bitcoin-React-Hooks-Redux",
    site:"https://alonkolker.github.io/Mister-Bitcoin-React-Hooks-Redux/#/signup",

  },
  // {
  //   id: 4,
  //   img: work4,
  //   name: "project 4",
  //   category: "app"
  // },
  // {
  //   id: 5,
  //   img: work5,
  //   name: "project 5",
  //   category: 'app'
  // },
  // {
  //   id: 6,
  //   img: work6,
  //   name: "project 6",
  //   category: "design"
  // }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Universe, Earth, Israel"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "alonkolk@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "0546308290"
  }
]
