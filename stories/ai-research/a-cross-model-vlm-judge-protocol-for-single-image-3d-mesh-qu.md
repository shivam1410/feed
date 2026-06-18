---
title: "A Cross-Model VLM-Judge Protocol for Single-Image 3D Mesh Quality (and Why Cheap Proxies Fall Short)"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18451"
authors: ["Ali Asaria, Tony Salomone, Deep Gandhi"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.18451v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18451v1 Announce Type: new Abstract: Single-image-to-3D generators are improving quickly, but there is no agreed, human-free way to tell whether one generated mesh is better than another. Practitioners commonly rely on cheap automatic proxies (render-space CLIP similarity and mesh geometry-validity statistics), yet how well these track perceived quality is unestablished. We make two contributions. First, we propose and validate a reproducible VLM-judge evaluation protocol: a fixed 24-view headless render rig, two independent vision-language judge families, and a mandatory position-bias correction that queries both presentation orders and keeps only order-consistent verdicts. The two judge families agree substantially with each other (Cohen's kappa = 0.66), well above the chance-agreement floor. Second, using this protocol as the reference, we show the cheap proxies do not substitute for it. Geometry validity is only a weak signal on average (because, as we show, it is bimodal) and stays below our pre-registered target, while render-CLIP is at chance. A learned Bradley-Terry head collapses onto a single manifoldness statistic (giving render-CLIP a negative weight) and matches geometry-only exactly, so learning the feature weights buys nothing. The proxy is also bimodal: it is significantly above chance on contrasts with visible geometric defects but at chance on ambiguous contrasts, consistent with geometry validity tracking the judge only when the defect is visually salient. We therefore recommend the VLM-judge protocol as a reliable, reproducible evaluator under the conditions tested (two feed-forward generators on Google Scanned Objects, with a face-drop degradation regime) and advise against geometry/CLIP proxies as optimization targets.
