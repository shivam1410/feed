---
title: "To Add Is Machine, To Delete Is Human: Measuring and Mitigating Deletion Avoidance in LLM Code Editing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28887"
authors: ["Amir M. Ebrahimi", "Mohammed Mehedi Hasan", "Aaditya Bhatia", "Gopi Krishnan Rajbahadur", "Ahmed E. Hassan"]
date: "2026-07-29T20:00:00.000Z"
score: 70
guid: "2607.28887"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28887.png"
generated: "2026-08-05T20:00:21+05:30"
---

Large language models increasingly write and repair production code, yet evidence is mounting that their test-passing patches leave codebases harder to maintain. We identify one concrete source: deletion avoidance, the systematic tendency to retain code that an intended edit requires removing. Across the five leading models on the official SWE-bench Verified leaderboard, deletion recall against the developer patch reaches at most 71.7% even on tasks all five solve, and models reach the right file for over 92% of required deletions but cut the exact line in under 52% of cases. Instead, 29.0% of passing patches wrap the targeted code in a guard or fallback, a pattern we call Guard-and-Go. Such patches pass because the original tests rarely check removal: when we retrofit 34 Verified tasks with tests that fail if the targeted code remains, four frontier models spanning closed and open weights fall from 63.2% to 41.9%. Because real repairs mix removal with addition, we curate CanItDelete, a benchmark of 200 tasks mined from real commits whose entire required edit is deletion. Even with the addition work gone, the best model still fails one task in five, and smaller open models fall to 18.0%. We then ablate GPT-5.6 Sol under four cumulative prompts; success moves little until we supply the exact lines, which nearly eliminate incomplete deletion yet raise success only to 80.5% because the model then deletes beyond the spans or adds code instead. Finally, through a pilot study we show one potential fix: teaching deletion during post-training reduces deletion avoidance and improves broader code-editing performance, suggesting the behavior is undertrained rather than beyond reach.
