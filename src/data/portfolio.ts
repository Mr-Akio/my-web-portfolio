export interface PortfolioDataType {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    viewProjects: string;
    contactMe: string;
    downloadCv: string;
  };
  about: {
    povLabel: string;
    povQuote: string;
    aboutLabel: string;
    description: string;
  };
  experience: {
    title: string;
    subtitle: string;
    metricsTitle: string;
    featuresTitle: string;
    highlights: string[];
    features: string[];
  };
  projects: {
    title: string;
    challengeLabel: string;
    screenshotPlaceholder: string;
    items: Array<{
      title: string;
      description: string;
      techStack: string[];
      features: string[];
      links: {
        demo: string;
        github: string;
        video: string;
      };
      image: string;
      challenge: string;
    }>;
  };
  skills: {
    title: string;
    items: Array<{
      category: string;
      items: string[];
    }>;
  };
  blog: {
    title: string;
    readArticle: string;
    items: Array<{
      title: string;
      slug: string;
      date: string;
      link: string;
      content: string;
    }>;
  };
  education: {
    title: string;
    subtitle: string;
    items: Array<{
      institution: string;
      degree: string;
      period: string;
      gpa?: string;
    }>;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    phone: string;
    address: string;
  };
  footer: {
    ctaTitle: string;
    ctaSubtitle: string;
    getInTouch: string;
    availableBadge: string;
    location: string;
    remote: string;
    relocation: string;
    connect: string;
    rightsReserved: string;
    designTagline: string;
  };
  nav: {
    work: string;
    experience: string;
    education: string;
    skills: string;
    about: string;
    blog: string;
    resume: string;
    contact: string;
  };
  name: string;
}

export const portfolioData: { th: PortfolioDataType; en: PortfolioDataType } = {
  th: {
    name: "Kittithat Seelawan",
    nav: {
      work: "ผลงาน",
      experience: "ประสบการณ์",
      education: "การศึกษา",
      skills: "ทักษะ",
      about: "เกี่ยวกับฉัน",
      blog: "บทความ",
      resume: "เรซูเม่",
      contact: "ติดต่อฉัน",
    },
    hero: {
      badge: "พร้อมเริ่มงานทันที",
      title: "ผมพัฒนาเว็บแอปพลิเคชันที่รองรับการขยายตัวด้วย Django, React และ Docker",
      subtitle: "Junior Full Stack Developer ผู้เชี่ยวชาญด้าน Django, Next.js และ REST APIs",
      viewProjects: "ดูผลงานของฉัน",
      contactMe: "ติดต่อฉัน",
      downloadCv: "ดาวน์โหลด CV",
    },
    about: {
      povLabel: "มุมมองแนวคิด",
      povQuote: "ผลิตภัณฑ์ที่ดีไม่ได้เกิดจากการใส่ทุกอย่างลงไป แต่เกิดจากการตัดสินใจเลือกสิ่งที่สำคัญที่สุด",
      aboutLabel: "เกี่ยวกับฉัน",
      description:
        "สวัสดีครับ! ผม กิตติทัต ศีลวรรณ (Kittithat Seelawan) นักพัฒนา Full Stack ที่มุ่งมั่นสร้างสรรค์เว็บแอปพลิเคชันที่เสถียรและทรงพลัง ผมชื่นชอบการแก้ปัญหาในโลกความเป็นจริงผ่านการพัฒนาซอฟต์แวร์ ในช่วงทำโครงงานจบการศึกษา (Senior Project) ผมได้ออกแบบและติดตั้งระบบจองแพ็กเกจท่องเที่ยวครบวงจรด้วย Django, PostgreSQL, Docker และ Nginx ขณะนี้ผมกำลังมองหาโอกาสร่วมงานในตำแหน่ง Junior Full Stack Developer เพื่อพัฒนาทักษะด้าน Backend และ Cloud ต่อไปครับ",
    },
    experience: {
      title: "สิ่งที่ผมทำ",
      subtitle: "มุ่งเน้นการวางสถาปัตยกรรม Backend, ออกแบบฐานข้อมูล และพัฒนา REST APIs ที่รองรับการขยายตัวสำหรับเว็บแอปพลิเคชันยุคใหม่",
      metricsTitle: "ผลงานและความสำเร็จ",
      featuresTitle: "ฟีเจอร์หลักที่พัฒนา",
      highlights: [
        "พัฒนา 18 REST APIs",
        "ออกแบบ 12 ตารางฐานข้อมูล",
        "พัฒนาระบบยืนยันตัวตนด้วย JWT",
        "สร้าง Docker Container สำหรับ Deployment",
      ],
      features: [
        "ระบบยืนยันตัวตน (Authentication)",
        "ระบบการจอง (Booking System)",
        "แดชบอร์ดผู้ดูแลระบบ (Admin Dashboard)",
        "Docker Deployment",
        "REST API",
        "PostgreSQL",
      ],
    },
    projects: {
      title: "ผลงานโปรเจกต์",
      challengeLabel: "ความท้าทาย & วิธีแก้ปัญหา",
      screenshotPlaceholder: "ภาพตัวอย่างโปรเจกต์เร็วๆ นี้",
      items: [
        {
          title: "ระบบจองทริปท่องเที่ยว Travel-Booking (Senior Project)",
          description: "แพลตฟอร์มการจองทริปท่องเที่ยวแบบครบวงจร พัฒนาและติดตั้งสำหรับโครงงานจบการศึกษา (Senior Project) โดยใช้ Next.js ฝั่ง Frontend และ Django REST Framework ฝั่ง Backend",
          techStack: ["Django", "Next.js", "Postgres", "Docker", "Nginx", "TypeScript", "Tailwind CSS"],
          features: ["Booking", "Login", "JWT", "Admin", "Review"],
          links: {
            demo: "#",
            github: "https://github.com/Mr-Akio",
            video: "#",
          },
          image: "",
          challenge: "การจัดการการจองพร้อมกัน (Concurrent Bookings) เพื่อป้องกันการจองซ้ำซ้อน แก้ไขด้วยการใช้ Database Transactions บน PostgreSQL",
        },
        {
          title: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว (Personal Web Portfolio)",
          description: "ออกแบบและพัฒนาเว็บไซต์พอร์ตโฟลิโอส่วนตัวแบบ Responsive 100% ด้วยดีไซน์มินิมอลระดับพรีเมียม",
          techStack: ["HTML5", "CSS3", "JavaScript"],
          features: ["Semantic HTML", "Advanced CSS3", "Grid/Flexbox", "Animations", "Scroll Reveals"],
          links: {
            demo: "https://github.com/Mr-Akio/my-web-portfolio",
            github: "https://github.com/Mr-Akio/my-web-portfolio",
            video: "#",
          },
          image: "",
          challenge: "สร้างดีไซน์ที่มีปฏิสัมพันธ์สูงโดยไม่ต้องพึ่งพา Framework ขนาดใหญ่ แก้ปัญหาด้วยการจัดระเบียบ Vanilla JS Scroll Reveal และ CSS3 Grid Layout ขั้นสูง",
        },
      ],
    },
    skills: {
      title: "ทักษะความสามารถ",
      items: [
        {
          category: "Languages (ภาษาโปรแกรม)",
          items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
        },
        {
          category: "Frameworks & Libraries",
          items: ["Next.js", "React", "Django REST Framework", "Tailwind CSS"],
        },
        {
          category: "Tools & Databases",
          items: ["Docker", "Nginx", "PostgreSQL", "SQLite", "Git", "CI/CD"],
        },
      ],
    },
    blog: {
      title: "บทความ & บันทึกเทคนิค",
      readArticle: "อ่านบทความ",
      items: [
        {
          title: "เจาะลึก: ระบบยืนยันตัวตน JWT ด้วย Django REST Framework",
          slug: "jwt-authentication-django",
          date: "2024-10-15",
          link: "/blog/jwt-authentication-django",
          content: `...`,
        },
        {
          title: "การ Deploy Full Stack App (Django + Next.js) ด้วย Docker & Nginx",
          slug: "deploy-django-nextjs-docker",
          date: "2024-11-02",
          link: "/blog/deploy-django-nextjs-docker",
          content: `...`,
        },
        {
          title: "การแก้ปัญหา N+1 Query ใน PostgreSQL (Django ORM)",
          slug: "optimizing-postgresql-django",
          date: "2024-12-10",
          link: "/blog/optimizing-postgresql-django",
          content: `...`,
        },
      ],
    },
    education: {
      title: "ประวัติการศึกษา",
      subtitle: "คุณวุฒิและประวัติการศึกษาของฉัน",
      items: [
        {
          institution: "มหาวิทยาลัยกรุงเทพ (Bangkok University)",
          degree: "ปริญญาตรี วิทยาการคอมพิวเตอร์ (Bachelor's Degree in Computer Science)",
          period: "คณะเทคโนโลยีสารสนเทศและนวัตกรรม",
          gpa: "",
        },
      ],
    },
    contact: {
      email: "kittithat.seel@gmail.com",
      github: "https://github.com/Mr-Akio",
      linkedin: "https://www.linkedin.com/in/kittitthat-selawan-075532330",
      phone: "092-990-2631",
      address: "Saraburi 18120, Thailand",
    },
    footer: {
      ctaTitle: "มีโปรเจกต์ที่น่าสนใจอยากสร้างร่วมกันไหมครับ?",
      ctaSubtitle: "มาร่วมเปลี่ยนไอเดียที่ซับซ้อนให้กลายเป็นผลิตภัณฑ์ดิจิทัลที่ใช้งานได้จริงและพร้อมขยายตัว ขณะนี้พร้อมเปิดรับโอกาสใหม่ๆ ในการร่วมงานครับ",
      getInTouch: "ติดต่อพูดคุย",
      availableBadge: "พร้อมเริ่มงานทันที",
      location: "ประเทศไทย",
      remote: "ทำงานระยะไกล (Remote)",
      relocation: "พร้อมย้ายที่ทำงาน",
      connect: "ช่องทางติดต่อ",
      rightsReserved: "สงวนลิขสิทธิ์ทั้งหมด",
      designTagline: "ออกแบบด้วยแนวคิด Editorial Minimalism",
    },
  },
  en: {
    name: "Kittithat Seelawan",
    nav: {
      work: "Work",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      about: "About",
      blog: "Blog",
      resume: "Resume",
      contact: "Contact Me",
    },
    hero: {
      badge: "Available for work",
      title: "I build scalable web applications with Django, React and Docker.",
      subtitle: "Junior Full Stack Developer specializing in Django, Next.js, and REST APIs.",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      povLabel: "Point of View",
      povQuote: "Good products are not created by adding more. They are created by deciding what matters.",
      aboutLabel: "About Me",
      description:
        "Hello! I am Kittithat Seelawan, a passionate Full Stack Developer focused on building robust web applications. I enjoy solving real-world problems through software development. During my senior project, I designed and deployed a complete travel booking platform using Django, PostgreSQL, Docker, and Nginx. I'm currently seeking an opportunity as a Junior Full Stack Developer where I can continue improving my backend and cloud skills.",
    },
    experience: {
      title: "What I Do",
      subtitle: "Focusing on backend architecture, database design, and building scalable APIs for modern web applications.",
      metricsTitle: "Metrics & Achievements",
      featuresTitle: "Core Features Implemented",
      highlights: [
        "Developed 18 REST APIs",
        "Designed 12 database tables",
        "Implemented JWT authentication",
        "Dockerized application for deployment",
      ],
      features: [
        "Authentication",
        "Booking System",
        "Admin Dashboard",
        "Docker Deployment",
        "REST API",
        "PostgreSQL",
      ],
    },
    projects: {
      title: "My Projects",
      challengeLabel: "Challenge & Solution",
      screenshotPlaceholder: "Project screenshot coming soon",
      items: [
        {
          title: "Travel-Booking System (Senior Project)",
          description: "A complete travel booking platform designed and deployed for my senior project. Developed responsive UI with Next.js and built a RESTful API with Django REST Framework.",
          techStack: ["Django", "Next.js", "Postgres", "Docker", "Nginx", "TypeScript", "Tailwind CSS"],
          features: ["Booking", "Login", "JWT", "Admin", "Review"],
          links: {
            demo: "#",
            github: "https://github.com/Mr-Akio",
            video: "#",
          },
          image: "",
          challenge: "Handling concurrent bookings efficiently without data race conditions. Solved by implementing database transactions on PostgreSQL.",
        },
        {
          title: "Personal Web Portfolio",
          description: "Developed and designed a 100% responsive, premium portfolio site with modern aesthetics.",
          techStack: ["HTML5", "CSS3", "JavaScript"],
          features: ["Semantic HTML", "Advanced CSS3", "Grid/Flexbox", "Animations", "Scroll Reveals"],
          links: {
            demo: "https://github.com/Mr-Akio/my-web-portfolio",
            github: "https://github.com/Mr-Akio/my-web-portfolio",
            video: "#",
          },
          image: "",
          challenge: "Creating a premium, highly interactive aesthetic without relying on heavy frameworks. Solved by carefully orchestrating Vanilla JS scroll reveals and advanced CSS3 grid layouts.",
        },
      ],
    },
    skills: {
      title: "Technical Arsenal",
      items: [
        {
          category: "Languages",
          items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
        },
        {
          category: "Frameworks & Libraries",
          items: ["Next.js", "React", "Django REST Framework", "Tailwind CSS"],
        },
        {
          category: "Tools & Databases",
          items: ["Docker", "Nginx", "PostgreSQL", "SQLite", "Git", "CI/CD"],
        },
      ],
    },
    blog: {
      title: "Writing & Thoughts",
      readArticle: "Read Article",
      items: [
        {
          title: "Deep Dive: JWT Authentication with Django REST Framework",
          slug: "jwt-authentication-django",
          date: "2024-10-15",
          link: "/blog/jwt-authentication-django",
          content: `...`,
        },
        {
          title: "Deploying a Full Stack App (Django + Next.js) with Docker & Nginx",
          slug: "deploy-django-nextjs-docker",
          date: "2024-11-02",
          link: "/blog/deploy-django-nextjs-docker",
          content: `...`,
        },
        {
          title: "Solving the N+1 Query Problem in PostgreSQL (Django ORM)",
          slug: "optimizing-postgresql-django",
          date: "2024-12-10",
          link: "/blog/optimizing-postgresql-django",
          content: `...`,
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "My academic background and qualifications.",
      items: [
        {
          institution: "Bangkok University",
          degree: "Bachelor's Degree in Computer Science",
          period: "Faculty of Information Technology and Innovation",
          gpa: "",
        },
      ],
    },
    contact: {
      email: "kittithat.seel@gmail.com",
      github: "https://github.com/Mr-Akio",
      linkedin: "https://www.linkedin.com/in/kittitthat-selawan-075532330",
      phone: "092-990-2631",
      address: "Saraburi 18120, Thailand",
    },
    footer: {
      ctaTitle: "Have something worth building?",
      ctaSubtitle: "Let's turn complex ideas into focused, scalable digital products. Currently available for new opportunities.",
      getInTouch: "Get In Touch",
      availableBadge: "Available for Work",
      location: "Thailand",
      remote: "Remote",
      relocation: "Open to Relocation",
      connect: "Connect",
      rightsReserved: "All rights reserved.",
      designTagline: "Designed with Editorial Minimalism in mind.",
    },
  },
};
