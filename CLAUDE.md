# English Course Project

## What This Is
A 10-week English course for a beginner Brazilian student (60yo). All materials, lesson plans, and a web app for interactive exercises are managed here.

## Project Structure
```
/English
├── CLAUDE.md              (this file - project instructions)
├── package.json           (dev server config)
├── .gitignore             (excludes node_modules/)
├── scripts/
│   └── screenshot.py      (browser window capture utility)
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

### Class Schedule (date-gated)
Each class unlocks only when: (1) previous class is completed AND (2) the class week has started.

| Class | Available from (Friday) |
|-------|------------------------|
| 1 | May 30, 2026 |
| 2 | Jun 6, 2026 |
| 3 | Jun 13, 2026 |
| 4 | Jun 20, 2026 |
| 5 | Jun 27, 2026 |
| 6 | Jul 4, 2026 |
| 7 | Jul 11, 2026 |
| 8 | Jul 18, 2026 |
| 9 | Jul 25, 2026 |
| 10 | Aug 1, 2026 |

Dates are defined in `js/storage.js` → `CLASS_SCHEDULE` object.
Locked classes show a toast message when tapped explaining why they're locked.

## Content Creation Guidelines

### Principles
1. **Less is more** — max 8-10 new vocabulary items per week
2. **Repetition is everything** — vocabulary from past weeks MUST reappear in new materials
3. **Fun first** — songs, videos, memes, relatable situations
4. **Her life** — all examples and scenarios come from the student's actual routines
5. **Chunks over rules** — teach "I'd like a coffee" not "conditional + infinitive"
6. **Portuguese as scaffolding** — heavy PT early, reduce gradually

### Lesson Structure Rules
Each class page must follow this structure (in order):

1. **Vocabulary section** (8-10 words, tap-to-reveal translation)
2. **Micro-dialogue 1** (2-3 exchanges, practical scenario, tap-to-reveal translation)
3. **Exercises block 1** — Receptive (3-4 exercises: matching, multiple choice, word-bank fill-in)
4. **Short reading text** (40-60 words max, bilingual, about the student's daily life using the vocabulary)
5. **Micro-dialogue 2** (different scenario with same vocabulary, slightly harder)
6. **Exercises block 2** — Productive (3-4 exercises: free-fill-in-the-blank, translate short sentences, reorder words)
7. **Fun material** (song, video, optional challenge)
8. **Self-study tip** (one tool or method)

Total: ~15-18 exercises per class (split into 2 blocks of ~7-9)

### Exercise Types Available
1. **Multiple choice** — tap the correct answer (EN→PT and PT→EN)
2. **Matching** — connect word to translation (dropdown selects)
3. **Fill-in-the-blank (typing)** — type the missing word
4. **Word bank** — tap the correct word from options (no typing required)
5. **Word ordering** — tap words in correct order to build a sentence
6. **Listen & choose** — hear pronunciation via 🔊, pick the matching written word/sentence
7. **True/False** — based on reading text comprehension
8. **Translate sentence (typing)** — type full short sentence translation

Mix at least 5 different types per class. Focus on repetition: the same word/phrase should appear across different exercise formats.

### Exercise Design Rules
- **Scaffolding order:** Receptive first (recognition) → Productive second (recall/construction)
- **Bidirectional practice:** Always include both EN→PT and PT→EN exercises
- **Word bank for beginners:** In classes 1-4, fill-in-the-blank exercises should offer a word bank (tappable options) to reduce spelling burden
- **Max 2 new grammar concepts per class** — teach through pattern examples, never through explicit rules
- **Each new word must appear in at least 3 different exercises** within the same class
- **Comprehension before production:** Student reads/understands dialogues before constructing sentences
- **40-word max chunks:** Break any reading text into short paragraphs with visual breaks
- **No exercise should require more than 8 words as answer** — keep production tasks short

### Dialogue Rules
- **2-3 exchanges max per dialogue** (micro-dialogues, not long conversations)
- **Two dialogues per class** showing different scenarios with the same vocabulary
- **Always use family character names** (see Characters section above)
- **Each dialogue models one practical situation** the student might encounter
- **Comprehension check after each dialogue** (1 multiple-choice question about what happened)

### Repetition Strategy
- Every class reviews at least 5 words from previous weeks
- Core verbs (like, have, go, want, need, feel) appear in EVERY class after introduction
- Same sentence structures repeat in new contexts across classes
- Exercises block 2 always includes 1-2 review items from past classes
- A word is considered "learned" after 6+ correct exposures across different sessions

### What to Create (formats I can produce well)
- **Interactive exercises** (HTML/JS): fill-in-the-blank, matching, multiple choice, word bank, word ordering, listen-and-choose
- **Vocabulary pages** with pronunciation (Web Speech API), PT/EN, tap-to-reveal
- **Dialogues/texts** formatted as bilingual readers with audio buttons
- **Lesson plans** (for the teacher) with timing and objectives
- **Embedded media** — YouTube videos (embedded iframes), Spotify song links
- **Quizzes** with instant feedback
- **Progress dashboard** — track which classes/exercises are done (localStorage)

### YouTube Video Rules (MUST FOLLOW)
- **Always verify before adding:** Before embedding any YouTube video, verify it is available and embeddable using the oEmbed API:
  ```bash
  curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"
  ```
  If it returns "Not Found" or an error, the video is unavailable or not embeddable — do NOT use it.
- **Always embed as iframe** — never use external links (they break, get blocked, or confuse the student):
  ```html
  <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Video title"></iframe>
  </div>
  ```
- **Verify the video content matches** — check the oEmbed response title to confirm the video is what you expect (correct topic, language, etc.)
- **Prefer established educational channels** — The Singing Walrus, Super Simple Songs, English with Lucy, BBC Learning English, etc.

### Pronunciation System
- Uses the **Web Speech API** (SpeechSynthesis) — browser-built-in, zero dependencies, works offline
- Module: `js/pronunciation.js` — loaded in every class page
- **How to add pronunciation:** Add `data-pronounce="text to speak"` attribute to any clickable element
- **Audio button pattern:**
  ```html
  <button class="audio-btn" data-pronounce="Good morning" aria-label="Listen">🔊</button>
  ```
- **Every vocabulary word** must have an audio button
- **Every dialogue line** must have an audio button
- **Every reading text sentence** must have an audio button
- Speech rate is set to 0.8 (slower for learners). Add `data-slow` attribute for extra-slow (0.55 rate)
- Works on iOS Safari, Android Chrome, all desktop browsers — requires user tap (which is the intended UX)

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
- **Every piece of text must have a translation** — section headers use "English / Portugues" format, exercise prompts include PT translation after a "/", dialogues/reading use tap-to-reveal, feedback messages are bilingual
- Use emojis and icons as visual anchors for vocabulary
- Celebratory feedback on exercises ("Great job! / Muito bem!")

### Tone
- Warm, encouraging, patient
- Never condescending — she's an adult learner
- Casual and fun, not academic
- Errors are fine and expected — the app should never feel punitive

### Characters for Dialogues (real family names)
Use these names instead of generic characters:
- **Little girl:** Blue
- **Boys:** Lazaro, Joao, Manoel
- **Men:** Nelson, Osni
- **Women:** Cleci, Marina, Vanessa

## Web App (GitHub Pages)

### Tech Stack
- Vanilla HTML/CSS/JS (no frameworks — keep it simple and fast)
- Responsive (mobile-first — student will likely use phone/tablet)
- localStorage for progress tracking and student data
- No backend, no runtime dependencies, no build step
- Dev server: `live-server` for auto-reload during development (devDependency only)

### Dev Server & Visual Verification

**Setup:**
```bash
npm install          # installs live-server (one-time)
npm run dev:open     # starts server + opens browser
npm run dev          # starts server without opening browser
```

**Port:** `8080` (configured in `package.json` → `config.port`)
**URL:** http://127.0.0.1:8080

**MANDATORY: Visual verification after layout/CSS changes.**
After any change to CSS, HTML structure, or layout, you MUST verify the result visually:

1. Ensure the dev server is running (`npm run dev`)
2. Ensure the browser has the page open at http://127.0.0.1:8080 (or the specific class page)
3. Take a screenshot of the browser window (NOT the full screen):
   ```bash
   python3 scripts/screenshot.py /tmp/check.png
   ```
4. Read the screenshot file to verify the layout looks correct
5. If you cannot capture the screenshot (permissions), ask the user to open the browser at the dev server URL so you can capture it

Never report a layout change as "done" without visually confirming the result. If screenshot capture fails entirely, explicitly tell the user you could not verify and ask them to check.

**Layout Checklist (verify BEFORE reporting done):**
After taking a screenshot, check for these common layout flaws:
1. **Alignment** — Are all items in a row/column properly aligned? No accidental centering or spreading when items should be left-aligned (or vice versa).
2. **Spacing** — Are gaps consistent between sibling elements? No unexpected large gaps or cramped items.
3. **Overflow** — Do any elements overflow their container or get clipped? Check especially on narrow widths.
4. **Flex/grid conflicts** — When adding new elements to an existing flex container, verify that existing `justify-content`, `align-items`, or `gap` rules still produce the intended layout with the new child count.
5. **Touch targets** — Are all interactive elements at least 48px tall/wide with enough spacing to avoid mis-taps?
6. **Text truncation** — Is any text cut off or wrapped awkwardly?

If any of these are off, fix them BEFORE reporting the feature as done. A feature with broken layout is not complete.

### Storage System (localStorage)
- **Single key:** `english-course-data`
- **Schema:** `{ student: { name }, progress: { "class-01": { ex1: true, ... } }, completedClasses: [1, 2] }`
- **Module:** `js/storage.js` — all localStorage access goes through this file
- **First visit:** Welcome overlay captures student name
- **Exercise progress:** Each correct answer is saved; exercises unlock sequentially
- **Class completion:** When all exercises in a class are done, class is marked complete and next class unlocks
- **Personalization:** Dashboard shows "Hello, [name]!" after first visit

### Exercise Pattern (for new class pages)
Every class page must:
1. Add `data-class-id="class-XX"` to the `<body>` tag
2. Add `data-exercise="exN"` to each exercise `<div>`
3. Load `storage.js` before `exercises.js`
4. Call `initExerciseLocking()` on DOMContentLoaded
5. For matching exercises: manually call `onExerciseCorrect()` in the success handler

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
