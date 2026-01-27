import { Icons } from "@/components/icons";

export const DATA = {
  name: "Nguyen Thanh Thuan",
  initials: "TT",
  url: "https://thuannguyen2kx.site",
  location: "Ho Chi Minh, Vietnam",
  title: "Frontend Developer | React Next.js NodeJs",
  description:
    "Frontend Developer who loves building clean, modern, and scalable web interfaces.",

  summary: `
    I began my journey in frontend development through self-learning and personal projects. Over time, I gained experience working at two companies as a Frontend Developer, building real-world web applications.
    In the past year, I have been very focused on learning front-end web programming. Now I am very confident that my abilities can meet your requirements.
    `,

  avatarUrl: "/me.jpg",

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
    email: "thuan.nguyenthanh.work@gmail.com",
    tel: "0345 098 435",
    social: {
      github: {
        name: "GitHub",
        url: "https://github.com/thuannguyen2kx",
        icon: "github",
      },
      email: {
        name: "Email",
        url: "mailto:thuan.nguyenthanh.work@gmail.com",
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
      end: "Aug 2025",
      description: `
        MST Entertainment is a startup in Vietnam building web platforms and interactive tools for the entertainment industry.
        I joined the company as a Frontend Developer, working with React and Next.js to develop scalable and responsive user interfaces. The products I worked on include interactive engagement tools, booking systems, and link-in-bio style web pages. I contributed to building reusable components, improving UI consistency, and optimizing performance, achieving approximately 25% faster page load times. I also helped establish team-wide code standards using ESLint, Prettier, and EditorConfig to improve code quality and streamline code reviews.
        The main technologies used include JavaScript, TypeScript, React, Next.js, NestJS, and MongoDB.
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
      description: `
        NCC Plus is a software outsourcing company in Vietnam specializing in web and enterprise solutions.
        I joined NCC Plus as a Frontend Developer Intern, where I learned core frontend concepts and worked on internal projects using React. I focused on converting UI designs into reusable React components, integrating REST APIs, and following clean code principles and Git workflows. I also participated in code reviews and technical research to improve code quality and development practices.
        The main technologies used include React, JavaScript, REST APIs, and Git.
      `,
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
      start: "2021",
      end: "2025",
      description:
        "Studied software engineering fundamentals, data structures, algorithms, and web development.",
    },
  ],

  projects: [
    {
      title: "Pet Care & Social Platform",
      slug: "pet-care-social-platform",
      tagline: "Pet Care Booking, Management & Social Network",
      duration: "8 Months",
      dates: "Jun 2024 - Jan 2025",
      description:
        "A multi-role pet care platform that allows customers to book pet services, manage pet profiles, and interact through a social network, while enabling staff and administrators to efficiently manage operations via dedicated dashboards.",
      longDescription: `
        Pet Care & Social Platform is a large-scale frontend application built to simulate a real-world pet care ecosystem.
        The system combines service booking, pet management, and a social network for pet owners into a single, cohesive product.
        The project focuses on handling complex business logic, role-based access control, and scalable UI architecture using modern React patterns.
        It demonstrates how multiple domains—booking workflows, online payments, social interactions, and administrative management—can coexist in one production-oriented frontend codebase. 
      `,
      role: "Web Developer",
      status: "Graduation Project & Personal Project",

      features: [
        {
          title: "Service Booking",
          description:
            "Book pet care services with real-time availability and booking tracking",
          stats: "Online",
          label: "Booking",
        },
        {
          title: "Pet Management",
          description:
            "Manage pet profiles including medical history, vaccination records, and service usage",
          stats: "Multi",
          label: "Pets",
        },
        {
          title: "Social Pet Network",
          description:
            "Social feed where pet owners can create posts, comment, and react to content.",
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
            "Separate workflows and interfaces for customers, employees, and administrators.",
          stats: "RBAC",
          label: "Access",
        },
        {
          title: "Notifications & Status Tracking",
          description:
            "Real-time notifications and status updates for bookings, payments, and service progress",
          stats: "Realtime",
          label: "Notify",
        },
      ],

      technologies: [
        { name: "React", icon: Icons.react },
        { name: "Node", icon: Icons.node },
        { name: "MongoDB", icon: Icons.mongodb },
        { name: "TypeScript", icon: Icons.typescript },
        { name: "Tailwind CSS", icon: Icons.tailwind },
        { name: "React Query", icon: Icons.reactquery },
        { name: "React Hook Form", icon: Icons.reactHookForm },
        { name: "Zod", icon: Icons.zod },
      ],

      links: {
        demo: "/projects/pet-care-social-platform",
        live: "https://petcare.thuannguyen2kx.site",
        github: "https://github.com/thuannguyen2kx/pet-care",
      },

      thumbnail: "/projects/petcare/petcare-home.png",

      images: [
        "/projects/petcare/petcare-login.png",
        "/projects/petcare/petcare-customer-home.png",
        "/projects/petcare/petcare-customer-pet-profile.png",
        "/projects/petcare/petcare-customer-services.png",
        "/projects/petcare/petcare-customer-create-booking.png",
        "/projects/petcare/petcare-customer-social.png",
        "/projects/petcare/petcare-customer-profile.png",
        "/projects/petcare/petcare-admin-dashboard.png",
        "/projects/petcare/petcare-admin-schedule.png",
        "/projects/petcare/petcare-admin-employee-work-hour.png",
        "/projects/petcare/petcare-admin-bookings.png",
        "/projects/petcare/petcare-admin-booking-detail.png",
      ],

      technicalHighlights: [
        "Role-based access control across multiple user types",
        "End-to-end appointment booking workflow with status tracking",
        "Stripe payment integration for service checkout",
        "Social feed implementation (posts, comments, reactions)",
        "Asynchronous data fetching & caching with React Query",
        "Complex form handling with React Hook Form & Zod",
        "Modular, scalable dashboard layouts",
        "Component-based UI architecture for large-scale applications",
      ],

      author: {
        name: "Nguyen Thanh Thuan",
        role: "Web Developer",
        email: "thuan.nguyenthanh.work@gmail.com",
        phone: "0345 098 435",
        location: "HCMC, Vietnam",
        github: "https://github.com/thuannguyen2kx",
        avatar: "/me.jpg",
      },
    },
    {
      title: "Lite Shop",
      slug: "lite-shop",
      tagline: "Modern E-commerce Platform",
      duration: "2 Months",
      dates: "Oct 2025 - Dec 2025",
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
        live: "https://liteshop-sigma.vercel.app",
        github: "https://github.com/thuannguyen2kx/liteshop",
      },
      thumbnail: "/projects/liteshop/liteshop-login.png",
      images: [
        "/projects/liteshop/liteshop-home.png",

        "/projects/liteshop/liteshop-products.png",
        "/projects/liteshop/liteshop-product-detail.png",
        "/projects/liteshop/liteshop-product-related.png",
        "/projects/liteshop/liteshop-cart.png",
        "/projects/liteshop/liteshop-order-success.png",
        "/projects/liteshop/liteshop-purchase-history.png",
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
        email: "thuan.nguyenthanh.work@gmail.com",
        phone: "0345 098 435",
        location: "HCMC, Vietnam",
        github: "https://github.com/thuannguyen2kx",
        avatar: "/me.jpg",
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
        live: "https://panda-nft-gilt.vercel.app",
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
        email: "thuan.nguyenthanh.work@gmail.com",
        phone: "0345 098 435",
        location: "HCMC, Vietnam",
        github: "https://github.com/thuannguyen2kx",
        avatar: "/me.jpg",
      },
    },
  ],

  footer: {
    text: "© 2025 Nguyen Thanh Thuan. All rights reserved.",
  },
} as const;
