import bugOnWireImage from "../../assets/bugonwire.jpg";
import bikeRentalImage from "../../assets/bikerental.jpg";
import adminDashboardImage from "../../assets/admindashboard.png";
import fitnessAppImage from "../../assets/fitnessapp.jpg";

export const project = [
  {
    title: "Bug on Wire",
    description: "A toned down version of classic bug on wire game",
    imageUrl: bugOnWireImage,
    techStack: ["Html", "CSS", "JavaScript"],
    demoLink: "https://sakin333.github.io/BugOnAWire/",
    codeLink: "https://github.com/sakin333/BugOnAWire",
  },
  {
    title: "Bike Rental Site",
    description:
      "A website allowing users to book bikes, view booking history also with admin and customer roles",
    imageUrl: bikeRentalImage,
    techStack: ["Angular", "CSS", "NodeJS", "MongoDB", "Angular Material"],
    codeLink: "https://github.com/sakin333/Bike-rental-website",
  },
  {
    title: "Admin Dashboard",
    description:
      "An admin dashboard with charts, kanban board and crud opration",
    imageUrl: adminDashboardImage,
    techStack: ["React", "NodeJS", "MongoDB", "Ant Design", "CSS"],
    codeLink: "https://github.com/sakin333/admin-dashboard",
  },
  {
    title: "Home workout and diet generator app",
    description:
      "This app uses machine learnig to predict the intensity of workout, generate daily diet plans and track progress",
    imageUrl: fitnessAppImage,
    techStack: ["React Native", "NodeJS", "MongoDB", "CSS", "Python"],
    codeLink: "https://github.com/sakin333/FitnessAppWithML",
  },
];
