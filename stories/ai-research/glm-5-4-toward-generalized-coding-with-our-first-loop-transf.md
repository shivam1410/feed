---
title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Nov/23/glm-54/"
authors: []
date: "2026-11-23T23:40:49+00:00"
score: 70
guid: "https://simonwillison.net/2026/Nov/23/glm-54/"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Z.ai has released GLM-5.4, its first looped transformer. In this design, a group of weight-shared layers runs several times per pass, adding depth without extra parameters. The model is not open weights yet. Simon Willison got access by signing up for Z.ai's Coding Plan, since the regular API could not reach it, and built a small plugin for it. Thinking Machines' Inkling 2 Mini also uses this design.
