export interface Project {
  title: string
  slug: string
  status: string
  year: string | null
  featured: boolean
  coverImage?: string
  description: string
  highlights: string[]
  tech: string[]
  liveUrl: string | null
  githubUrl: string | null
  detailPath: string | null
}

export const projects: Project[] = [
  {
    title: 'Balisong Flipping Center',
    slug: 'balisong-flipping-center',
    status: 'In Progress',
    year: null,
    featured: true,
    coverImage: '/BFC-cover.png',
    description:
      'A full-stack community platform for the balisong flipping hobby. Architected and shipped with 40+ use cases and 10,000+ commits, with a React/TypeScript frontend served from S3 and CloudFront, a containerized Spring Boot backend on EC2, and the entire production environment provisioned in Terraform.',
    highlights: [
      'Architected full-stack web app covering 40+ use cases with 10,000+ commits',
      'Implemented JWT authentication with refresh tokens and Google OAuth2 login',
      'Built a containerized Spring Boot/PostgreSQL backend with WebSocket/STOMP real-time messaging, deployed on EC2 via Docker Compose',
      'Provisioned the entire production AWS environment in Terraform — CloudFront + S3 for the frontend, EC2/ECR/Route 53/ACM for the backend, and SSM Parameter Store for secrets',
      'Built GitHub Actions CI/CD pipelines authenticating via OIDC federation — no long-lived AWS credentials — with separate staging and production deploy paths',
    ],
    tech: ['TypeScript', 'React', 'Redux', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS EC2', 'AWS S3', 'AWS CloudFront', 'AWS ECR', 'Terraform', 'GitHub Actions', 'JWT', 'OAuth2', 'Tailwind CSS', 'Claude Code'],
    liveUrl: 'https://www.balisongflippingcenter.com',
    githubUrl: 'https://github.com/BalisongFlippingCenter',
    detailPath: '/projects/balisong',
  },
  {
    title: 'Latch',
    slug: 'latch',
    status: 'Live',
    year: '2026',
    featured: false,
    description:
      'A streaming AI assistant built into the Balisong Flipping Center. A FastAPI microservice running Claude on AWS Bedrock that answers questions about knives, tricks, users, and the site itself by calling the platform\'s own REST API — never from model memory — backed by an eval harness that measures answer quality against the real model.',
    highlights: [
      'Built genuine tool calling over Bedrock\'s Converse API — Claude searches posts, profiles, collections, and the knife catalog, and files moderation reports for logged-in users, through the platform\'s live REST API',
      'Built an eval harness of 29 scenario cases graded by deterministic checks and an LLM judge, then used it to drive fixes that raised the pass rate from 62% to 92%',
      'Streamed responses token by token from Bedrock through a Spring Boot relay to the browser',
      'Enabled prompt caching on the static system prompt and tool definitions, cutting per-run eval cost by ~60%, and bounded per-conversation tokens by trimming Redis-backed history and compacting old tool results',
      'Gated deploys on a 63-test pytest suite in GitHub Actions, shipping Docker images to ECR and deploying to EC2 over SSM with OIDC — no long-lived AWS credentials',
      'Secured the service in layers — per-client credentials and session rate limiting at the backend relay, plus a shared internal secret on the AI service',
    ],
    tech: ['Python', 'FastAPI', 'Claude', 'AWS Bedrock', 'Redis', 'pytest', 'Docker', 'AWS EC2', 'GitHub Actions', 'Spring Boot'],
    liveUrl: 'https://www.balisongflippingcenter.com',
    githubUrl: 'https://github.com/BalisongFlippingCenter/BalisongFlippingCenterAIPython',
    detailPath: null,
  },
  {
    title: 'QuizMaster — Lewis University Capstone',
    slug: 'quizmaster',
    status: 'Completed',
    year: '2024',
    featured: false,
    description:
      'A React/Firebase quiz application built as a senior capstone at Lewis University. Led a scrum team through full SDLC ownership, automating CI/CD pipelines and eliminating 13 database-related bugs — delivered on schedule with 1,000+ commits.',
    highlights: [
      'Accumulated 1,000+ commits across the full project lifecycle',
      'Led a scrum team of multiple developers, delegating and owning 23+ user stories',
      'Automated build and deployment pipelines (CI/CD), cutting manual release effort significantly',
      'Eliminated 13 database-related bugs through systematic diagnosis and testing',
      'Delivered on schedule with full SDLC ownership from planning through deployment',
    ],
    tech: ['React', 'Firebase', 'CI/CD', 'AWS', 'Agile', 'NoSQL', 'Git'],
    liveUrl: 'https://quizmaster-c66a2.web.app/',
    githubUrl: null,
    detailPath: null,
  },
]
