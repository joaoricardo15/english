# English Course Project

## What This Is
A 10-week English course for a beginner Brazilian student (60yo). All materials, lesson plans, and a web app for interactive exercises are managed here.

## Project Structure
```
/English
├── CLAUDE.md              (this file - project instructions)
├── app/                   (GitHub Pages web app)
│   ├── index.html         (home/dashboard)
│   ├── css/
│   ├── js/
│   └── classes/           (one folder per class)
│       ├── class-01/
│       ├── class-02/
│       └── ...
├── plans/                 (lesson plans for the teacher)
│   ├── class-01.md
│   └── ...
└── notes/                 (class notes, progress, observations)
```

## Profiles

### Teacher
- Native Portuguese (Brazilian), fluent English, first-time English teacher
- Needs structured materials and guidance on pedagogy
- Classes are remote (video call)

### Student
- 60-year-old Brazilian woman, beginner level
- Knows isolated words but can't structure basic sentences
- **Key challenge:** memorizing vocabulary (retention)
- **Goal:** communicate in everyday situations
- **Daily life/interests:** breakfast rituals, biking, visiting family, gossiping, Netflix, personal training at home, cooking lunch, doing dishes by hand, home chores, weekend restaurant trips (beautiful views), supermarket, doctor visits

## Course Structure
- 10 classes, once a week, 60 minutes each (remote)
- Flipped classroom: async content sent at start of week, live class for practice
- Language gradient: heavy PT support in classes 1-3, medium 4-6, light 7-10

## Content Creation Guidelines

### Principles
1. **Less is more** — max 8-10 new vocabulary items per week
2. **Repetition is everything** — vocabulary from past weeks MUST reappear in new materials
3. **Fun first** — songs, videos, memes, relatable situations
4. **Her life** — all examples and scenarios come from the student's actual routines
5. **Chunks over rules** — teach "I'd like a coffee" not "conditional + infinitive"
6. **Portuguese as scaffolding** — heavy PT early, reduce gradually

### What to Create (formats I can produce well)
- **Interactive exercises** (HTML/JS): fill-in-the-blank, matching, multiple choice, drag-and-drop
- **Vocabulary pages** with images (use free image URLs), PT/EN, audio links (Forvo/Google TTS)
- **Dialogues/texts** formatted as bilingual readers
- **Lesson plans** (for the teacher) with timing and objectives
- **Embedded media** — YouTube videos, Spotify song links
- **Quizzes** with instant feedback
- **Progress dashboard** — track which classes/exercises are done (localStorage)

### What NOT to create
- Physical materials (flashcards, printed boards)
- Materials requiring special apps or purchases
- Long grammar explanations or rules
- Anything overwhelming or text-heavy

### Writing Style for Student Materials
- Short sentences (max 8 words in English examples)
- Large font, lots of white space
- One concept per screen/section
- Always include Portuguese translation for new words (classes 1-6)
- **Translations are hidden by default** — student taps to reveal (forces active recall)
- Use emojis and icons as visual anchors for vocabulary
- Celebratory feedback on exercises ("Great job! / Muito bem!")

### Tone
- Warm, encouraging, patient
- Never condescending — she's an adult learner
- Casual and fun, not academic
- Errors are fine and expected — the app should never feel punitive

## Web App (GitHub Pages)

### Tech Stack
- Vanilla HTML/CSS/JS (no frameworks — keep it simple and fast)
- Responsive (mobile-first — student will likely use phone/tablet)
- localStorage for progress tracking
- No backend, no dependencies, no build step

### Design Principles (MUST FOLLOW)

**Mobile-first, always:**
- Design for phone screen first, then scale up. Never the other way around.
- Vertical scrolling only — no horizontal swipe, no carousels, no tabs that hide content.
- Test mentally: "Does this work on a 375px wide screen?"

**Accessibility for non-tech-savvy users:**
- The student is 60yo and not familiar with digital tools. Everything must be intuitive without explanation.
- Large touch targets — buttons minimum 48px height, generous padding, easy to tap with a finger.
- Large readable text — body text minimum 16px, vocabulary/exercise text 18px+. Never small print.
- High contrast — clear text-to-background contrast. No light gray text on white.
- No jargon in UI — no "submit", "navigate", "toggle". Use plain words: "Check", "Next", "Back".

**Simplicity:**
- Minimal UI — one action per screen when possible.
- No hamburger menus, no hidden elements, no hover-dependent interactions.
- Clear feedback — after every user action (tap, submit), immediate and obvious visual + text feedback.
- Forgiving input — accept lowercase/uppercase, ignore trailing spaces, accept common typos where reasonable.

**Litmus test:** "Would a 60-year-old who mostly uses WhatsApp and Netflix understand this without instructions?" If not, simplify.

### Exercise Types to Implement
1. **Fill-in-the-blank** — type the missing word
2. **Multiple choice** — tap the correct answer
3. **Matching** — connect EN word to PT translation
4. **Ordering** — put words in the right order to form a sentence
5. **Listen & repeat** — embed audio, student practices (no recording needed)
6. **Mini quiz** — end-of-class review combining all types

## Class Themes (10 weeks)
1. "Good Morning!" — Breakfast routine, greetings, "I like..."
2. "What do you do?" — Daily routine, present simple
3. "I love this show!" — Netflix, opinions, likes/dislikes
4. "Let's go to the supermarket!" — Shopping, "I need...", "How much...?"
5. "A table for two, please!" — Restaurant, polite requests
6. "How are you feeling?" — Health, body, doctor visit
7. "My family is crazy!" — Family, describing people, gossiping
8. "Clean the house, then relax!" — Chores, sequencing words
9. "Let's go for a trip!" — Travel, plans, "going to"
10. "I can do this!" — Full review, autonomy plan, celebration

## Self-Study Tools to Introduce (one per class)
1. Anki (spaced repetition flashcards)
2. Google Translate (voice feature)
3. Netflix subtitle trick
4. Duolingo (5 min/day)
5. Post-its at home
6. YouTube channels for beginners
7. BBC 6-Minute English podcast
8. Changing phone language
9. Forvo (pronunciation)
10. Study plan for continuing alone

## Progress & Notes
After each class, save notes in /notes/ about:
- What worked well
- What the student struggled with
- Vocabulary she needs more repetition on
- Any adjustments for next week

## AI Assistant Rules (for Claude)

### Core Principles
- **Ask before acting** on anything irreversible or ambiguous — creating is fine, deleting/force-pushing requires confirmation
- **Prefer explicit over clever** — name things clearly, avoid abstractions, no "smart" shortcuts
- **One change, one purpose** — each commit does one logical thing; don't mix unrelated changes
- **Verify before reporting success** — open the app in browser, test interactions, check mobile layout before saying "done"

### Self-improving instructions
- Whenever a new rule, guideline, or preference emerges during an interaction, flag it and ask: "Should I save this to the project instructions for future sessions?"
- If yes, add it to the relevant section of this CLAUDE.md file and commit
- Only save patterns that should persist — not trivial one-off things

### Documentation discipline
- **Always review and update this CLAUDE.md** after making significant changes to the project (new features, new patterns, structural changes, design decisions)
- If a change makes something documented here inconsistent or outdated, fix the documentation in the same commit — don't wait to be asked
- When adding a new class, exercise type, or UI pattern: document it here
- When changing an existing pattern (e.g., how translations work): update the relevant section immediately
- Treat documentation and code as a single unit — they ship together, never out of sync

### Git & Commit Discipline
- Write clear, present-tense commit messages that explain the "why"
- One logical change per commit — don't bundle unrelated fixes
- Always create NEW commits (never amend) unless explicitly asked
- Never force-push to `main`
- Stage specific files (`git add <file>`) — never use `git add .` or `git add -A`
- Never commit sensitive data (API keys, tokens, passwords)
- After pushing, confirm the GitHub Actions deploy succeeded before reporting done

### Code Quality
- **No dead code** — don't comment out code "for later"; delete it (git has history)
- **No premature abstractions** — repeat code is fine until the third time; then extract
- **Test what you ship** — open the live page in browser after deploy, click through exercises
- **Mobile-first always** — check layout at 375px width before any other size
- **Accessibility is not optional** — follow the design principles section strictly

### Error Prevention
- Before modifying an existing file, always read it first
- Before creating a new pattern, check if a similar one already exists in the project
- If a change breaks something, fix it in the same session — don't leave broken state
- When unsure between two approaches, describe both briefly and ask

### Communication Style
- Be concise — short updates, no narration of internal thinking
- State what changed and what's next
- When presenting options, lead with a recommendation
- If blocked, say why and what's needed to unblock

### What Claude Should NOT Do (without asking)
- Delete files or git branches
- Force-push or rewrite git history
- Change the project structure or folder layout
- Modify deployment/CI configuration
- Add new dependencies or frameworks
- Make architectural decisions (new patterns, new libraries, restructuring)

### What Claude CAN Do Freely
- Create new class content (following existing patterns)
- Fix bugs and accessibility issues
- Improve existing CSS/JS within the established patterns
- Update documentation to match current state
- Commit and push content changes to main
- Open the app in browser for testing

### GitHub & Deployment
- GitHub account: **joaoricardo15**
- Email for commits: **joaoricardo15@hotmail.com**
- Use `gh` CLI (GitHub CLI) for all GitHub operations
- Auth method: OAuth via `gh auth login` (persists in macOS Keychain)
- Always set `git config user.email "joaoricardo15@hotmail.com"` on this repo
- Deploy: push to `main` triggers GitHub Actions → deploys `app/` to GitHub Pages
- Live URL: https://joaoricardo15.github.io/english/
