---
title: "LLMs program using Reusable and Composable Abstract Representations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19238"
authors: ["Casper L. Christensen, Kyle J. Ray, Dmitry Manning-Coe, Adam Shai, Paul Riechers"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19238v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

When writing code, the same computation can be expressed in different programming languages and through different implementation strategies. We show that the activations of LLMs capture this shared structure in reusable and composable abstract representations when they generate code. These representations emerge in the middle layers, are reusable across programming languages, and afford the model an impressive amount of generalization ability when generating code under various interventions. Using activation steering, we show that function, programming language, and implementation strategy can be independently manipulated. The independent interventions on language and function can be flexibly composed to control code generation, even in cases when the prompt contains no information about language and function. We additionally find that finetuning on examples of arbitrarily defined functions in one programming language transfers to other languages, consistent with the models reusing abstract features of code generation that are shared across different examples. Finally, to study how such abstract representations come to be, we implement a minimal model of shared, reusable, and composable structure in a synthetic setting, and show that transformers trained on such data learn representations that reuse these parts flexibly across contexts.
