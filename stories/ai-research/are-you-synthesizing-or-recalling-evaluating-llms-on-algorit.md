---
title: "Are you Synthesizing or Recalling? Evaluating LLMs on Algorithmic Code Retrieval"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02438"
authors: ["Nickil Maveli, Antonio Vergari, Shay B. Cohen"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.02438v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Large language models (LLMs) have demonstrated strong performance in code generation, where success depends on both recalling relevant algorithmic knowledge and reasoning about how to apply it. However, existing LLM pipelines are opaque, with no explicit separation between these two components. We argue that for well-known algorithms whose canonical implementations are widely accessible in pretraining corpora, code generation is better measured as \textit{parametric code retrieval}: reproducing a named algorithm from internalised knowledge rather than synthesizing a novel one. We introduce AlgoREval, a benchmark of 599 problems spanning classical 77 algorithms across 14 domains, 7 programming languages, and 4 graph-input representations to evaluate this capability in isolation, and assess 15 models (7B--34B parameters) in a zero-shot setting. We find substantial variation in retrieval accuracy across languages and input representations, even for widely documented algorithms and show that prompt augmentation with retrieved code snippets or structured algorithmic hints improve accuracy on complex algorithms, while SFT achieves broader language gains and GRPO achieves larger per-language gains on specific languages. Together, our results establish parametric code retrieval as a distinct, measurable capability and caution against deploying AI-generated algorithmic code without systematic validation.\footnote{Code and dataset are available at https://github.com/Nickil21/AlgoREval
