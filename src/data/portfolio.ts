export const portfolioData = {
  hero: {
    title: "I build scalable web applications with Django, React and Docker.",
    subtitle: "Junior Full Stack Developer specializing in Django, Next.js, and REST APIs.",
  },
  about: {
    description:
      "Hello! I am Kittithat Seelawan, a passionate Full Stack Developer focused on building robust web applications. I enjoy solving real-world problems through software development. During my senior project, I designed and deployed a complete travel booking platform using Django, PostgreSQL, Docker, and Nginx. I'm currently seeking an opportunity as a Junior Full Stack Developer where I can continue improving my backend and cloud skills.",
  },
  experience: {
    title: "What I Do",
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
  projects: [
    {
      title: "Travel-Booking System (Senior Project)",
      description: "A complete travel booking platform designed and deployed for my senior project. Developed responsive UI with Next.js and built a RESTful API with Django REST Framework.",
      techStack: ["Django", "Next.js", "Postgres", "Docker", "Nginx", "TypeScript", "Tailwind CSS"],
      features: ["Booking", "Login", "JWT", "Admin", "Review"],
      links: {
        demo: "#", // Add your live demo link here
        github: "https://github.com/Mr-Akio",
        video: "#", // Add your video link here
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
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["Next.js", "React", "Django REST Framework", "Tailwind CSS"]
    },
    {
      category: "Tools & Databases",
      items: ["Docker", "Nginx", "PostgreSQL", "SQLite", "Git", "CI/CD"]
    }
  ],
  blog: [
    {
      title: "Deep Dive: JWT Authentication with Django REST Framework",
      slug: "jwt-authentication-django",
      date: "2024-10-15",
      link: "/blog/jwt-authentication-django",
      content: `
# Deep Dive: JWT Authentication with Django REST Framework

Authentication is the backbone of any modern web application. In my recent Travel Booking project, I opted for **JSON Web Tokens (JWT)** combined with Django REST Framework (DRF) instead of traditional session-based authentication.

## Why JWT?

The main advantage of JWT is that it is **stateless**. The server doesn't need to store session data in the database, significantly reducing database load. It's also the perfect choice for a decoupled architecture where the frontend (Next.js) and backend (Django) operate completely independently.

## Implementation Details

I chose the \`djangorestframework-simplejwt\` package. It handles token generation, validation, and refreshing out of the box, making the integration seamless.

Here is a quick look at my \`settings.py\` configuration:

\`\`\`python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
\`\`\`

## The Real Challenge

The backend implementation was straightforward. The real challenge was on the client side (Next.js): *How do we ensure the user isn't abruptly logged out when the Access Token expires?*

**My Solution:** I implemented an Axios Interceptor that catches \`401 Unauthorized\` errors. Upon catching this error, the system silently sends the Refresh Token to request a new Access Token, and then automatically retries the failed request.

The result is a buttery-smooth User Experience (UX)—users don't even realize their tokens are expiring and refreshing in the background!
      `
    },
    {
      title: "Deploying a Full Stack App (Django + Next.js) with Docker & Nginx",
      slug: "deploy-django-nextjs-docker",
      date: "2024-11-02",
      link: "/blog/deploy-django-nextjs-docker",
      content: `
# Deploying a Full Stack App (Django + Next.js) with Docker & Nginx

Once the Travel Booking project was complete, the next hurdle was getting it onto a production server. I needed a stable environment that was easy to reproduce anywhere. **Docker** was the obvious solution.

## The Architecture

My system consists of 4 core containers:
1. **Frontend**: Next.js running in standalone mode (lightweight and incredibly fast).
2. **Backend**: Django Web Server running via Gunicorn.
3. **Database**: PostgreSQL.
4. **Reverse Proxy**: Nginx.

## Orchestrating with Docker Compose

Managing 4 containers manually would be a nightmare. \`docker-compose.yml\` made orchestrating these services incredibly easy. Here's a snippet of my configuration:

\`\`\`yaml
version: '3.8'
services:
  web:
    build: ./backend
    command: gunicorn backend.wsgi:application --bind 0.0.0.0:8000
    depends_on:
      - db
  
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
\`\`\`

## Nginx: The Traffic Director

I configured Nginx to act as a Reverse Proxy:
- Requests to the root path \`/\` are routed to **Next.js**.
- Requests to \`/api/\` or \`/admin/\` are routed to **Django**.

**The big win here:** This setup completely bypasses CORS (Cross-Origin Resource Sharing) issues because the browser sees both services coming from the same domain on port 80. It keeps the security tight and the architecture clean.
      `
    },
    {
      title: "Solving the N+1 Query Problem in PostgreSQL (Django ORM)",
      slug: "optimizing-postgresql-django",
      date: "2024-12-10",
      link: "/blog/optimizing-postgresql-django",
      content: `
# Solving the N+1 Query Problem in PostgreSQL (Django ORM)

As my Travel Booking platform grew, I noticed the Hotel Search page was taking noticeably longer to load. After diving into the SQL logs, I found the usual suspect: the dreaded **N+1 Query Problem**.

## The Root Cause

When fetching a list of hotels (let's say 50 hotels), the Django ORM was executing a separate query to fetch the 'Reviews' for *each* hotel in the list. 
This meant that to load 50 hotels, the database ran 1 query (for hotels) + 50 queries (for reviews) = **51 Queries!**

## The Solution: select_related and prefetch_related

Fortunately, Django provides built-in tools specifically for this issue:

- **\`select_related()\`**: Used for Foreign Key relationships (1-to-1 or Many-to-1). It performs an SQL JOIN at the database level.
- **\`prefetch_related()\`**: Used for Many-to-Many or Reverse Foreign Key relationships (1-to-Many). It fetches the data in two separate queries and joins them in Python (in-memory).

Since the relationship between a Hotel and its Reviews is 1-to-Many, I updated my View logic:

\`\`\`python
# The Culprit
hotels = Hotel.objects.all()

# The Fix (using prefetch_related)
hotels = Hotel.objects.prefetch_related('reviews').all()
\`\`\`

## The Results

This single line of code reduced the total queries from 51 down to just **2 queries!** 
The API response time dropped from around 800ms to just 45ms. It was a massive win for performance and a great lesson in the importance of database optimization and using ORMs correctly.
      `
    },
  ],
  education: [
    {
      institution: "Bangkok University",
      degree: "Bachelor's Degree in Computer Science",
      period: "Faculty of Information Technology and Innovation",
      gpa: "",
    }
  ],
  contact: {
    email: "kittithat.seel@gmail.com",
    github: "https://github.com/Mr-Akio",
    linkedin: "https://www.linkedin.com/in/kittitthat-selawan-075532330",
    phone: "092-990-2631",
    address: "Saraburi 18120, Thailand",
  },
  name: "Kittithat Seelawan"
};
