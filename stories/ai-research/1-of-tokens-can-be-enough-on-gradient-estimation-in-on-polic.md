---
title: "1% of Tokens Can Be Enough: On Gradient Estimation in On-Policy Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.24432"
authors: ["Huanxin Sheng", "Zhiling Ye", "Haonan Wang", "Jian Wang", "Jinjie Gu", "Jian Kang"]
date: "2026-09-20T20:00:00.000Z"
score: 50
guid: "2609.24432"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.24432.png"
generated: "2026-09-23T19:07:00+05:30"
---

Sparse on-policy distillation (OPD) allocates teacher supervision to a small subset of tokens in student-generated trajectories. However, useful teacher guidance can yield a noisy update when its gradient is estimated from a sampled next token. We study this estimation problem at a fixed prefix in information geometry and propose an information-efficiency ratio (IER) based on a signal-to-noise decomposition. IER characterizes relative gradient estimation error under an optimal scalar baseline. A candidate-set approximation enables token selection based on IER and its combination with existing usefulness scores, while retaining the sampled reverse-KL training objective. On mathematical and medical reasoning tasks, adding IER improves existing selectors in multiple settings, with sparse configurations matching or exceeding full OPD without token selection at small token budgets of 0.1\%--1\%. These results support accounting for both usefulness and gradient-estimation reliability when allocating sparse supervision. Our code is available at https://github.com/BruceSheng1202/IER-OPD.
