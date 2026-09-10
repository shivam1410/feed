---
title: "XAI-Refine: An Automated Explanation-Knowledge Loop for Brain-Age Prediction"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09388"
authors: ["Yang Qiao, Junjie Wu, Deqiang Qiu, James J. Lah, Liang Zhao"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.09388v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09388v1 Announce Type: new Abstract: Brain-age prediction models are commonly evaluated by predictive accuracy, yet accurate predictions alone do not establish that a model relies on reproducible or neurobiologically supported mechanisms. Post-hoc explanation methods can expose these mechanisms, but existing workflows typically stop at diagnosis or require correction targets to be specified before model analysis. We propose XAI-Refine, an automated explanation-knowledge loop for brain-age prediction from resting-state functional connectivity. At each iteration, XAI-Refine consolidates complementary post-hoc analyses across repeated training runs into reliable, structured model explanations. It converts each reliable explanation into a neutral neurobiological question, retrieves and verifies relevant literature, and compiles the verified evidence into an admissible set in the same typed explanation space. The target for refinement is defined as the minimal projection of the current model explanation onto the admissible set induced by applicable verified knowledge. This revised explanation is then translated into a differentiable constraint while preserving the originating model variable, measurement operator, and applicable scope. Candidate updates are promoted only when multi-seed validation confirms target-directed explanatory movement, predictive performance remains within a prespecified guardrail, and non-target explanatory drift remains bounded. Experiments on functional-connectivity-based brain-age prediction evaluate predictive performance, explanation reliability, literature alignment, and target-specific model revision, illustrating a structured route from post-hoc analysis to evidence-guided model refinement.
