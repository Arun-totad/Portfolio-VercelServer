// timelineData.ts

export type TabKey = "Education" | "Experience" | "Awards";

export interface TimelineItem {
  date: string;
  title: string;
  details: string;
  achievements?: string[];
  additionalDetails?: string;  // New field for additional details like who awarded
  additionalImage?: string;
  gpa?: number;
  maxGpa?: number;
  logo?:string;
  workType?: string;
  startDate?:string;
  endDate?:string;
  // yearsOfExperience?:number;
  internshipYears?:number;
  fullTimeYears?:number;
  partTimeYears?:number;
}

export const timelineData: Record<TabKey, TimelineItem[]> = {
  Education: [
    {
      date: "Jan 2024 – Dec 2025",
      title: "Masters in Computer Science",
      details: "Western Michigan University, USA",
      gpa: 3.8,
      maxGpa: 4,
      logo:"/wmu.png",
    },
    {
      date: "Aug 2016 – Jul 2020",
      title: "Bachelor of Engineering in Computer Science & Engineering",
      details: "Visvesvaraya Technological University, India",
      gpa: 3.3,
      maxGpa: 4,
      logo:"/vtu.png",
    },
  ],
"Experience": [
  {
    "date": "Jan 2024 – Dec 2025",
    "title": "Student Manager (Part-time On-Campus)",
    "details": "Western Michigan University, Kalamazoo, Michigan, United States",
    "achievements": [
      "Demonstrated strong team leadership and management skills by supervising daily operations and coordinating tasks effectively.",
      "Enhanced interpersonal communication and critical thinking abilities by resolving student concerns and ensuring a smooth workflow.",
      "Successfully managed time-sensitive projects, balancing academic responsibilities with part-time work."
    ],
    "workType": "Part-time",
    "startDate": "Jan 2024",
    "partTimeYears": 1.5,
    "internshipYears":0,
    "fullTimeYears":0,

  },
  {
    "date": "Mar 2022 – Nov 2023",
    "title": "Senior Systems Engineer (Full-time)",
    "details": "Infosys Limited, India",
    "achievements": [
  "Engaged as an Associate Software Developer at National Broadband Network (NBN), an Australian data network company, developed and optimized JavaScript and Java components for an enterprise-level web application with agile practices.",
  "Involved in the design and development of code functionalities for autonomous monitoring of the application, and autonomous incident-handling feature for troubleshooting by end users.",
  "Engaged in improvement of the graphical user interface dashboard for standalone operators.",
  "Professionally maintained source code in GitHub with structured commits, branching, and merge strategies."
],
    "workType": "Full-time",
    "startDate": "Mar 2022",
    "partTimeYears": 0,
    "internshipYears":0,
    "fullTimeYears":1.8,
  },
  {
    "date": "Sept 2021 – Feb 2022",
    "title": "Systems Engineer (Full-time)",
    "details": "Infosys Limited, India",
    "achievements": [
      "Served as an Operational Support Engineer at NBN, with DevOps practices to maintained health of the application using AWS services.",
      "Worked on production incidents resolving cross-application issues by analyzing logs in Splunk within required deadlines.",
      "Implemented Cron job batch scheduling for functionalities requiring daily execution.",
      "Performed production (Blue/Green) deployments for major releases occurring periodically using the Jenkins platform.",
    ],
    "workType": "Full-time",
    "startDate": "Sept 2021",
    "partTimeYears": 0,
    "internshipYears":0,
    "fullTimeYears":0.6,
  },
  {
    "date": "Mar 2021 – Aug 2021",
    "title": "Systems Engineer Trainee (Internship)",
    "details": "Infosys Limited, India",
    "achievements": [
      "Gained experience building an enterprise-level capstone e-commerce project with a team of four, upskilling in Java, JavaScript, MySQL, HTML5, CSS3, and REST API calls.",
      "Project was implemented using Angular framework for the front-end and Spring Boot for the backend."
    ],
    "workType": "Internship",
    "startDate": "Mar 2021",
    "partTimeYears": 0,
    "internshipYears":0.6,
    "fullTimeYears":0,
  }
],
  "Awards": [
    {
      date: "Apr 2023",
      title: "Special Contribution Award",
      additionalDetails:
        "Awarded for optimizing code and reducing costs.",
      details:
        "Awarded by NBN and Infosys",
      additionalImage: "/awards/Infosys-Special_Contribution_Award.jpg"
    },
    {
      date: "Mar 2022",
      title: "Rise Gory Award",
      details: "Issued by Infosys Limited",
      additionalImage: "/awards/Infosys-Glory_Award.jpg",
      additionalDetails: "Awarded with promotion to Associate Developer from Operational Support Engineer for exceptional incident resolution'",
    },    
  ],
};
