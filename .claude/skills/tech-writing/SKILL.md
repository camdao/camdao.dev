---
name: tech-writing
description: Plan, draft, and review technical blog posts for camdao.dev. Automatically coordinates planning -> drafting -> reviewing.
---

# Tech Writing Workflow

This skill helps you plan, draft, review, and polish high-quality technical blog posts for `camdao.dev`.

## Workflow Modes & Steps

### 1. Polish & Humanize Mode ("Sửa lại các câu từ cho tự nhiên hơn" / Refine Tone)
Khi nhận được yêu cầu trau chuốt, viết lại hoặc sửa câu từ cho tự nhiên:
- **Tự nhiên & Thực chiến (Engineering Natural Flow):** Viết theo giọng văn của kỹ sư thực tế chia sẻ kinh nghiệm, phân tích vấn đề (retrospective), tránh giọng văn dịch máy (machine translation), sáo rỗng hoặc đậm chất AI template.
- **Mạch lạc & Chặt chẽ:** Câu văn gãy gọn, có chủ ngữ - vị ngữ rõ ràng, nối ý mượt mà giữa các đoạn bằng logic kỹ thuật thay vì các từ nối khuôn mẫu.
- **Thuật ngữ kỹ thuật chuẩn xác:** Giữ nguyên các thuật ngữ kỹ thuật phổ biến (e.g., *Race Condition*, *Persistence Context*, *In-Memory*, *Dirty Checking*, *Trade-off*, *Over-fetching*, *Projection*) một cách tự nhiên trong ngữ cảnh tiếng Việt.
- **Loại bỏ AI Fluff:** Cắt bỏ các câu rào đón thừa thãi, phần chào đón/kết luận chung chung sáo rỗng. Đi thẳng vào cốt lõi kỹ thuật và bài học thực tế.

### 2. Full Creation Pipeline (Plan -> Draft -> Review)

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
- **Tone & Style (Anti-AI Fluff & Natural Vietnamese):**
  - **No Emoji in Headings:** Absolutely avoid using emojis (e.g., 🎯, 🚀, 💡, 🏗️) in Markdown headings (`#`, `##`, `###`).
  - **Direct & Concise:** Avoid generic AI intros and conclusions (e.g., "Welcome to this guide", "In conclusion"). Jump straight to the technical content.
  - **Engineering Focus:** Highlight real-world gotchas, edge cases, and practical trade-offs over high-level marketing descriptions.
  - **Natural Phrasing:** Diễn đạt tự nhiên, tự tin, mạch lạc theo phong cách technical blog chất lượng cao.
- **Fumadocs UI & Rich MDX Components:**
  - **Icons:** Prefer Lucide icons (via `lucide-react`) in `<Card icon={...}>` over raw emojis for visual elements.
  - **Grid & Navigation:** Use `<Cards>` & `<Card>` for learning objectives, module lists, and feature grids.
  - **Sequential Workflows:** Use `<Steps>` & `<Step>` for tutorials, step-by-step guides, and prerequisites.
  - **Alerts & Warnings:** Use `<Callout type="warn|info|error">` for critical notes (e.g., AWS cost warnings, safety checks).
  - **Multi-variant Options:** Use `<Tabs>` & `<Tab>` for multi-OS commands, multi-language code snippets, or alternative solutions.
  - **Diagrams:** Use native `mermaid` code blocks for architecture diagrams.
