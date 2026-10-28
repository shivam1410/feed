---
title: "Beyond Update Counts: A Control Map for Evaluating Test-Time Model Updates"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36109"
authors: ["Zehao Zhao, Shangjian Yin, Rui Liu, Chongyang Bai, Mark Ibrahim, Kavosh Asadi, Yuchen Lu, Hang Cui, Hamed Firooz"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36109v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Test-time updating lets a language model change persistent state after training---such as model weights, adapter parameters, or a memory module---before or while answering queries. Existing evaluations often compare systems using update count or frequency and performance measured immediately afterward. These summaries omit what is updated, where, when, and in what order. The same total can therefore hide an important difference: one system may answer after one update while another answers after two. We introduce the Control Map, an evaluation framework that records the committed updates preceding each scored answer and separately evaluates behavioral changes, immediate learning (acquisition), later recall (retention), preservation of unrelated behavior (locality), and performance in new settings. We prove when counts alone determine final state and show, under stated assumptions, how differences between pre-answer histories limit differences in average scores. Using ControlMap, our experiments reveal three insights. First, update scheduling matters: at a 760M-parameter checkpoint, 24 schedules with the same update count yield 19.7%--34.2% accuracy. Second, learning an edit does not guarantee that it lasts or remains contained: all six selected CounterFact LoRA settings learn the new information, while ROME retains edits at all 13 operating points but fails locality at each. Third, no editor performs best consistently across models, benchmarks, and tests. Evaluations should therefore report update histories and assess acquisition, retention, and locality separately.
