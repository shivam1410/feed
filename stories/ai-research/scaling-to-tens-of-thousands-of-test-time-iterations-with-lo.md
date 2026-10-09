---
title: "Scaling to Tens of Thousands of Test-Time Iterations with Loop-Native Attention Residuals"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.11570"
authors: ["Pengxiang Li", "Dilxat Muhtar", "Di He", "Guinan Su", "Lu Yin", "Shiwei Liu"]
date: "2026-10-07T20:00:00.000Z"
score: 81
guid: "2610.11570"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.11570.png"
generated: "2026-10-10T00:52:03+05:30"
---

InfiLoop is a residual connection for looped Transformers that prevents errors from compounding over many iterations. A 7 million parameter model achieved 97.9 percent accuracy on Sudoku-Extreme and kept improving beyond 20,000 reasoning steps by using content-based weighting to decide which past states to preserve. This shows that architectural depth actually helps when you can manage recurrent errors properly.
