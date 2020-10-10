
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Arsslensoft",
  title: "Hi all, I'm Arsslen",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building Web and Desktop applications with .NET / Reactjs / Neo4j / SQL and some other cool libraries, tools and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1Yg0ctZu058_KLY3t2XAUaBvwqE4s9du-/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/arsslensoft",
  linkedin: "https://www.linkedin.com/in/arsslen-idadi/",
  gmail: "arsslen.idadi@gmail.com",
  gitlab: "https://gitlab.com/arsslensoft",
  facebook: "https://www.facebook.com/arsslensoft",
  medium: "https://medium.com/@arsslenidadi",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO LOVES PRODUCT BUILDING",
  skills: [
    emoji("⚡ Develop enterprise grade applications and design a robust architecture/infrastructure to support it."),
    emoji("⚡ A T-shaped professional specialised in .NET."),
    emoji("⚡ A joker card team-player, productive in any position at SDLC.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Neo4j",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "National Institute of Applied Sciences and Technology",
      logo: require("./assets/images/insatLogo.png"),
      subHeader: "Bachelor of Engineer in Software Engineering (BAC+5)",
      duration: "September 2014 - June 2019",
      desc: "Graduated with excellent merit.",
      descBullets: [
        "Financial Trading & Banking optional subjects.",
      ]
    },
    {
      schoolName: "Ali Douagi High School",
      logo: require("./assets/images/medu.jpg"),
      subHeader: "Computer Science",
      duration: "September 2010 - June 2014",
      desc: "Occupied third place in the country.",
      descBullets: [
        "1st in the Tunis region under the Computer Science major national exam (BAC)",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Desktop applications",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development", 
      progressPercentage: "85%" 
    },
    {
      Stack: "Leadership & Engineering Management",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & System Administration",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "55%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Chief Technology Officer",
      company: "GO MY CODE",
      companylogo: require("./assets/images/gomycode.jpg"),
      date: "February 2019 – Present",
      desc: "During my mission, our contributions enabled the company to raise 850K USD (Anava Seed Funds), to develop and expand its operations. The company platforms enabled the business to scale in multiple locations providing multiple educational products to B2B/B2C market.",
    },
    {
      role: ".NET Developer",
      company: "GO MY CODE",
      companylogo: require("./assets/images/gomycode.jpg"),
      date: "Oct 2017 – Feb 2019",
      desc: "During my mission, I participated in the development of the company engineering department by handling the DevOps and by contributing extensively the main products in terms of R&D."
    },
    {
      role: "Freelancer & Co-Founder",
      company: "PHEXONITE",
      companylogo: require("./assets/images/phexonite.png"),
      date: "Aug 2016 – Oct 2017",
      desc: "I worked in freelance with a team of 5 collaborators on different web and desktop applications using PHP and C# .NET for the account of clients (Hexagone mobile France, Cyntillion Solutions, La Planète des fournitures, Robograf/Placeholders...)."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "arsslensoft", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME X STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gomycode.svg"),
      link: "https://gomycode.co/"
    },
    {
      image: require("./assets/images/robograf.png"),
      link: "http://robograf.me"
    }
    ,
    {
      image: require("./assets/images/hexagone.jpg"),
      link: "https://hexagonemobile.fr"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@arsslensoft/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/arsslensoft-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 53 299 093",
  email_address: "arsslen.idadi@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "arsslen_idadi"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
