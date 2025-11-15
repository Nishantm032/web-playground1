"use strict";

// Profile Object

const profile = {
  name: "Nishant Mishra",
  role: "Full Stack Developer",
  location: "Bhilwara, Rajasthan",
  contact: {
    email: "mishranishant555@gmail.com",
    github: "Nishantm032",
    linkedin: "nishantmishra07777",
  },
};

console.log("This is the prfile name", profile.name);

// About Object
const about = {
  description:
    "Hi! I’m Nishant Mishra, a passionate Full-Stack Developer with a deep interest in building clean, efficient, and scalable web applications. I love the process of transforming ideas into real-world digital solutions that are both functional and visually appealing. I’m a strong believer in continuous learning and always strive to stay up-to-date with the latest technologies and development practices. Whether it’s building a personal project, collaborating with a team, or learning a new framework, I put my best effort into every task.",
};
// Function to log the about object
function logAbout() {
  console.log(about);
}

logAbout();

// Skills Array

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
];

// Subskills Array

const subSkills = [
  "Responsive Design",
  "Version Control (Git & GitHub)",
  "API Development",
  "UI/UX Basics",
  "Software development life cycle",
];

// 4. Projects Array

const projects = [
  {
    title: "Shopping Cart Website",
    description:
      "A React app that allows users to add, remove, and manage products using Context API.",
  },
  {
    title: "Prescripto Website",
    description:
      "A MERN stack application for booking appointments with authentication and CRUD operations.",
  },
  {
    title: "Hotel Booking Website",
    description: "REST API built with Express.js and MongoDB to manage users.",
  },
];

// 5. Travel Array
const travel = [
  "Trekking in the Himalayas",
  "Beach vacation in Goa",
  "Historical tour of Rajasthan",
];

// 6. Hobbies Array
const hobbies = ["Coding", "Reading Books", "Traveling", "Kabaddi"];

// --------------------------------------------Functions---------------------------------------

// Function to introduce profile
function introduce({ name, role, location }) {
  return `Hello! I'm ${name}, working as a ${role} in ${location}.`;
}

// Function to list skills as string
function getSkillList(skills) {
  return skills.join(", ");
}

// subskills
function getSubSkillList(subSkills) {
  return subSkills.join(", ");
}

// Function to list projects
function listProjects(projects) {
  return projects.map((p) => `${p.title} - ${p.description}`).join("\n");
}

// Function to list travel experiences
function listTravel(travel) {
  return travel.join(", ");
}

// Function to list hobbies
function listHobbies(hobbies) {
  return hobbies.join(", ");
}

// Function to get contact info
function getContactInfo(contact) {
  return `Email: ${contact.email}, GitHub: ${contact.github}, LinkedIn: ${contact.linkedin}`;
}

//   Example Calls
console.log(introduce(profile));
console.log("Skills:", getSkillList(skills));
console.log("Projects:\n", listProjects(projects));
console.log("Travel:", listTravel(travel));
console.log("Hobbies:", listHobbies(hobbies));
console.log("Contact Info:", getContactInfo(profile.contact));
