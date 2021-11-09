
const mainBody = {
  gradientColors: "#ff7f7f, #ff9696, #ce44ce, #1ad7c0, #9b59b6, #9b59b6, #ff7f7f",
  firstName: "Juan",
  middleName: "Ignacio",
  lastName: "Vergara",
  message: " Full Stack Web Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nchvrgr",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vjuanignacio/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCJEc7_MV17qQWBY0IM-QF4g/featured",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nchvrgr/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nacho.jpeg"),
  imageSize: 350,
  message:
    "My name is Juan, but everyone calls me Nacho, I'm 19 years old and I'm from Córdoba, Argentina. I love music, programming and my pets. I'm a junior web developer, I started to code in the highschool and I'm always learning new things, I like to design and create software projects. Currently I'm looking for opportunities in web development, here you have my resume with all my data if you're interested.",
  resume: "https://drive.google.com/file/d/1vWWpFH63JwD6ibjVPN6t97FSQ3my3yPG/view?usp=sharing",
  resumeSpanish: "https://drive.google.com/file/d/1340mMBtsR1uYodkOgCjW-wjyBni6WwnE/view?usp=sharing"
};


const repos = {
  show: true,
  heading: "Recent Projects",
  projects: [
    {
      name: "WeatherApp",
      description: "React app that searchs the weather of any city in the world",
      technologies: ["React", "HTML", "JavaScript", "Axios", "OpenWeatherMap API"],
      color: "rgba(245, 79, 245, 0.33)",
      url: "https://weather-app-pink-seven.vercel.app/",
      repo: "https://github.com/nchvrgr/weatherApp",
      video: "https://www.youtube.com/watch?v=QfT3XzXaM6s",
      image: require("../editable-stuff/projectScreenshots/weatherApp.png")
    },
    {
      name: "Weekly Expenses",
      description: "React app to manage weekly expenses with an established budget",
      technologies: ["React", "localStorage", "Styled components", "Skeleton"],
      url: "https://weekly-expenses-nchvrgr.vercel.app/",
      repo: "https://github.com/nchvrgr/weeklyExpenses",
      color: "rgba(2, 16, 112, 0.529)", 
      image: require("../editable-stuff/projectScreenshots/expenses.png")
    },
    {
      name: "NotiApp",
      description: "React App that shows the world's news and filters by category",
      technologies: ["React", "News API", "CSS", "JavaScript", "Styled components"],
      repo: "https://github.com/nchvrgr/notiApp",
      url: "https://noti-app-six.vercel.app/",
      color: "rgba(139, 27, 145, 0.583)", 
      image: require("../editable-stuff/projectScreenshots/notiapp.png")
    },
    {
      name: "Pet JS",
      description: "React app to manage patient shifts in a veterinary",
      technologies: ["React", "localStorage", "JavaScript", "CSS", "HTML", "Redux"],
      repo: "https://www.github.com/nchvrgr/pet-js",
      url: "https://petjs.vercel.app/",
      color: "rgba(191, 186, 50, 0.583)", 
      image: require("../editable-stuff/projectScreenshots/pet.png")
    },
    {
      name: "Healthier",
      description: "Full stack project. Ecommerce for healthy products shop",
      technologies: ["PostgreSQL", "Node", "Express", "React", "Redux", "Material-UI"],
      repo: "https://github.com/Healthier-Group/Healthier",
      video: "https://www.youtube.com/watch?v=21vTycn4p0A",
      color: "rgba(57, 170, 47, 0.419)", 
      image: require("../editable-stuff/projectScreenshots/healthier.png")
    },
    {
      name: "CountriesApp",
      description: "Full stack project. Displays and filters every country in the world",
      technologies: ["PostgreSQL", "Node", "Express", "React", "Redux", "Countries API"],
      repo: "https://github.com/nchvrgr/Countries-APP",
      color: "rgba(255, 0, 0, 0.576)", 
      image: require("../editable-stuff/projectScreenshots/countriesApp.png")
    },
  ]
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 75 },
    { name: "React", value: 85 },
    { name: "Redux", value: 73 },
    { name: "Node", value: 70 },
    { name: "Express", value: 80 },
    { name: "PostgreSQL", value: 60 },
    { name: "Sequelize", value: 65 },
    { name: "HTML", value: 70 },
    { name: "Sass", value: 75 },
    { name: "CSS", value: 75 },
  ],
  softSkills: [
    { name: "Creativity", value: 90 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Quick learning", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Teamwork", value: 85 },
    { name: "Organization", value: 70 },
    { name: "Agile mindset", value: 80 },
  ]
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Web Development opportunities! If you know of any positions available, or if you have any questions, please feel free to email me at",
  email: "vergarajuanignacio02@gmail.com",
};

export { mainBody, about, repos, skills, getInTouch };
