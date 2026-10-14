---
title: "Beyond Prompt Count: How Data Shapes Transfer in On-Policy Distillation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37377"
authors: ["Jiaxuan Wang", "Jiafei Lyu", "Yuchen Cai", "Siye Wu", "Pengyuan Wang", "Jiashun Liu", "Xiang Cheng", "Kai Yang", "Yangkun Chen", "Saiyong Yang", "Lan-Zhe Guo"]
date: "2026-09-28T20:00:00.000Z"
score: ""
guid: "2609.37377"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37377.png"
generated: "2026-10-14T19:00:21+05:30"
---

On-policy distillation (OPD) trains students using teacher feedback on their own sampled responses, yet how prompt choice shapes transfer across teacher-student pairs remains poorly understood. We systematically study prompt quantity, source, and selection across RL- and SFT-continuation pairs and cross-model settings. We find that OPD can be highly prompt-efficient: a few prompts can approach large-pool performance, with four DAPO prompts matching the observed mathematics score of 3,840 DeepMath prompts. However, prompt utility is relational rather than intrinsic: changing only the teacher can reverse the relative effectiveness of mathematics and code prompts. To characterize these transfer differences, we analyze parameter and functional changes across prompt supports and model pairs. Functional alignment with the teacher varies across supports and target tasks; in continuation pairs, teacher-aligned prediction changes can coexist with weak parameter alignment. Continued OPD on effective supports can restore performance after unfavorable transfer. Finally, targeted selection does not consistently outperform uniform random sampling, and filtering out a source that performs poorly alone yields no consistent gain across three paired support draws. Overall, our results distinguish prompt efficiency from prompt interchangeability and show that effective data choice depends on the teacher-student pair and target capability, with random sampling providing a competitive baseline in the studied settings.
