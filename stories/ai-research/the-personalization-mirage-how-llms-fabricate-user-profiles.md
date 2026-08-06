---
title: "The Personalization Mirage: How LLMs Fabricate User Profiles, and Why Self-Monitoring Misleads"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.04570"
authors: ["Yushi Sun", "Yanjie Zhang", "Rui Sheng"]
date: "2026-08-04T20:00:00.000Z"
score: 75
guid: "2608.04570"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.04570.png"
generated: "2026-08-06T19:05:18+05:30"
---

Personalized LLMs systematically fabricate user attributes beyond available evidence, a phenomenon called over-inference. MirageBench evaluated 143,616 claims across 12 models from 7 families, finding every model over-infers 35–49% of attributes (mean 41.6%). A self-monitoring inversion paradox reveals models reporting lowest over-inference actually fabricate most (rank correlation −0.60). Over-inference ranges 27–59% depending on task. Within-model self-audit moderately works (AUROC 0.58–0.83), but self-reported confidence is misleading for model comparison, fundamentally challenging current personalization approaches.
