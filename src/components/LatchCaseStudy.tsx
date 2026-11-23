import type { ReactNode } from 'react'
import { Link } from 'react-router'
import FadeIn from './FadeIn'

const stats = [
  { value: '46', label: 'Eval cases' },
  { value: '5', label: 'Runs per case' },
  { value: '62% → 92%', label: 'First suite' },
  { value: '93%', label: 'Today' },
]

const scoreHistory = [
  { date: 'Oct 5', step: 'First run, Claude Haiku 4.5', score: 62, suite: '29 cases × 3 runs' },
  { date: 'Oct 5', step: 'Tool definitions fixed', score: 92, suite: '29 cases × 3 runs' },
  { date: 'Nov 7', step: 'Stricter suite, before grounding', score: 78, suite: '44 cases × 5 runs' },
  { date: 'Nov 7', step: 'Grounded in tool results', score: 91, suite: '44 cases × 5 runs' },
  { date: 'Nov 17', step: 'Haiku 4.5, same-day baseline', score: 88, suite: '44 cases × 5 runs' },
  { date: 'Nov 17', step: 'Sonnet 4.6, same catalog', score: 93, suite: '44 cases × 5 runs' },
  { date: 'Nov 17', step: 'Sonnet 4.6 after fixes', score: 97, suite: '44 cases × 5 runs' },
  { date: 'Nov 21', step: 'Voice rubric added', score: 79, suite: '46 cases × 5 runs' },
  { date: 'Nov 21', step: 'Sentence budgets + example replies', score: 91, suite: '46 cases × 5 runs' },
  { date: 'Nov 22', step: 'Markdown replies', score: 93, suite: '46 cases × 5 runs' },
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <FadeIn>
      <div>
        <h2 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <div className="space-y-4 text-gray-400 leading-relaxed">{children}</div>
      </div>
    </FadeIn>
  )
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-indigo-400 mt-0.5 shrink-0">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Code({ children }: { children: ReactNode }) {
  return <code className="px-1.5 py-0.5 bg-[#1a1838] border border-[#332f6e] rounded text-indigo-300 text-[0.9em]">{children}</code>
}

function ScoreHistory() {
  return (
    <figure className="bg-[#1a1838] border border-[#332f6e] rounded-xl p-5 md:p-6">
      <figcaption className="text-white text-sm font-semibold mb-1">Eval pass rate over time</figcaption>
      <p className="text-gray-500 text-xs mb-5">Each row is one full eval run. Drops come from new, stricter checks or a refreshed catalog, not regressions.</p>
      <ol className="space-y-3">
        {scoreHistory.map((row) => (
          <li
            key={row.date + row.step}
            title={`${row.date}: ${row.step}, ${row.score}% (${row.suite})`}
            className="grid grid-cols-[3.5rem_1fr_2.75rem] sm:grid-cols-[4rem_14rem_1fr_2.75rem] items-center gap-x-3 gap-y-1"
          >
            <span className="text-gray-500 text-xs">{row.date}</span>
            <span className="text-gray-300 text-xs sm:text-sm col-span-2 sm:col-span-1">{row.step}</span>
            <div className="col-start-2 sm:col-start-3 h-2.5 bg-[#0b0a1e] rounded-r">
              <div className="h-full bg-indigo-400 rounded-r" style={{ width: `${row.score}%` }} />
            </div>
            <span className="text-white text-sm font-semibold text-right">{row.score}%</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export default function LatchCaseStudy() {
  return (
    <div className="pt-24">
      <section className="py-12 md:py-16 bg-[#0f0e28]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <Link
              to="/projects/balisong"
              className="inline-flex items-center gap-1.5 text-gray-500 hover:text-indigo-400 text-sm transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Balisong Flipping Center
            </Link>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Case Study · 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Measuring an AI assistant: the Latch eval suite</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              How I grade Latch, the AI assistant inside the Balisong Flipping Center, against the real model, and
              what moved the score.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#1a1838] border border-[#332f6e] rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-indigo-400">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#0b0a1e]">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <Section title="What Latch is">
            <p>
              Latch is a FastAPI service that runs Claude on AWS Bedrock and answers questions about knives, tricks,
              users, and the site itself. It never answers those from model memory: Claude calls tools that hit the
              same REST API the website uses, so every fact about a post, a profile, or a knife comes from live data.
              The website chat widget and a public Discord bot both reach it through the Spring Boot backend.
            </p>
          </Section>

          <Section title="Why unit tests weren't enough">
            <p>
              Latch had a passing pytest suite from the start. It proved the code did what I wrote it to do: tools
              dispatched, tokens streamed, history trimmed. It couldn't tell me whether the answers were any good. A
              reply can pass every unit test and still invent a knife's price, file a report for a user who isn't
              logged in, or bury the answer under three paragraphs of filler.
            </p>
            <p>So I built an eval suite that grades Latch the way a user would experience it.</p>
          </Section>

          <Section title="How the evals work">
            <p>
              Each case in <Code>cases.yaml</Code> is a conversation plus the criteria a good final reply has to
              meet. The runner plays every case against the real model, with tools hitting the live, read-only BFC
              API. The one tool that writes, <Code>report_content</Code>, is stubbed, so an eval run can never file a
              real report. Every reply is graded two ways:
            </p>
            <Bullets
              items={[
                <><strong className="text-gray-200">Deterministic checks</strong> for anything with a right answer: which tools were called (or must not be), required tool arguments, no tool call returning an error, text that must or must not appear, and a maximum length.</>,
                <><strong className="text-gray-200">An LLM judge</strong> (Claude Sonnet 4.6, forced into a structured pass/fail verdict) for what can't be string-matched: is every stated spec backed by a tool result, does an explanation match the site's Learn pages, does the reply sound like an experienced flipper rather than a product page.</>,
              ]}
            />
            <p>
              Each case runs several times, because the same prompt doesn't always give the same answer. Every run
              writes a report with the pass rate by category and by case, the failure reasons, and the token cost.
              A full run costs about $4.40.
            </p>
          </Section>

          <FadeIn>
            <ScoreHistory />
          </FadeIn>

          <Section title="Round 1: 62% → 92%">
            <p>
              The first run scored 54 of 87 (62%) across 29 cases on Claude Haiku 4.5. The report showed exactly
              where it broke:
            </p>
            <Bullets
              items={[
                <><strong className="text-gray-200">Posts: 25%.</strong> Asked for trick tutorials, the model filtered on <Code>post_type: "tutorial"</Code>. The backend expects <Code>TRICK_TUTORIAL</Code> and answered with a 409. The model was guessing enum values.</>,
                <><strong className="text-gray-200">Reporting: 25%.</strong> The model inferred whether the user was logged in from which tools it had, got it wrong, and tried to file reports for logged-out users.</>,
                <><strong className="text-gray-200">Catalog searches</strong> combined a maker and a knife ("Squid Industries Tsunami"), which matched nothing.</>,
              ]}
            />
            <p>
              The fixes were in the tool definitions, not the model: the filters now list the backend's actual enum
              values, the per-request context states outright whether the user is logged in, and catalog search takes
              a knife name or a maker name, never both. The rerun scored 80 of 87 (92%).
            </p>
            <p>
              One side effect: the longer tool definitions pushed the static part of the prompt past Haiku's
              4,096-token minimum for prompt caching, so caching switched on and each eval run got cheaper.
            </p>
          </Section>

          <Section title="Catching a real bug">
            <p>
              In mid-October the eval suite caught Latch describing zen pins as a pivot pin running through both
              handles. That's wrong, and it's the kind of mistake that costs an assistant its credibility with people
              who know the hobby. I added three terminology cases aimed at the Discord persona, and they failed 0 of
              9. Both personas now carry a short terminology reference that matches the site's Learn page, and the
              cases pass 9 of 9.
            </p>
          </Section>

          <Section title="Grounding answers in tool results">
            <p>
              As the suite grew to 44 cases, a stricter run at 5 passes per case scored 78%. Most failures were the
              model filling gaps from memory: stating a spec no tool had returned, or answering a follow-up from an
              older lookup whose details had since been compacted out of the history. I changed the prompt to state
              only facts a tool result returned, to re-run lookups on follow-ups, and to use the site's own Learn
              content for explanations. The score went to 91%.
            </p>
          </Section>

          <Section title="Choosing a model with data">
            <p>
              On the same day and the same catalog, Claude Haiku 4.5 scored 88% and Claude Sonnet 4.6 scored 93%.
              Sonnet costs about three times as much per reply, but its wins were the failures users would notice
              most: mixing up knife variants, guessing slugs on follow-ups, and filling in details from memory. I
              switched production to Sonnet, then fixed what it still got wrong (narrating its tool calls, listing
              every variant on a price question). The suite reached 97%.
            </p>
          </Section>

          <Section title="Grading the grader">
            <p>Several failures turned out to be the judge's fault, not Latch's:</p>
            <Bullets
              items={[
                'The judge only saw truncated tool results, so it flagged real catalog facts as invented. It now sees each tool result up to 20,000 characters.',
                'It flagged buying advice taken from the Learn pages as made up, because it had never seen them. It now gets the same Learn content Latch has.',
                'Two rubrics penalized correct replies. I rewrote them to grade the answer instead of a specific phrasing.',
              ]}
            />
            <p>An eval is only as good as its grader, and a failing case is a claim worth checking before acting on it.</p>
          </Section>

          <Section title="Voice">
            <p>
              Accuracy wasn't the whole job. Broad questions got answers that read like product pages: section
              headers, every spec field, 17-model lineups. I added a shared voice rubric (lead with what matters, take
              a position, no spec dumps or stock wrap-ups), and the score dropped to 79%. That was the point: the
              rubric made a real problem measurable.
            </p>
            <p>
              What fixed it wasn't what I expected. Character limits in the prompt didn't hold on Sonnet. Sentence
              budgets and short example replies did. The score came back to 91%, and to 93% after website replies
              switched to Markdown: a short take, then spec bullets.
            </p>
          </Section>

          <Section title="What I took away">
            <Bullets
              items={[
                <><strong className="text-gray-200">Run each case enough times.</strong> At 3 runs per case, the score moved by about five points between identical runs. Comparisons are only trustworthy at 5.</>,
                <><strong className="text-gray-200">Fix the tools before the prompt.</strong> The biggest single jump came from giving the model the backend's real enum values instead of asking it to behave.</>,
                <><strong className="text-gray-200">Evals don't belong in CI here.</strong> They cost money, results vary run to run, and the deploy role has no Bedrock access. I run them before any prompt or model change.</>,
                <><strong className="text-gray-200">A new rubric should make the score drop.</strong> If it doesn't, it isn't measuring anything you weren't already catching.</>,
              ]}
            />
          </Section>

          <FadeIn>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/BalisongFlippingCenter/BalisongFlippingCenterAIPython"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                View the code on GitHub
              </a>
              <Link
                to="/projects/balisong"
                className="px-5 py-2.5 border border-indigo-600 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 text-sm font-semibold rounded-lg transition-colors"
              >
                Back to Balisong Flipping Center
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
