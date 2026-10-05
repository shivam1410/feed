---
title: "PowerBench: Measuring Language Model Bias in Power-shifting Requests"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02303"
authors: ["Nicolas Martorell, Wendy Brau, Gonzalo A. Heredia, Tom\\'as Pablo Korenblit, Gaspar Labasti\\'e, Tom\\'as Gimenez Molina"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.02303v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Language models increasingly assist people with power-related requests, so systematic differences in whom they help could shift the distribution of power at scale, or be exploited by users who learn which identities are refused less. We introduce PowerBench, an evaluation of power-shifting requests that distinguishes self-empowerment, disempowerment, and power grabbing, plus a control of refusal-inducing requests that shift no power. We build, curate, and open-source a dataset of such requests varying the power domain, the context, the scale of the affected party, and the prior power standing of the user, and evaluate 24 models (12 from US and 12 from Chinese developers) under three experimental conditions: reciprocal nationalities of user and affected party, an AI agent as the user, and 8 request languages. Models refuse power grabbing more than disempowerment, and disempowerment more than self-empowerment. Refusal of power grabbing rises with the scale of the affected party, from an individual to a society. Models are biased toward helping others take power from the US and against helping US users take power from others, but favor the US when it gains power and nobody loses it. When the user is an AI agent, refusal of power-shifting requests increases, especially in power grabbing against an individual. Finally, language biases refusal, but in model-specific ways that largely cancel on average. We release PowerBench to make these asymmetries measurable in current and future models.
