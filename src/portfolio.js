/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepak's Portfolio",
  description:
    "Full Stack Developer and expertise in java technologies, front end JavaScript frameworks and backend web services. A quick learner who can adapt to new technologies and implement them seamlessly for enterprise level product development.",
  og: {
    title: "Deepak badhe Portfolio",
    type: "website",
    url: "http://dbadhe.com/",
  },
};

//Home Page
const greeting = {
  title: "Deepak badhe",
  logo_name: "Deepak Badhe",
  nickname: "deepak",
  subTitle:
    "Full Stack Developer and expertise in java technologies, front end JavaScript frameworks and backend web services. A quick learner who can adapt to new technologies and implement them seamlessly for enterprise level product development.",
  resumeLink:
    "https://drive.google.com/file/d/117GBHD1mgTQ8wfUQ9oI1FhKZNYHzf4-O/view?usp=drivesdk",
  portfolio_repository: "https://github.com/deepakbadhe/myPortfolio",
  githubProfile: "https://github.com/deepakbadhe5",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/deepakbadhe5",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepak-badhe-aaa9ab156/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:deepakbadhe5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/deepakbadhe5",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/deepak.badhe.545/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/deepakbadhe5/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Structure and Algorithms",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML, CSS, bootstrap",
        "⚡ Creating application backend in Node, Express & EJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:PostgreSQL",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/deepakbadhe",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/deepakbadhe",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indira Gandhi Engineering College",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IGEC Sagar",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA  etc.",
        "⚡ Apart from this, I have done courses on Web services, Core Java and Full Stack Development.",
      ],
      website_link: "http://igecsagar.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Structure",
      subtitle: "- Abdul Bari",
      logo_path: "stanford_logon.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Core Java",
      subtitle: "- Hari Krishna",
      logo_path: "core_java.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "System Engineer",
          company: "Infosys",
          company_url: "https://infosys.com/",
          logo_path: "Infosys_logo.png",
          duration: "Sept 2021 - PRESENT",
          location: "Mysore, Karnataka",
          description:
            "I am working with AGCO domain. I have been trained on basic computer technology also in OOPs concept, MySQL, C# as Major Programming Language. I have also worked on web Technologies such as HTML,CSS,Bootstrap and EF Core,Angular Framework, Rest APIs",
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",

  sections: [
    {
      title: "Drive Your Car",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "ccar.png",
          duration: "Jan 2020 - July 2020 ",
          location: "Sagar, M.P.",
          description:
            "It is a web app designed for two types of users one can publish his/her car on our website and earn some money by doing so, while other user can hire a car on rent basis based on their desired brand at any place from the website.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Project Idea",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "idea.png",
          duration: "Dec 2020 - Mar 2021 ",
          location: "Sagar, M.P.",
          description:
            "A web app designed for educational purpose where when can share their project for others to get benefited out of it. It uses the OAuth of Google and Facebook for the authentication purpose and remaining all are technologies used for website management.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "deepak5.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Front end, React, Beckend and databases.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://deepakbadhe.tk",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "S/O Ganesh Badhe H. No. 129, Ward no 12, Gate no 7,Nepanagar, Dist.-Burhanpur, Madhya Pradesh - 450221",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/r8Nx3SLu9wSQ2rPt6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9399210581",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
