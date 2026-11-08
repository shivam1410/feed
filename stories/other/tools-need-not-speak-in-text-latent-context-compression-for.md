---
title: "Tools Need Not Speak in Text: Latent Context Compression for Agents"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.06500"
authors: ["Yuetong Liu", "Zhehao Zhou", "Yitong Zhang", "Haorui Chen", "Jia Li"]
date: "2026-11-03T19:00:00.000Z"
score: ""
guid: "2611.06500"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.06500.png"
generated: "2026-11-08T21:41:26+05:30"
---

Large language model (LLM) agents typically append raw tool outputs to their context. Over multi-step interactions, long and noisy observations incur substantial context overhead and dilute the agent's attention to task-relevant information. Existing token pruning and summarization methods remain constrained by discrete text representations, limiting the achievable compression ratios.
  In this work, we challenge the prevailing assumption that agents must consume tool observations as explicit text tokens. To this end, we propose Coca-Cola, a continuous latent context compression model for LLM agents. Coca-Cola compresses tool observations into latent tokens and embeds them into the input embedding space of the agent. We further introduce Action-Preserving Training, which aligns the agent's next-action distributions under full and compressed observations. This trains the compression model to learn action-sufficient latent tokens that retain decision-critical information. Experiments with web-search agents on four QA benchmarks and two model families show that Coca-Cola reduces the agent's token consumption by 70.01%-89.24% and end-to-end runtime by 24.45%-55.97%, while consistently improving task performance. These results suggest that Coca-Cola offers a promising approach for context compression in agents. Our code is available at https://github.com/THU-Agent/Coca-cola.
