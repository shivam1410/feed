---
title: "Can Computation from Earlier Problems Help LLMs Solve New Ones?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.39394"
authors: ["Jipei He", "Wenhui Tan", "Xiaoyi Yu", "Enver Sangineto", "Fiorenzo Parascandolo", "Rita Cucchiara", "Ruihua Song"]
date: "2026-09-29T20:00:00.000Z"
score: 65
guid: "2609.39394"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.39394.png"
generated: "2026-10-05T19:10:08+05:30"
---

Large language models often solve independent problems in the same conversation. Can computation from earlier problems help them solve new ones? To answer this question, we first conduct preliminary experiments showing that retained history can raise or lower later-turn accuracy, even within the same domain. To understand these effects, we use controlled replay to isolate internal state changes specific to each problem-history pairing. Across different histories, these changes preserve similar relationships among current problems. To improve reasoning under retained history, we introduce STAIR (Stale-Token Attention for Inter-query Reuse). STAIR captures keys and values from earlier response generation in a fixed bank. It learns to redirect current queries when they read this bank during prompt processing. The base model remains frozen; only 12,288 parameters are trained. Across three Qwen models and four benchmarks, STAIR improves average later-turn accuracy by up to 11.67 percentage points over the unmodified model with history.
