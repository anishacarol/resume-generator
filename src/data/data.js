import person from "../images/person.jpg";

export const data = {
  aboutMe: {
    name: "Anisha Carol Dennison",
    profileImgUrl: person,
    designation: "Frontend Developer",
    contactNo: "+49 179 4547636",
    location: "Berlin, Germany",
    email: "anishacarol@hotmail.com",
    // linkedIn: "anishajobe@linkedin.com",
    github: "github.com/anishacarol",
    summary: `Great development is all about the detail and communication of the developer. Designing and 
    developing is not only my career but also my passion. I have been in software development for about 4
    years and I have gained excellence in areas of Web Development.`
  },
  experiences: [
    {
      designation: "Frontend Developer",
      companyName: "Elsoft Solution",
      date: "11/2017 - present",
      // location: "Bangalore, India",
      roles: [
        "Collaborate with project managers, designers and web developers to improve the user experience.",
        "Create reusable react components and writing unit testing.",
        "Responsible for all stages of web app creations from initial design and architecture to development, deployment, and management of Web sites.",
        "Optimize application for maximum speed and scalability.",
        "Sharing knowledge among the team and doing code reviews."
      ]
    },

    {
      designation: "Web Developer",
      companyName: "Elsoft Solution",
      date: "06/2016 - 10/2017",
      // location: "Bangalore, India",
      roles: [
        "Design and development of responsive websites.",
        "Laying out the infrastructure and building core components.",
        "Working along with backend team to integrate restful APIs.",
        "Assure that all user input is validated before submitting to back-end.",
        "Collaborate with team, writing unit tests and doing code reviews."
      ]
    }
  ],
  educations: [
    {
      title: "Master of Computer Applications",
      instituteName: "Nesamony memorial christian college",
      accadamicYear: "2010 - 2013",
      location: "Marthandam, India"
    },
    {
      title: "Bachelor of Computer Science",
      instituteName: "Sathyabama University",
      accadamicYear: "2007 - 2010",
      location: "Chennai, India"
    }
  ],

  skills: [
    {
      title: "Frontend",
      skill: [
        "javascript",
        "Es6",
        "react JS",
        "redux",
        "Typescript",
        "HTML5",
        "CSS3",
        "sass",
        "Styled Components",
        "Jest",
        "React testing library",
        "Webpack",
        "cypress",
        "D3.js"
      ]
    },
    {
      title: "Project management",
      skill: ["JIRA", "Github", "Trello", "AWS"]
    },
    {
      title: "Backend",
      skill: ["node.js", "Firebase", "ASP.net "]
    }
  ],

  languages: [
    { language: "English", level: 5 },
    { language: "German", level: 1 }
  ],

  portfolio: [
    {
      projectTitle: "Playablo",
      projectInfo:
        "PlayAblo is a gamified learning and assessment platform for English Grammar, Communicative English and Mathematics. It completely aligns itself with School's lesson plans supporting most boards.",
      projectLink: "http://www.playablo.com"
    },
    {
      projectTitle: "Wootag",
      projectInfo:
        "Wootag is a revolutionary interactive video platform that lets your viewers engage with your brand and make purchases across multiple social media platforms.",
      projectLink: "http://www.wootag.com"
    },
    {
      projectTitle: "Classtrac",
      projectInfo:
        "ClassTrac is a cross-platform app on Android and Web that will help the teachers to assess the students on the basis of CBSE standard, this enterprise application let the teachers produce the CBSE report at theend and allow their students and parents to download from their account."
    },
    {
      projectTitle: "Motoguzzzi",
      projectInfo:
        "Motguzzi s a front-facing website for Moto Guzzi to showcase their garage.",
      projectLink: "http://www.motoguzzi.com/it_IT/"
    }
  ],

  hobbies: ["Sports", "Music", "Reading"]
};
