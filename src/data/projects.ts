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
    status: 'Live',
    year: null,
    featured: true,
    coverImage: '/BFC-cover.png',
    description:
      'A full-stack community platform for the balisong flipping hobby, designed, built, and run solo. A React/TypeScript frontend served from S3 and CloudFront, a containerized Spring Boot/PostgreSQL backend on EC2, and the entire production environment provisioned in Terraform.',
    highlights: [
      'Designed and shipped a full-stack web app covering 40+ use cases: posts, profiles, knife collections, real-time messaging, a knife catalog, and admin moderation',
      'Implemented JWT authentication with refresh tokens and Google OAuth2 login',
      'Built a containerized Spring Boot/PostgreSQL backend with WebSocket/STOMP real-time messaging, deployed on EC2 via Docker Compose',
      'Provisioned the entire production AWS environment in Terraform — CloudFront + S3 for the frontend, EC2/ECR/Route 53/ACM for the backend, and SSM Parameter Store for secrets',
      'Built GitHub Actions CI/CD pipelines authenticating via OIDC federation — no long-lived AWS credentials — with separate staging and production deploy paths (staging environment currently offline to reduce AWS costs)',
      'Gated every merge on automated tests: 500+ JUnit/Mockito tests, with Testcontainers running PostgreSQL integration tests, on the backend and 1,100+ Vitest tests on the frontend',
    ],
    tech: ['TypeScript', 'React', 'Redux', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Testcontainers', 'Vitest', 'Docker', 'AWS EC2', 'AWS S3', 'AWS CloudFront', 'AWS ECR', 'Terraform', 'GitHub Actions', 'JWT', 'OAuth2', 'Tailwind CSS', 'Claude Code'],
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
      'Built an eval harness graded by deterministic checks and an LLM judge, then used it to drive fixes that raised the pass rate from 62% to 92%; it has since grown to 46 scenario cases, including voice and formatting checks, and currently passes 93% at 5 runs per case',
      'Streamed responses token by token from Bedrock through a Spring Boot relay to the browser',
      'Enabled prompt caching on the static system prompt and tool definitions, cutting per-run eval cost by ~60%, and bounded per-conversation tokens by trimming Redis-backed history and compacting old tool results',
      'Gated deploys on an 80+ test pytest suite in GitHub Actions, shipping Docker images to ECR and deploying to EC2 over SSM with OIDC — no long-lived AWS credentials',
      'Secured the service in layers — per-client credentials and session rate limiting at the backend relay, plus a shared internal secret on the AI service',
      'Served two clients from one service — the website and a public Discord bot — each with its own client key, persona, and tool set',
    ],
    tech: ['Python', 'FastAPI', 'Claude', 'AWS Bedrock', 'Redis', 'pytest', 'Docker', 'AWS EC2', 'GitHub Actions', 'Spring Boot'],
    liveUrl: 'https://www.balisongflippingcenter.com',
    githubUrl: 'https://github.com/BalisongFlippingCenter/BalisongFlippingCenterAIPython',
    detailPath: null,
  },
  {
    title: 'Discord Balisong Bot',
    slug: 'balisong-bot',
    status: 'Live',
    year: '2026',
    featured: false,
    description:
      'A public Discord bot that brings Latch and the Balisong Flipping Center catalog to any server, plus combo challenges, video-proof dares, and multiplayer games. A second client for the same Latch AI service, containerized and deployed alongside the production backend at no added hosting cost.',
    highlights: [
      'Extended the Latch AI service to a second client — the backend relay authenticates each client\'s key, and the client selects a Discord-specific persona and tool set (catalog tools plus Brave web search, none of the site-only tools)',
      'Shipped 14 slash commands in discord.js v14 — Latch answers streamed into threads with per-thread memory, catalog lookups, comparisons, and filtered recommendations, and a timed multiplayer quiz with a leaderboard',
      'Built a combo generator over a curated, level-graded trick list (opener/mid/closer roles, per-finger variant difficulty, trick families) and video-proof challenges on Components V2 cards whose state lives in the message itself',
      'Designed for public scale without privileged intents — no Message Content intent, replies that can\'t mass-ping, and per-server and global AI caps as a Bedrock cost ceiling',
      'Used the eval harness to catch and fix a Latch terminology error in production, taking the new terminology cases from 0/9 to 9/9',
      'Deployed as its own container on the existing production EC2 — GitHub Actions to ECR to SSM over OIDC, the instance located by tag, secrets in SSM Parameter Store, all provisioned in Terraform',
    ],
    tech: ['JavaScript', 'Node.js', 'discord.js', 'Claude', 'AWS Bedrock', 'Docker', 'AWS EC2', 'AWS ECR', 'AWS SSM', 'Terraform', 'GitHub Actions'],
    liveUrl: 'https://discord.com/oauth2/authorize?client_id=1511180293107617853&permissions=309237762048&scope=bot%20applications.commands',
    githubUrl: 'https://github.com/BalisongFlippingCenter/BalisongFlippingCenterDiscordBot',
    detailPath: null,
  },
  {
    title: 'QuizMaster — Lewis University Capstone',
    slug: 'quizmaster',
    status: 'Completed',
    year: '2024',
    featured: false,
    description:
      'A React/Firebase quiz application built as a senior capstone at Lewis University. Led a scrum team through full SDLC ownership, automating CI/CD pipelines and eliminating 13 database-related bugs — delivered on schedule.',
    highlights: [
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
