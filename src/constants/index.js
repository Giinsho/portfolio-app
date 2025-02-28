import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  github,
  Me,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "stats",
    title: "Stats",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
  {
    id: "footer",
    title: "More",
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rating",
    content:
      "Recommended and highly rated by former partners based on completed projects.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content: "Take proactive steps make sure your information are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Online shopping",
    content:
      "Shopping based on ecommerce brings much more profits for companies by up to 60%.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Time to get yourself a new motto. Just Make Money.",
    name: "Lalo Salamanca",
    title: "Distributor",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I have people waiting for me. They don't know what I do. They never will. They're protected, but I do what I do so they can have a better life. You ask me how I keep going, that's how.",
    name: "Mike Ehrmantraut",
    title: "Head of Security",
    img: people02,
  },
  {
    id: "feedback-3",
    content: "I did it for me. I liked it.",
    name: "Walter White",
    title: "Co-Founder, Co-Owner, Chemist",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "0",
  },
  {
    id: "stats-2",
    title: "All Visits",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "The most people visited from the country...",
    value: "Poland",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Vite",
        link: "https://vitejs.dev/guide/",
      },
      {
        name: "React Dev",
        link: "https://react.dev/",
      },
      {
        name: "React",
        link: "https://pl.legacy.reactjs.org/",
      },
      {
        name: "Npm JS",
        link: "https://www.npmjs.com/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Discord",
        link: "https://discord.com/",
      },
      {
        name: "Reddit",
        link: "https://www.reddit.com/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Strefa",
        link: "https://strefa.ii.uph.edu.pl/",
      },
      {
        name: "UPH",
        link: "https://www.uph.edu.pl/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-5",
    icon: github,
    link: "https://github.com/Giinsho?tab=repositories",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
