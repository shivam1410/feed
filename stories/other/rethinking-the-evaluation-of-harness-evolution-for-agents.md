---
title: "Rethinking the Evaluation of Harness Evolution for Agents"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.12227"
authors: ["Yike Wang", "Huaisheng Zhu", "Zhengyu Hu", "Yige Yuan", "Zhengyu Chen", "Shakti Senthil", "Hannaneh Hajishirzi", "Yulia Tsvetkov", "Pradeep Dasigi", "Teng Xiao"]
date: "2026-07-13T20:00:00.000Z"
score: ""
guid: "2607.12227"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.12227.png"
generated: "2026-07-18T21:58:10+05:30"
---

We revisit the evaluation of automatic harness evolution for LLM agents. Existing harness evolution methods use unit test cases to search for harness configurations and then report final performance on the same public benchmark. This protocol raises two fundamental concerns. First, harness evolution is itself an iterative search procedure that repeatedly evaluates and revises candidate harnesses using task feedback. As in agentic test-time scaling, it should therefore be compared with simple task-level search baselines under matched feedback and inference budgets to determine whether its gains arise from improved harness design or from additional search alone. Second, because the search and the final evaluation share the same benchmark, the reported gains risk overfitting to that specific task set. To address these concerns, we conduct an extensive evaluation comparing harness evolution with simple test-time scaling and discovery baselines under comparable feedback and inference budgets, and also evaluate evolved harnesses on held-out tasks to assess whether the discovered improvements generalize. Experiments on Terminal-Bench 2.1 with GPT-5.4 and Claude Opus 4.6 show that automatic harness evolution does not consistently outperform simple test-time scaling methods and exhibits limited generalization. Our results raise important questions about the effectiveness of automatic harness evolution and highlight the need for fairer evaluation protocols and benchmarks for automatic harness design. Our code is available at https://github.com/rethinking-harness-evolution.
