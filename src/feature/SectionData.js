import { Building, Calendar, User } from "lucide-react";




const sections=[
  {
      title:"Our Services",
      description:"Comprehensive healthcare staffing solutions designed to meet the needs of both healthcare professionals and facilities"

  },
  {
      title:"How It Works",
      description:"Our streamlined process makes it easy to find the perfect healthcare opportunities."
  },
  {
      title:"What Our Users Say",
      description:"Hear from healthcare professionals and facilities who have benefited from our platform."
  }
]

const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Medical Doctor",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "Health Staff Manager revolutionized our staffing process. We can now quickly find qualified healthcare professionals who match our requirements.",
    },
    {
      id: 2,
      name: "Mark Wilson",
      role: "Registered Nurse",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      quote: "As a traveling nurse, this platform has given me the flexibility to choose assignments that fit my schedule and professional goals.",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Hospital Administrator",
      image: "https://randomuser.me/api/portraits/women/58.jpg",
      quote: "The analytics dashboard provides valuable insights that help us make data-driven decisions for our healthcare staffing needs.",
    },
  ];

  const services=[

    {
      Icon:User,
      title:"Healthcare Staffing",
      description:"Connect with top healthcare facilities seeking professionals with your qualifications and experience."
    },
    {
      Icon:Building,
      title:"Credential Verification",
      description:" Streamlined credential verification process ensuring compliance with healthcare regulations."

    },
    {
      Icon:Calendar,
      title:"Scheduling Solutions",
      description:"Flexible scheduling options to accommodate the dynamic needs of healthcare professionals."
    }
  ]

  const workData=[
    {
      title:"Create an Account",
      description:"Register as a healthcare professional and complete your profile with your qualifications and preferences."
  
    },
    {
      title:"Verification Process",
      description:"Upload your credentials and complete the verification process to become eligible for placement."
    },
    {
      title:"Get Matched",
      description:"Get matched with healthcare facilities based on your skills, preferences, and availability."

    }
  ]
export  {sections, testimonials,services,workData}