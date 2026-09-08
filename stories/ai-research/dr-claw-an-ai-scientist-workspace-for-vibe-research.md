---
title: "Dr. Claw: An AI Scientist Workspace for Vibe Research"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.00365"
authors: ["Dingjie Song", "Hanrong Zhang", "Dawei Liu", "Yixin Liu", "Zongxia Li", "Zhengqing Yuan", "Siqi Zhang", "Henry Peng Zou", "Zhiling Yan", "Yuxuan Zhang", "Yanfang Ye", "Philip S. Yu", "Lichao Sun"]
date: "2026-08-30T20:00:00.000Z"
score: 50
guid: "2609.00365"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.00365.png"
generated: "2026-09-08T19:05:47+05:30"
---

Command-line coding agents (e.g., Claude Code, Gemini CLI) can already read and write files and sustain long sessions, yet end-to-end research still fragments across chat tools, IDEs, terminals, and writing environments, and the decisions that make it auditable are rarely preserved. We present Dr. Claw, an open-source workspace that wraps existing coding-agent executors in a controllable and auditable human-in-the-loop workflow rather than introducing another autonomous agent. Persistent state objects, a reusable skill library, and multi-executor coordination link human decisions to AI execution, turning planning, execution, and writing into one traceable, recoverable loop. We demonstrate Dr. Claw through an interactive three-view scenario and a failure-recovery walkthrough, and evaluate it against a bare command-line agent sharing the same backend executor, so the comparison contrasts the whole orchestration layer (task graph, state objects, and skill library) with the agent it wraps. Holding the executor fixed, Dr. Claw scores higher on research completeness while persisting an auditable, recoverable process trail. Demo access: repository https://github.com/OpenLAIR/dr-claw, released under AGPL-3.0 with GPL-3.0 upstream components.
