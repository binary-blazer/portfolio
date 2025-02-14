export const config = {
  title: "BinaryBlazer",
  description:
    "This is a portfolio website for a full-stack developer called BinaryBlazer.",
  author: "BinaryBlazer",
  keywords: "binaryblazer, portfolio, full-stack, developer, germany",
  twitter: "@BinaryBlazer",
  favicon: "/img/favicon-rounded.jpg",
  image: "/img/og-image.png",
  underConstruction: true,
  mobileAllowed: false,
  github: {
    username: "binary-blazer",
  },
  npm: {
    username: "jonasfranke",
  },
  fireworks: {
    featureEnabled: true, // Set to true to enable fireworks on 31th December and 1st January
    enabled: true,
    opacity: 0.5,
    particles: 50,
    gravity: 0.5,
  },
};

export const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const colors = [
  {
    name: "Blue",
    color: "#3B82F6",
  },
  {
    name: "Green",
    color: "#10B981",
  },
  {
    name: "Red",
    color: "#EF4444",
  },
  {
    name: "Yellow",
    color: "#F59E0B",
  },
  {
    name: "Purple",
    color: "#8B5CF6",
  },
  {
    name: "Pink",
    color: "#EC4899",
  },
];

export const fonts = [
  {
    name: "Inter",
    font: "Inter",
  },
  {
    name: "Roboto",
    font: "Roboto",
  },
  {
    name: "Poppins",
    font: "Poppins",
  },
  {
    name: "Lato",
    font: "Lato",
  },
  {
    name: "Nunito",
    font: "Nunito",
  },
  {
    name: "Raleway",
    font: "Raleway",
  },
];

export const projects = [
  {
    title: "Nyx",
    description:
      "Combines the best of Python and JavaScript while remaining fast, stable, resource efficient and reliable. Allowing users to build anything.",
    link: "https://github.com/nyxland/nyx",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["TypeScript"],
    image: "https://avatars.githubusercontent.com/u/192033339?s=200&v=4",
    banner: "https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/nyxland/nyx",
  },
  {
    title: "Portfolio",
    description:
      "The portfolio you are currently on",
    link: "https://github.com/binary-blazer/portfolio",
    status: {
      inProgress: false,
      complete: true,
      paused: false,
      cancelled: false,
    },
    technologies: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
    ],
    image: "https://avatars.githubusercontent.com/u/81481526?v=4",
    banner: "https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/binary-blazer/portfolio",
  },
  {
    title: "react-effectz",
    description:
      "react effects npm package including some effects in form as components",
    link: "https://github.com/binary-blazer/react-effectz",
    status: {
      inProgress: false,
      complete: true,
      paused: false,
      cancelled: false,
    },
    technologies: ["React", "TypeScript"],
    image: "https://avatars.githubusercontent.com/u/81481526?v=4",
    banner: "https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/binary-blazer/react-effectz",
  },
  {
    title: "uuml-tool",
    description:
      "The UUML Tool is a command-line utility designed to replace German Umlauts in HTML files with their corresponding HTML entities",
    link: "https://github.com/binary-blazer/uuml-tool",
    status: {
      inProgress: false,
      complete: true,
      paused: false,
      cancelled: false,
    },
    technologies: ["Rust"],
    image: "https://avatars.githubusercontent.com/u/81481526?v=4",
    banner: "https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/binary-blazer/uuml-tool",
  },
];

export const testimonials = [
  {
    name: "Alice Johnson",
    title: "Client",
    message:
      "BinaryBlazer was a lifesaver for our project. His dedication and expertise turned our vision into reality.",
  },
  {
    name: "Bob Williams",
    title: "Client",
    message:
      "We were impressed by BinaryBlazer's commitment to delivering quality work on time. Our project was a success thanks to him.",
  },
  {
    name: "Charlie Brown",
    title: "Client",
    message:
      "BinaryBlazer's innovative approach helped us stay ahead of the curve. We couldn't have done it without him.",
  },
  {
    name: "Diana Smith",
    title: "Client",
    message:
      "Working with BinaryBlazer was a pleasure. His professionalism and technical skills exceeded our expectations.",
  },
  {
    name: "Ethan Davis",
    title: "Client",
    message:
      "BinaryBlazer's ability to understand and solve complex problems was impressive. He were a valuable asset to our team.",
  },
  {
    name: "Fiona Miller",
    title: "Client",
    message:
      "BinaryBlazer's dedication to our project was instrumental in its success. We're grateful for his hard work.",
  },
  {
    name: "George Wilson",
    title: "Client",
    message:
      "BinaryBlazer's technical skills and dedication were a great asset to our project. We couldn't have asked for a better developer.",
  },
  {
    name: "Hannah Moore",
    title: "Client",
    message:
      "BinaryBlazer's ability to deliver high-quality work on time made our collaboration a success. We highly recommend him.",
  },
];

export const technologies = [
  {
    name: "Languages",
    technologies: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "Elixir",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
      },
      {
        name: "Ruby",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      },
      {
        name: "Rust",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
      },
      {
        name: "Batch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
      {
        name: "PowerShell",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
      },
      {
        name: "Shell",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      {
        name: "Crystal",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg",
      },
    ],
  },
  {
    name: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "NuxtJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      },
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Svelte",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      {
        name: "NodeJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Deno",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Spring",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      },
    ],
  },
  {
    name: "Databases",
    technologies: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "GitLab CI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
      {
        name: "Travis CI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg",
      },
      {
        name: "Heroku",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142850980828946472/cm1hdA.png",
      },
      {
        name: "Vercel",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142851823057784933/vercel.png",
      },
    ],
  },
  {
    name: "Cloud",
    technologies: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "DigitalOcean",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
      },
      {
        name: "Linode",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142774912096931890/dmc.png",
      },
      {
        name: "Vultr",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142775028593737828/LmNvbS5wbmc.png",
      },
    ],
  },
  {
    name: "OSes",
    technologies: [
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Windows",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
    ],
  },
  {
    name: "Tools",
    technologies: [
      {
        name: "VSCode",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        name: "PyCharm",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
      },
      {
        name: "WebStorm",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg",
      },
      {
        name: "CLion",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142775235494559855/Zw.png",
      },
    ],
  },
  {
    name: "Other",
    technologies: [
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "REST",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142852665387253800/bmc.png",
      },
      {
        name: "Socket.IO",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      {
        name: "RabbitMQ",
        icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142852797390405750/b2dvLndpbmUuc3Zn.png",
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Apache",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      },
    ],
  },
];
