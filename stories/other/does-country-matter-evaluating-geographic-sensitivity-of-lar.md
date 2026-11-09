---
title: "Does Country Matter? Evaluating Geographic Sensitivity of Large Language Models in Zero-Shot Chronic Kidney Disease Screening"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08507"
authors: ["Sirajam Munira, Muhammad Ashad Kabir"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08507v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Large language models (LLMs) show strong zero-shot reasoning capabilities, yet their sensitivity to prompt context raises questions about reliability in deployment. This study investigates whether geographic context embedded in prompts influences LLM-based chronic kidney disease (CKD) screening, independent of any change in patient features. Using a community-based CKD dataset from Bangladesh (284 participants with 112 CKD and 172 non-CKD), we systematically varied the country attribute across 25 global contexts while holding all clinical inputs constant, and evaluated two open-weight LLMs (Qwen3 8B and Mistral 7B). Experiments were conducted on a common-correct subset of 156 participants for whom both models produced correct baseline predictions. Results show that non-CKD predictions were highly stable across geographic contexts, with both models maintaining consistent non-CKD predictions in nearly all settings. In contrast, CKD-positive predictions were considerably more sensitive. For Qwen3, CKD prediction dropped from a baseline of 65 to as low as 50 across country contexts, while Mistral showed smaller but non-negligible variation. Country contexts did not group according to known epidemiological or healthcare similarities; instead, groupings appear to reflect how country tokens are internally represented within each model. These findings demonstrate that geographic tokens can systematically shift clinical screening outcomes despite identical patient inputs, with implications for the deployment of LLM-based decision support in diverse healthcare settings.
