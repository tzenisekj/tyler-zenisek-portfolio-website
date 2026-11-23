# Tyler Zenisek — Portfolio Website

A professional portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** React 19 + TypeScript (via Vite)
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite

## Sections

| Section | Description |
|---|---|
| Hero | Name, title, summary, and quick links to GitHub / LinkedIn / Email |
| About | Bio, background, and key stats |
| Skills | Grouped by Languages, Frameworks, Cloud/DevOps, Data/APIs, and Tools |
| Projects | Featured: Balisong Flipping Center · QuizMaster capstone |
| Experience | Work history with bullet highlights and skill tags |
| Education | Lewis University B.S. CS (cum laude) + relevant coursework |
| Contact / Footer | Email CTA, social links, phone |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Resume

The downloadable resume (`public/Tyler_Zenisek_Resume.pdf`) is generated from `scripts/build_resume.py`. Edit the content there, then rebuild it:

```bash
pip install reportlab
python scripts/build_resume.py
```

## Featured Project: Balisong Flipping Center

A live full-stack community platform for the balisong flipping hobby.

- **Frontend:** React, Redux, TypeScript, Tailwind CSS
- **Backend:** Java, Spring Boot, PostgreSQL
- **Auth:** JWT + Google OAuth2
- **Infra:** Terraform-provisioned AWS (EC2, ECR, S3, CloudFront, SSM), Docker, GitHub Actions with OIDC
- **Live:** https://www.balisongflippingcenter.com
- **Source:** https://github.com/BalisongFlippingCenter

## Contact

- **Email:** tzenisekj@gmail.com
- **GitHub:** https://github.com/tzenisekj
- **LinkedIn:** https://linkedin.com/in/tyler-zenisek/
