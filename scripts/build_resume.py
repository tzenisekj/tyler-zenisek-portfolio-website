from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer
from reportlab.platypus.flowables import KeepTogether

BLUE = colors.HexColor('#2563EB')
DARK = colors.HexColor('#111827')
GRAY = colors.HexColor('#6B7280')
LIGHT_GRAY = colors.HexColor('#374151')
LINE_COLOR = colors.HexColor('#D1D5DB')

doc = SimpleDocTemplate(
    str(Path(__file__).resolve().parent.parent / 'public' / 'Tyler_Zenisek_Resume.pdf'),
    pagesize=letter,
    topMargin=0.4*inch,
    bottomMargin=0.4*inch,
    leftMargin=0.6*inch,
    rightMargin=0.6*inch,
)

name_style = ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=24, leading=28, textColor=DARK, alignment=1, spaceAfter=2)
subtitle_style = ParagraphStyle('subtitle', fontName='Helvetica', fontSize=11, textColor=BLUE, alignment=1, spaceAfter=5)
contact_style = ParagraphStyle('contact', fontName='Helvetica', fontSize=9.5, textColor=GRAY, alignment=1, spaceBefore=8, spaceAfter=2)
section_style = ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=9.5, textColor=DARK, spaceBefore=6, spaceAfter=3, textTransform='uppercase', letterSpacing=0.8)
job_title_style = ParagraphStyle('job_title', fontName='Helvetica-Bold', fontSize=10.5, textColor=DARK, spaceBefore=4, spaceAfter=1)
job_meta_style = ParagraphStyle('job_meta', fontName='Helvetica-Oblique', fontSize=9, textColor=GRAY, spaceAfter=3)
bullet_style = ParagraphStyle('bullet', fontName='Helvetica', fontSize=9, textColor=LIGHT_GRAY, leftIndent=14, firstLineIndent=-10, spaceAfter=2, leading=12)
skill_style = ParagraphStyle('skill', fontName='Helvetica', fontSize=9, textColor=LIGHT_GRAY, spaceAfter=3)
summary_style = ParagraphStyle('summary', fontName='Helvetica', fontSize=9, textColor=LIGHT_GRAY, spaceAfter=4, leading=13)


def section_header(text):
    return [
        Paragraph(text, section_style),
        HRFlowable(width='100%', thickness=1.5, color=BLUE, spaceAfter=4),
    ]


def bullet(text):
    return Paragraph(f'•  {text}', bullet_style)


def link(url, label):
    return f'<a href="{url}"><font color="#2563EB">{label}</font></a>'


def skill_row(category, items):
    return Paragraph(f'<b>{category}:</b>  {items}', skill_style)


story = []

story.append(Paragraph('Tyler Zenisek', name_style))
story.append(Paragraph('Backend · Full-Stack Engineer', subtitle_style))
story.append(Paragraph('Chicago, IL  |  (630) 776-0576  |  tzenisekj@gmail.com', contact_style))
story.append(Paragraph(
    f'{link("https://linkedin.com/in/tyler-zenisek/", "linkedin.com/in/tyler-zenisek")}  |  '
    f'{link("https://github.com/tzenisekj", "github.com/tzenisekj")}  |  '
    f'{link("https://www.tylerzeniseks.com", "tylerzeniseks.com")}',
    ParagraphStyle('contact2', fontName='Helvetica', fontSize=9.5, textColor=GRAY, alignment=1, spaceBefore=0, spaceAfter=8)
))
story.append(HRFlowable(width='100%', thickness=0.5, color=LINE_COLOR, spaceAfter=2))

story.extend(section_header('SUMMARY'))
story.append(Paragraph(
    'Backend-leaning full-stack engineer who designed, built, and runs a live Java/Spring Boot and React platform on AWS solo, '
    'from the API and test suites to Terraform infrastructure and CI/CD. Previously shipped a contract app later adopted by the '
    'U.S. military. Cum laude CS grad seeking a backend or full-stack role.',
    summary_style
))

story.extend(section_header('PROJECTS'))

story.append(KeepTogether([
    Paragraph('Balisong Flipping Center: Full-Stack Community Platform  <font color="#2563EB">· Creator &amp; Sole Engineer</font>', job_title_style),
    Paragraph(
        f'Mar 2024 – Present  ·  {link("https://www.balisongflippingcenter.com", "balisongflippingcenter.com")}'
        f'  ·  {link("https://github.com/BalisongFlippingCenter", "github.com/BalisongFlippingCenter")}',
        job_meta_style
    ),
    bullet('Cut AWS spend 62% ($105 to $40 a month) by auditing Cost Explorer data and shutting down unused environments.'),
    bullet('Codified 76 AWS resources in Terraform, so production can be rebuilt from scratch with no hand-configured servers.'),
    bullet('Shipped 41 production deploys in 10 weeks (95% success), each tested and rolled out by GitHub Actions in ~2.5 minutes.'),
    bullet('Designed a Spring Boot API (106 endpoints) and React/TypeScript UI, backed by 1,600+ tests (JUnit, Testcontainers, Vitest).'),
]))

story.append(KeepTogether([
    Paragraph('Latch: Claude AI Assistant  <font color="#2563EB">· Creator</font>', job_title_style),
    Paragraph(
        f'Aug 2026 – Present  ·  {link("https://github.com/BalisongFlippingCenter/BalisongFlippingCenterAIPython", "github.com/BalisongFlippingCenter/BalisongFlippingCenterAIPython")}',
        job_meta_style
    ),
    bullet('Wrote an LLM eval suite and used its failures to fix prompts and tools, raising the pass rate from 62% to 92% (now 46 cases).'),
    bullet('Cut the wait for a first response from about 8 seconds to 1.2 seconds by streaming from AWS Bedrock through FastAPI.'),
    bullet('Enabled prompt caching so about 4,300 tokens of every model request are served from cache at a tenth of the input price.'),
    bullet('Extended Latch to a second client, a public Discord bot (discord.js), with its own persona, tool set, and Bedrock cost caps.'),
]))

story.append(KeepTogether([
    Paragraph('QuizMaster (Senior Capstone)  <font color="#2563EB">· Team Lead</font>', job_title_style),
    Paragraph(f'Jan 2024 – May 2024  ·  {link("https://quizmaster-c66a2.web.app/", "quizmaster-c66a2.web.app")}', job_meta_style),
    bullet('Led a 4-person scrum team that shipped a React/Firebase quiz app on schedule, owning 23+ of its user stories.'),
    bullet('Onboarded about 40 test users who built roughly 20 quizzes, and after a demo the app was used in summer classes.'),
    bullet('Set up CI/CD and fixed 13 database bugs through unit and integration testing.'),
]))

story.extend(section_header('EXPERIENCE'))

story.append(KeepTogether([
    Paragraph('Contract Lead Android Developer  <font color="#2563EB">· Galileo Innovations</font>', job_title_style),
    Paragraph('Chicago, IL  ·  Jan 2020 – Aug 2020', job_meta_style),
    bullet('As primary Android engineer on a 4-person team, built login and real-time graphs of medical data streamed over Bluetooth.'),
    bullet('Fixed Bluetooth and WebSocket sync bugs that had blocked the team for a month, roughly doubling our pace toward delivery.'),
    bullet('Delivered a working prototype in 6 months that ran on 30 devices in alpha testing and was later adopted by the U.S. military.'),
]))

story.extend(section_header('TECHNICAL SKILLS'))
story.append(skill_row('Languages', 'Java, Python, TypeScript, JavaScript, SQL'))
story.append(skill_row('Cloud &amp; DevOps', 'AWS (EC2, S3, CloudFront, ECR, Route 53, SSM, Bedrock), Terraform, Docker, GitHub Actions, Git, Linux'))
story.append(skill_row('Frameworks &amp; APIs', 'Spring Boot, Spring Security, FastAPI, React, Redux, REST APIs, WebSocket/STOMP, JWT/OAuth2'))
story.append(skill_row('Data', 'PostgreSQL, Flyway, Redis, MySQL'))
story.append(skill_row('Testing', 'JUnit, Mockito, Testcontainers, Vitest, React Testing Library, pytest'))
story.append(skill_row('AI', 'Claude on AWS Bedrock, LLM tool calling, prompt caching, LLM evaluation'))

story.extend(section_header('EDUCATION'))
story.append(KeepTogether([
    Paragraph('B.S. in Computer Science  <font color="#6B7280">· Lewis University · Romeoville, IL  ·  Graduated 2024</font>', job_title_style),
    Paragraph('<font color="#2563EB"><b>Graduated Cum Laude  ·  GPA: 3.5</b></font>', ParagraphStyle('cl', fontName='Helvetica-Bold', fontSize=9.5, textColor=BLUE, spaceAfter=4)),
]))
story.append(KeepTogether([
    Paragraph('A.S. in Software Development  <font color="#6B7280">· College of DuPage · Glen Ellyn, IL  ·  Graduated 2022</font>', job_title_style),
    Spacer(1, 4),
]))

doc.build(story)
print('Done')
