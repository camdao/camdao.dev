---
name: tech-writing
description: Plan, draft, and review technical blog posts for camdao.dev. Automatically coordinates planning -> drafting -> reviewing.
---

# Tech Writing Workflow

This skill helps you write high-quality technical blog posts for `camdao.dev`.

## Workflow Steps

1. **Planning Phase**:
   - Define target audience and core problem.
   - Outline structure, tradeoffs, and code/diagram needs.
   - Use `tech-planner` agent perspective.

2. **Drafting Phase**:
   - Write clean MDX with valid frontmatter.
   - Include clear code snippets, architectural trade-offs, and practical examples.
   - Use `tech-drafter` agent perspective.

3. **Review Phase**:
   - Check technical accuracy, clarity, and depth.
   - Verify code snippets and failure scenarios.
   - Use `tech-reviewer` agent perspective.

## Guidelines
- Write clear, practical, production-oriented tech content.
- Keep formatting clean with standard frontmatter (title, date, description, tags).
- **Tone & Style (Anti-AI Fluff):**
  - **No Emoji in Headings:** Absolutely avoid using emojis (e.g., 🎯, 🚀, 💡, 🏗️) in Markdown headings (`#`, `##`, `###`).
  - **Direct & Concise:** Avoid generic AI intros and conclusions (e.g., "Welcome to this guide", "In conclusion"). Jump straight to the technical content.
  - **Engineering Focus:** Highlight real-world gotchas, edge cases, and practical trade-offs over high-level marketing descriptions.
- **Fumadocs UI & Rich MDX Components:**
  - **Icons:** Prefer Lucide icons (via `lucide-react`) in `<Card icon={...}>` over raw emojis for visual elements.
  - **Grid & Navigation:** Use `<Cards>` & `<Card>` for learning objectives, module lists, and feature grids.
  - **Sequential Workflows:** Use `<Steps>` & `<Step>` for tutorials, step-by-step guides, and prerequisites.
  - **Alerts & Warnings:** Use `<Callout type="warn|info|error">` for critical notes (e.g., AWS cost warnings, safety checks).
  - **Multi-variant Options:** Use `<Tabs>` & `<Tab>` for multi-OS commands, multi-language code snippets, or alternative solutions.
  - **Diagrams:** Use native `mermaid` code blocks for architecture diagrams.
