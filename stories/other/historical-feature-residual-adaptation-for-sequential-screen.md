---
title: "Historical-Feature Residual Adaptation for Sequential Screening"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19315"
authors: ["Yixiang Hong, Yuchen Zhang"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19315v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Sequential screening policies must use acquired feedback effectively under a fixed experiment budget. We study acquisition-time residual adaptation: a small ranking correction built from fixed historical features and anchored to base scores recorded before feedback is revealed. The interface accepts a history-conditioned scorer and a candidate feature table; its primary instantiation augments AssayFormer's ten-dimensional representation with 64 historical directions while retaining the pretrained model. In retrospective evaluation on 20 official-test screens from 15 recorded sources, a comparison fixed before target-outcome access increased source-macro fraction of hits recovered from 22.58% to 28.61%, exceeding all six prespecified comparators. A same-feature ordinary ranking head achieved 25.73%. Supplementary strong logistic, rank-fusion, and unprojected controls achieved 26.42%, 26.02%, and 26.78%, respectively. A separate model-independent pilot on 13 reused development screens reconstructs the features without AssayFormer assets. Across three seeds, residual adaptation improves random-forest hit recovery from 28.87% to 31.27%, while logistic recovery changes from 30.22% to 29.78%. The results show effective pretrained-policy adaptation and useful transfer to an independent nonlinear base, with gains that depend on the base model.
