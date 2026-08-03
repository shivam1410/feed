---
title: "Can Large Language Models Execute Parent Orders?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28410"
authors: ["Zane Shen", "Xinli Xu", "Guangyi Zhang", "Jialong Chen", "Jinsong Zhou", "Cong Chen", "Guibao Shen", "Dongyu Yan", "Luozhou Wang", "Zhen Yang"]
date: "2026-07-29T20:00:00.000Z"
score: 60
guid: "2607.28410"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28410.png"
generated: "2026-08-03T19:06:42+05:30"
---

Parent-order execution is a core problem in algorithmic trading, where the goal is to split a large order into smaller orders while reducing execution costs. Existing approaches either rely on pre-specified market assumptions that may not hold in practice, or require task-specific training that limits adaptability to new settings. To overcome these limitations, we present the first systematic study of large language models (LLMs) for parent-order execution. This extends the use of LLMs in finance from what to trade to how to execute. We propose PACE (Plan-Ahead Controlled Execution), a hierarchical framework that decomposes parent-order execution into long-horizon planning and short-horizon execution, requiring neither explicit market assumptions nor task-specific training. Experiments on Shenzhen Stock Exchange Level-1 data show that PACE outperforms TWAP, Almgren-Chriss, and learning-based baselines, exceeding the strongest baseline by 0.65 bps. Behavioral analysis reveals that LLMs make execution decisions differently from human investors: higher model confidence predicts better performance rather than worse returns, and the model trades earlier rather than procrastinating toward the deadline. These findings suggest that LLMs can complement human traders in execution decisions.
