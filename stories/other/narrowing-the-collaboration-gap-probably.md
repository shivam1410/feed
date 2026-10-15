---
title: "Narrowing the Collaboration Gap, Probably"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19215"
authors: ["Mirah Shi, Marcel Hussing, Ira Globus-Harris, Natalie Collina, Aaron Roth, Surbhi Goel"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19215v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Large language models are increasingly deployed as teams of agents that hold different private information about a shared task. How should such agents concisely communicate in a way that promotes aggregation of decision-relevant information? Communicating only proposed actions can discard decision-relevant uncertainty: two agents may prefer the same action for different reasons. We study an alternative interface in which agents communicate calibrated beliefs over actions. We first analyze a simple synthetic setting that captures the structure of multi-round reasoning under partial information. In this setting, we show theoretically and empirically that communicating unbiased probabilities can be strictly more powerful than communicating actions. We then test the same principle in a collaborative maze-solving task with trained transformers and pretrained LLM agents. Our results demonstrate that probability communication outperforms action communication when the exchanged predictions preserve calibrated uncertainty. When communicated probabilities are biased, we show that the benefits of probability communication can disappear. We give a post-hoc conversational calibration intervention that consistently improves decision-making by correcting these biases both in a toy transformer setting and when pretrained LLMs use the corrections in context. These results suggest that probabilistic communication is useful for multi-agent collaboration not merely because it transmits more information, but because calibrated uncertainty gives other agents a reliable object to update on.
