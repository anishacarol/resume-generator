import person from "../images/person.jpg";

export const data = {
  aboutMe: {
    name: "Anisha Carol Dennison",
    profileImgUrl: person,
    designation: "Frontend Developer",
    contactNo: "+455 457 34556",
    location: "Berlin, Germany",
    email: "anishajobe@gmail.com",
    linkedIn: "anishajcarol@linkedin.com",
    github: "anishajobe@github.com",
    summary: `Great development is all about the detail and communication of the developer. Designing and 
    developing is not only my career but also my passion. I have been in software development for about 4
    years and I have gained excellence in areas of Web Development.`
  },
  experiences: [
    {
      designation: "Frontend developer",
      companyName: "Elsoft Solution",
      date: "04/2007 - 05/2013",
      location: "Bangalore",
      roles: [
        "Collaborate with business managers, designers and web developers to improve the user experience.",
        "Responsible for all stages of web app creations from initial design and architecture to development, deployment, andmanagement of Web sites."
      ]
    },

    {
      designation: "Junior Frontend developer",
      companyName: "Elsoft Solution",
      date: "04/2007 - 05/2013",
      location: "Bangalore",
      roles: [
        "Design and development of a responsive websites.",
        "Laying out the infrastructure and building core components.",
        "Working along with backend team to integrate restful APIs.",
        "Writing unit test. Doing code reviews and daily guidance forthe co-workers"
      ]
    }
  ],
  educations: [
    {
      title: "Master of Computer Applications",
      instituteName: "Nesamony memorial christian college",
      accadamicYear: "2010 - 2013",
      location: "Bangalore"
    },
    {
      title: "Bachelor of Computer Science",
      instituteName: "Sathyabama University",
      accadamicYear: "2007 - 2010",
      location: "Bangalore"
    }
  ],

  skills: [
    {
      title: "Coding",
      skill: ["react", "es6", "sass", "hjkhklj", "sscdasc", "dcdacdc"]
    },
    {
      title: "Project management",
      skill: ["react", "es6", "sass", "nkmkmkm", "dcfdfv"]
    }
  ],

  languages: [
    { language: "English", level: 5 },
    { language: "German", level: 1 }
  ],

  portfolio: [
    {
      projectTitle: "Clastrac",
      projectInfo:
        "ClassTrac is a cross-platform app on Android and Web that will help theteachers to assess the students on the basis of CBSE standard, this enterprise application let the teachers produce the CBSE report at theend and allow their students and parents to download from their account."
    },
    {
      projectTitle: "Elsoftsolution",
      projectInfo:
        "Elsoft solution is a business website build in react. URL: https://elsoftsolution.com/"
    },
    {
      projectTitle: "Emids webportal",
      projectInfo:
        "emids Quiz & Presentiona App is an enterprise iOS app that allows aconnected , real time gaming experience for conducting a quiz and topresent the real time presentation online. This can be used duringpresentations or at the end to keep participants focussed and interested. Obviously, the possibilities are endless, we can get creative abouthow/when to use this. The webportal on this app is to setup the quiz andpresentation that will be used in the mobile app."
    },
    {
      projectTitle: "Motoguzzzi",
      projectInfo:
        "Motguzzi s a front-facing website for Moto Guzzi to showcase their garage. URL: http://www.motoguzzi.com/it_IT/"
    }
  ],

  hobbies: ["dance", "songs"]
};
