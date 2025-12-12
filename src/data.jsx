import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,building_11,building_12,building_13,building_14,
        blog_1,blog_2,blog_3} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About",id:'about'},
    {name:"Services",id:'services'},
    // {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Site Preparation",
    icon:<AiOutlineFileProtect/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  // {
  //   name:"Lawrence Onu",
  //   title:"Technician",
  //   profile:member3,
  //   social:[
  //     {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
  //     {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
  //     {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
  //     {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
  //   ]
  // },
  // {
  //   name:"Joy Eze",
  //   title:"Technician",
  //   profile:member4,
  //   social:[
  //     {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
  //     {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
  //     {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
  //     {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
  //   ]
  // },
]

export const projects = [
  {
    title:"Industrial Electric",
    image:building_5,
    description:`Newly installed commercial rooftop HVAC unit mounted on a reinforced curb, providing efficient climate control and improved airflow for the building. Designed for durability and optimal performance in demanding environments`,
  },
    {
    title:"Industrial Electric",
    image:building_8,
    description:`Industrial electrical and mechanical setup featuring control panels, safety disconnects, conduit routing, and a vertical fire-suppression riser. Designed for reliable operation and safety compliance in a manufacturing environment.`,
  },
  {
    title:"Residential Electric",
    image:building_9,
    description:`Industrial electrical panel installation with conduit routing, control boxes, and equipment wiring. This setup supports safe power distribution and operational reliability within a manufacturing environment.`,
  },
  
  {
    title:"Residential Electric",
    image:building_6,
    description:`Precision HVAC diagnostics performed with advanced digital tools to ensure accurate system performance and reliable comfort`,
  },
  {
    title:"Residential HVAC",
    image:building_13,
    description:`Precision HVAC diagnostics performed with advanced digital tools to ensure accurate system performance and reliable comfort`,
  },
  {
    title:"Residential HVAC",
    image:building_14,
    description:`Precision HVAC diagnostics performed with advanced digital tools to ensure accurate system performance and reliable comfort`,
  },
  
  {
    title:"Commercial Electric",
    image:building_7,
    description:`Heavy-duty crane lift of a commercial HVAC unit during a scheduled replacement project. The old unit is safely removed to make way for an upgraded, energy-efficient system.`,
  },

  {
    title:"Commercial Electric",
    image:building_10,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },


  {
    title:"Commercial HVAC",
    image:building_11,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },

   {
    title:"Commercial HVAC",
    image:building_12,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];


export const testimonial = [
  {
    image: profile2,
    name: 'Samuel Eze',
    review: `Excellent service from start to finish. The team was professional, timely,
             and delivered exactly what we needed. I highly recommend them for any
             HVAC or electrical project.`
  },
  {
    image: profile3,
    name: 'Emmanuel Joseph',
    review: `Great experience overall. They explained everything clearly and made sure
             the job was done right. Quality work and very dependable service.`
  },
  {
    image: profile4,
    name: 'Gloria Chiwendu',
    review: `Their attention to detail is impressive. From inspection to installation,
             everything was handled with care. Outstanding customer service and
             excellent workmanship.`
  },
  {
    image: profile5,
    name: 'Precious Stone',
    review: `Reliable, efficient, and highly skilled. The team completed the project
             on time and exceeded expectations. I’m very satisfied with the results.`
  }
];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:blog_1,
      category:"Building",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Quality Craftsmanship in Construction",
      image:blog_2,
      category:"Construction",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Innovative Technologies Transforming the Construction Industry",
      image:blog_3,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const contacts = [
  {
    name: "Email",
    value: "info@AlrvoltPro.com",
    icon: <FaEnvelope />,
    link: "mailto:info@alrvoltpro.com",
    button: "Send Email"
  },
  {
    name: "Phone",
    value: "(847)-800-3443",
    icon: <FaPhone />,
    link: "tel:8478003443",
    button: "Call Now"
  },
  {
    name: "WhatsApp",
    value: "+1 847-800-3443",
    icon: <FaWhatsapp />,
    link: "https://wa.me/8478003443",
    button: "Chat on WhatsApp"
  },
  // {
  //   name: "Address",
  //   value: "111 Westover Ln, Schaumburg IL",
  //   icon: <FaMapMarkerAlt />,
  //   link: "https://www.google.com/maps?q=111+Westover+Ln,+Schaumburg,+IL",
  //   button: "Find Us"
  // },
  
];




export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          // {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


