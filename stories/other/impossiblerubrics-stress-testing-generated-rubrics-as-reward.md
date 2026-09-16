---
title: "ImpossibleRubrics: Stress-Testing Generated Rubrics as Reward Signals"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.16816"
authors: ["Bowen Qin", "Yi Xie", "Yesheng Liu", "Xi Yang"]
date: "2026-09-14T20:00:00.000Z"
score: ""
guid: "2609.16816"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.16816.png"
generated: "2026-09-16T19:00:23+05:30"
---

Language model-generated rubrics are increasingly used as reward signals for rubric-based reinforcement learning, LLM-as-a-judge evaluation, and automated grading. Such rubrics are reliable only if they reward honest answers over adversarial answers optimized to exploit them. Yet their robustness to such optimization remains poorly understood. We isolate the hardest regime: impossible tasks, where the prompt pressures the model toward an unsupported conclusion, so the only honest response is to acknowledge the impossibility. We introduce ImpossibleRubrics, a benchmark of 169 impossible tasks spanning six impossibility categories, each paired with a verifiable oracle certificate specifying what an honest answer may and may not claim, together with 48 answerable controls. Rather than providing fixed rubrics, ImpossibleRubrics provides task environments and certificates, allowing rubrics to be generated downstream and then adversarially tested for whether they reward certificate-violating answers. Eleven generators are exploited 8--26% of the time on the unbiased 150-of-169 environment cut; on a deliberately selected stress cut the strongest generator we measured is still exploited 36% while a certificate-faithful rubric is exploited 0%, so what we measure is a rubric-quality gap, not task impossibility. One result runs against intuition. A single generic rubric ("be decisive, penalize hedging") used unchanged for every task is exploited 64% of the time, and seven of the eleven generators are exploited more often than that while writing a rubric tailored to each one. The tailored criteria appear to tell an attacker which claim to fabricate. The problem is not that rubrics are vague; it is that they are specific about the wrong things.
