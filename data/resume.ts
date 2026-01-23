import { Icons } from "@/components/icons";

export const DATA = {
  name: "Nguyen Thanh Thuan",
  initials: "TT",
  url: "https://nguyenthanhthuan.com",
  location: "Tan Binh, Ho Chi Minh City, Vietnam",
  title: "Frontend Developer | React Next.js NodeJs",
  description:
    "Frontend Developer who loves building clean, modern, and scalable web interfaces.",

  summary: `
    I began my journey in frontend development through self-learning and personal projects. Over time, I gained experience working at two companies as a Frontend Developer, building real-world web applications.
    In the past year, I have been very focused on learning front-end web programming. Now I am very confident that my abilities can meet your requirements.
    `,

  avatarUrl: "/me.png",

  skills: [
    { name: "React", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextJs },
    { name: "TypeScript", icon: Icons.typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "Tailwind CSS", icon: Icons.tailwind },
    { name: "SCSS", icon: Icons.scss },
    { name: "Framer", icon: Icons.framer },
    { name: "Redux Toolkit", icon: Icons.redux },
    { name: "Node.js", icon: Icons.node },
    { name: "Express", icon: Icons.express },
    { name: "MongoDB", icon: Icons.mongodb },
    { name: "Git", icon: Icons.git },
    { name: "Docker", icon: Icons.docker },
    { name: "Postman", icon: Icons.postman },
  ],

  contact: {
    email: "nguyenthanhthuan.info@gmail.com",
    tel: "0345 098 435",
    social: {
      github: {
        name: "GitHub",
        url: "https://github.com/thuannguyen2kx",
        icon: "github",
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nguyenthanhthuan",
        icon: "linkedin",
      },
      email: {
        name: "Email",
        url: "mailto:nguyenthanhthuan.info@gmail.com",
        icon: "mail",
      },
    },
  },

  work: [
    {
      company: "MST Entertainment",
      href: "https://mst.com",
      title: "Frontend Developer",
      logoUrl: "/mst.png",
      start: "May 2024",
      end: "Present",
      description: `
        Developed scalable frontend features using React and Next.js. Worked closely with designers and backend teams to deliver responsive, user-friendly interfaces. Improved UI consistency and performance across the platform.
        Proposed and standardized ESLint, Prettier, and EditorConfig across the team, significantly improving code quality and speeding up code reviews.
        `,
      achievements: [
        "Built reusable component library",
        "Improved page load performance by ~25%",
        "Implemented responsive layouts for all devices",
        "Team-wide code standards",
      ],
    },
    {
      company: "NCC Plus",
      href: "https://ncc.asia",
      title: "Frontend Intern",
      logoUrl: "/ncc.png",
      start: "Jun 2023",
      end: "Sep 2023",
      description:
        "Learned core frontend concepts and worked on internal projects using React. Integrated REST APIs and practiced clean code and Git workflow.",
      achievements: [
        "Converted UI designs into React components",
        "Worked with REST APIs",
        "Participated in code reviews",
      ],
    },
  ],

  education: [
    {
      school: "Hanoi University of Industry (HaUI)",
      href: "https://haui.edu.vn",
      degree: "Bachelor of Computer Science",
      logoUrl: "/haui.png",
      start: "2020",
      end: "2024",
      description:
        "Studied software engineering fundamentals, data structures, algorithms, and web development.",
    },
  ],

  projects: [
    {
      title: "Lite Shop",
      slug: "lite-shop",
      tagline: "Modern E-commerce Platform",
      duration: "1 Months",
      dates: "Nov 2025 - Dec 2025",
      description:
        "A lightweight e-commerce platform with product listing, cart, and responsive UI.",
      longDescription:
        "Lite Shop represents a new approach to e-commerce, focusing on simplicity and performance without sacrificing functionality. The platform leverages modern React patterns, implements efficient state management, and provides a seamless shopping experience across desktop and mobile devices.",
      role: "Frontend Developer",
      status: "Personal Project (Learning & Practice)",
      features: [
        {
          title: "Dynamic Catalog",
          description:
            "Advanced filtering, sorting, and search with real-time updates",
          stats: "500+",
          label: "Products",
        },
        {
          title: "Smart Cart",
          description: "Persistent cart with intelligent price calculations",
          stats: "100%",
          label: "Reliable",
        },
        {
          title: "Responsive",
          description:
            "Seamless experience across all devices and screen sizes",
          stats: "Mobile",
          label: "First",
        },
        {
          title: "Optimized",
          description: "Lazy loading, code splitting, and image optimization",
          stats: "95+",
          label: "Score",
        },
      ],
      technologies: [
        { name: "Vite", icon: Icons.vite },
        { name: "React 19", icon: Icons.react },
        { name: "React Query", icon: Icons.reactquery },
        { name: "TypeScript", icon: Icons.typescript },
        { name: "Tailwind", icon: Icons.tailwind },
        { name: "Zod", icon: Icons.zod },
        { name: "React Hook Form", icon: Icons.reactHookForm },
        { name: "Storybook", icon: Icons.storybook },
      ],
      links: {
        demo: "/projects/lite-shop",
        live: "https://liteshop-demo.com",
        github: "https://github.com/thuannguyen2kx/lite-shop",
      },
      thumbnail:
        "https://i.pinimg.com/736x/69/35/2e/69352e36b46fcffe5a033b0881460872.jpg",
      images: [
        "/projects/lite-shop/lite_shop_1.png",
        "/projects/lite-shop/lite_shop_2.png",
        "/projects/lite-shop/lite_shop_3.png",
        "/projects/lite-shop/lite_shop_4.png",
        "/projects/lite-shop/lite_shop_5.png",
        "/projects/lite-shop/lite_shop_6.png",
        "/projects/lite-shop/lite_shop_7.png",
        "/projects/lite-shop/lite_shop_8.png",
        "/projects/lite-shop/lite_shop_9.png",
        "/projects/lite-shop/lite_shop_10.png",
      ],
      technicalHighlights: [
        "JWT authentication with automatic refresh token handling",
        "Form validation using React Hook Form & Zod",
        "URL-synced pagination, filters, and search for shareable results",
        "Asynchronous state management with React Query",
        "Code splitting for optimized bundle loading",
        "Build size analysis and performance optimization",
        "SEO optimization using React Helmet",
        "Public & private route separation",
        "Unit testing",
        "Component-driven development with Storybook",
      ],

      author: {
        name: "Nguyen Thanh Thuan",
        role: "Frontend Developer",
        email: "nguyenthanhthuan.info@gmail.com",
        phone: "0345 098 435",
        location: "HCMC, Vietnam",
        github: "https://github.com/thuannguyen2kx",
        linkedin: "https://linkedin.com/in/nguyenthanhthuan",
        avatar: "/me.png",
      },
    },
    {
      title: "Panda NFT",
      slug: "panda-nft",
      tagline: "Modern NFT Marketplace Template",
      duration: "1 Months",
      dates: "Dec 2025",
      description:
        "A modern NFT marketplace UI template featuring collection browsing, asset detail pages, and responsive layouts.",
      longDescription:
        "Panda NFT is a frontend-focused template designed to showcase a clean, modern NFT marketplace experience. The project emphasizes design-to-code implementation, component-driven development, and performance-conscious UI architecture. It demonstrates how complex layouts and interactions from Figma designs can be translated into scalable, reusable React components.",
      role: "Frontend Developer",
      status: "Personal Project (UI Template & Learning)",

      features: [
        {
          title: "NFT Collections",
          description:
            "Collection listing with grid layouts and visual hierarchy",
          stats: "Multi",
          label: "Layouts",
        },
        {
          title: "Asset Details",
          description:
            "Detailed NFT pages with preview, metadata, and owner info",
          stats: "Rich",
          label: "Content",
        },
        {
          title: "Responsive UI",
          description:
            "Pixel-perfect responsive design across desktop, tablet, and mobile",
          stats: "Mobile",
          label: "First",
        },
        {
          title: "Modern UI",
          description:
            "Clean visuals, smooth hover states, and interactive components",
          stats: "Design",
          label: "Focused",
        },
      ],

      technologies: [
        { name: "Vite", icon: Icons.vite },
        { name: "React 19", icon: Icons.react },
        { name: "TypeScript", icon: Icons.typescript },
        { name: "Tailwind CSS", icon: Icons.tailwind },
      ],

      links: {
        demo: "/projects/panda-nft",
        live: "https://panda-nft-demo.com",
        github: "https://github.com/thuannguyen2kx/panda-nft",
      },

      thumbnail: "/projects/panda-nft/panda_nft_thumbnail.png",

      images: [
        "/projects/panda-nft/panda_nft_1.png",
        "/projects/panda-nft/panda_nft_2.png",
        "/projects/panda-nft/panda_nft_3.png",
        "/projects/panda-nft/panda_nft_4.png",
        "/projects/panda-nft/panda_nft_5.png",
        "/projects/panda-nft/panda_nft_6.png",
      ],

      technicalHighlights: [
        "Design-to-code implementation from Figma with pixel-perfect accuracy",
        "Responsive layout system using Tailwind CSS",
        "Code splitting and lazy loading for optimized performance",
        "SEO-friendly structure with React Helmet",
        "Clean routing structure with public pages",
        "Consistent design system for spacing, typography, and colors",
      ],

      author: {
        name: "Nguyen Thanh Thuan",
        role: "Frontend Developer",
        email: "nguyenthanhthuan.info@gmail.com",
        phone: "0345 098 435",
        location: "HCMC, Vietnam",
        github: "https://github.com/thuannguyen2kx",
        linkedin: "https://linkedin.com/in/nguyenthanhthuan",
        avatar: "/me.png",
      },
    },

    {
      title: "Pet Care & Social Platform",
      slug: "pet-care-social-platform",
      tagline: "Pet Care Booking, Management & Social Network",
      duration: "8 Months",
      dates: "Jun 2024 - Jan 2025",
      description:
        "A multi-role pet care platform that enables customers to book services, manage pet profiles, interact socially, and allows staff and administrators to manage operations efficiently.",
      longDescription:
        "Pet Care & Social Platform is a comprehensive frontend application designed to support pet care service booking, pet management, and a social network for pet owners. The project focuses on real-world domain complexity, multi-role access control, and scalable frontend architecture. It demonstrates how booking workflows, payment integration, social interactions, and administrative dashboards can coexist within a single, well-structured React application.",

      role: "Frontend Developer",
      status: "Graduation Project & Personal Project",

      features: [
        {
          title: "Service Booking",
          description:
            "Book pet care services with real-time availability and appointment tracking",
          stats: "Online",
          label: "Booking",
        },
        {
          title: "Pet Management",
          description:
            "Manage pet profiles, medical history, and service records",
          stats: "Multi",
          label: "Pets",
        },
        {
          title: "Social Pet Network",
          description:
            "Create posts, comments, and reactions to connect pet owners",
          stats: "Community",
          label: "Driven",
        },
        {
          title: "Payment Integration",
          description: "Secure online payments for services using Stripe",
          stats: "Stripe",
          label: "Payment",
        },
        {
          title: "Role-Based System",
          description:
            "Separate workflows for customers, employees, and administrators",
          stats: "RBAC",
          label: "Access",
        },
      ],

      technologies: [
        { name: "React", icon: Icons.react },
        { name: "TypeScript", icon: Icons.typescript },
        { name: "Tailwind CSS", icon: Icons.tailwind },
        { name: "React Query", icon: Icons.reactquery },
        { name: "React Hook Form", icon: Icons.reactHookForm },
        { name: "Zod", icon: Icons.zod },
        { name: "Stripe", icon: Icons.stripe },
      ],

      links: {
        demo: "/projects/pet-care-social-platform",
        live: "https://pet-care-demo.com",
        github: "https://github.com/thuannguyen2kx/pet-care-social",
      },

      thumbnail:
        "https://i.pinimg.com/736x/9a/6d/3b/9a6d3b2c7e1f4a8c9b0a7d6f5c4b3a2d.jpg",

      images: [
        "/projects/pet-care/pet_dashboard.png",
        "/projects/pet-care/booking.png",
        "/projects/pet-care/pet_profile.png",
        "/projects/pet-care/social_feed.png",
        "/projects/pet-care/employee_schedule.png",
        "/projects/pet-care/admin_dashboard.png",
      ],

      technicalHighlights: [
        "Role-based access control for customers, employees, and administrators",
        "Appointment booking workflow with real-time status tracking",
        "Stripe payment integration for service checkout",
        "Social feed implementation with posts, comments, and reactions",
        "Asynchronous data handling using React Query",
        "Complex form validation with React Hook Form & Zod",
        "Scalable dashboard layouts for operational and analytics views",
        "Component-based UI architecture for large-scale applications",
      ],

      author: {
        name: "Nguyen Thanh Thuan",
        role: "Frontend Developer",
        email: "nguyenthanhthuan.info@gmail.com",
        phone: "0345 098 435",
        location: "HCMC, Vietnam",
        github: "https://github.com/thuannguyen2kx",
        linkedin: "https://linkedin.com/in/nguyenthanhthuan",
        avatar: "/me.png",
      },
    },
  ],

  footer: {
    text: "© 2025 Nguyen Thanh Thuan. All rights reserved.",
  },
} as const;
