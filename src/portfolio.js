/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vibha badhe Portfolio",
  description:
    "Full Stack Developer with 4 years of experience.",
  og: {
    title: "Vibha Badhe Portfolio",
    type: "website",
    url: "http://vbadhe.com/",
  },
};

//Home Page
const greeting = {
  title: "Vibha badhe",
  //logo_name: "Vibha Badhe 1",
  nickname: "Work @BakerHughes|Ex-Walmart|Ex-Oracle",
  subTitle:
  "Software Developer with 5+ yrs of experience, currently working as team lead with experience in application development, microservices, Rest API, Big data projects and Data Analysis.",
  resumeLink:
    "https://drive.google.com/file/d/1aHCO-QBK7g1ic4KG0bUw3W9OR3iheMcZ/view?usp=sharing",
  portfolio_repository: "https://github.com/zukerrrr/vibhabadhe",
  githubProfile: "https://github.com/zukerrrr",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/zukerrrr",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vibha-badhe-5000129b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vibhabadhe123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vibha_badhe",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vib12345",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vb8926",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building website front end using HTML, CSS, bootstrap",
        "⚡ Creating application backend in Node, Java & Flask",
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
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
        }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "simple-icons:java",
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
        "⚡ Deploying microservies on cloud"
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        }, {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Data Analysis, Data cleaning and Data transformations on big data projects",
        "⚡ Experience of working with data pipelines NIFI and orechestrator like airflow"
      ],
      softwareSkills: [
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "#1488C6",
          },
        },
        {
          skillName: "NIFI",
          fontAwesomeClassname: "simple-icons:nifi",
          style: {
            backgroundColor: "#1488C6",
          },
        }],
      }
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
      profileLink: "https://www.hackerrank.com/badhe_vibha9767",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/badhe_vibha976",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Veermata Jijabai Technological Institute",
      subtitle: "M.Tech. Computer Science",
      logo_path: "vjtilogo.png",
      alt_name: "VJTI Mumbai",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have done M. Tech in computer science with subjects like DS, Algorithms, DBMS, OS, CA  etc.",
        "⚡ Apart from this, I have also knowledge on Web services, Core Java, python and Full Stack Development.",
      ],
      website_link: "https://vjti.ac.in/",
    },{
      title: "Government College of Engineering, Jalgaon",
      subtitle: "B.Tech. Computer Engineering",
      logo_path: "gcoej_logo.png",
      alt_name: "GCOEJ",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ I have done B. Tech in computer science with subjects like DS, Algorithms, DBMS, OS, TOC, AI  etc.",
        "⚡ Apart from this, I have participated in dance compititions and volleyball. I also hosted events in tech fest.",
        "⚡ I was class representative in all yrs and also Vice president of Departmental Club."
      ],
      website_link: "https://www.gcoej.ac.in/site/",
    }
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
      subtitle: "Oracle Training",
      logo_path: "core_java.png",
      certificate_link: "",
      alt_name: "",
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
          title: "Software Developer [Team Lead]",
          company: "Baker Hughes",
          company_url: "https://www.bakerhughes.com/",
          logo_path: "baker_logo.png",
          duration: "Oct 2021 - Present",
          location: "Pune",
          description:
            "I worked in oil and gas domain build customer-centric digital solutions for developing big data project . I have been working on Aws s3, Rest API, microservices, Python, flask , Airflow, Tamr and NIF. I have also been leading team of 8 people.",
          color: "#0879bf",
        },
        {
          title: "Software Developer SDE II",
          company: "Walmart Labs",
          company_url: "https://www.linkedin.com/company/walmartglobaltech/?originalSubdomain=in",
          logo_path: "walmart_logo.png",
          duration: "July 2020 - Oct 2021",
          location: "Chennai",
          description:
            "I worked in Retail domain build application for SAMS club. I have majorly worked on Java, spring boot, azure, Api development and JIRA fixes from customers. I have been trained on basic computer technology also in OOPs concepts, Oracle, Spring boot, Rest API, SOAP, Java as Major Programming Language. ",
          color: "#0879bf",
        },
        {
          title: "Application Developer",
          company: "Oracle",
          company_url: "https://www.oracle.com/in/industries/financial-services/",
          logo_path: "oracle_logo.png",
          duration: "Aug 2018 - July 2020",
          location: "Pune",
          description:
            "I worked in financial domain build customer-centric digital solutions, and achieve success through collaboration in an increasingly complex financial ecosystem. I have been trained on basic computer technology also in OOPs concepts, Oracle, Spring boot, Rest API, SOAP, Java as Major Programming Language. I have also worked on web Technologies such as HTML,CSS,Bootstrap, Oracle ADF and OJET.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "GE Oil and Gas",
          company_url: "https://www.ge.com/digital/industry/oil-gas",
          logo_path: "gelogo.png",
          duration: "May 2017 - June 2018",
          location: "Mumbai",
          description:
            "In my internship, I have mainly worked on project of IntelliStream Multi-Well Optimization Using predictive capabilities to increase optimization workflow and efficiency by 100xa. is an end to end enterprise suite for the oil and gas industry, converting data bits into insights to reduce operational complexity, and increase production efficiency. There were two other projects as well: (1) develop real time application for cab booking for employees. (2) develop chatbot using ML and Neural network for customer care queries. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 and PostgreSQL.",
          color: "#ee3c26",
        },
      ],
    }  ,
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects And Publications",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",

  sections: [
    {
      title: "Project: MTC Cab Booking System",
      experiences: [
        {
          title: "Cab Booking",
          company: "GE",
          company_url: "",
          logo_path: "gelogo.png",
          duration: "May 2017 - Dec 2017",
          location: "Mumbai",
          description:
            "It is a website designed for two types of users one can publish his/her car on our website and other user who can book car for perticular mentioned time at morning and evening for office from the website.",
          color: "#0879bf",
        },
      ],
    },{
      title: "Project: Neural Chatbot",
      experiences: [
        {
          title: "AIBot",
          company: "VJTI",
          company_url: "",
          logo_path: "vjtilogo.png",
          duration: "Jan 2018 - May 2018 ",
          location: "Mumbai",
          description:
            "A chatbot for simple conversation in English language developed using machine learning libraries, python and tensarflow. ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Publication: A Neural Conversational Model ",
      experiences: [
        {
          title: "A Neural Conversational Model for Automatic Generation of Conversations",
          company: "IRJET",
          company_url: "https://www.irjet.net/archives/V5/i6/IRJET-V5I6602.pdf",
          logo_path: "vjtilogo.png",
          duration: "Sept 2017- May 2018 ",
          location: "Mumbai",
          description:
            "- The conversations between humans and machines is regarded as one of the most hardcore problems in computer technology, which involves interdisciplinary techniques in information retrieval, ML, natural language Understanding and artificial intelligence.  ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Publication: Two Round Searchable Encrypted Data",
      experiences: [
        {
          title: "Two Round Searchable Encrypted Data using Multi-Keywords for Cloud Computing",
          company: "Gcoej",
          company_url: "https://www.researchgate.net/publication/277646944_Two_Round_Searchable_Encrypted_Data_using_Multi-Keywords_for_Cloud_Computing",
          logo_path: "gcoej_logo.png",
          duration: "oct 2014 - April 2015 ",
          location: "Jalgaon",
          description:
            "Cloud Computing represents vital role in Information Technology. Cloud Computing provides high security for managing & storing large scale data in internet-based Infrastructure. Cloud provides large storage space & make user friendly for fast accessing data. Searchable Symmetric Encryption (SSE) use to secure and retrieve data from the cloud and it also focus on addressing data privacy issues. We observe that server side ranking based on Order Preserving Encryption (OPE) certainly leaks data privacy. ",
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
    profile_image_path: "vibha.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java, Python, Web Services, Rest API and databases.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I am not fond of writing but tried to write blogs",
    link: "https://vibhabadhe.tk",
    avatar_image_path: "blogs_image.svg",
  }
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
