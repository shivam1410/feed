---
title: "Zero Gap Is Not Restoration: Stratified Per-Question Probability Evaluation and Step-wise Mitigation of Benchmark Contamination"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.07341"
authors: ["Ruijie Hou", "Yueyang Jiao", "Zhao Wang", "Yingming Li"]
date: "2026-08-06T20:00:00.000Z"
score: 60
guid: "2608.07341"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.07341.png"
generated: "2026-08-10T19:05:52+05:30"
---

Test data from public benchmarks inevitably leaks into pretraining corpora, inflating evaluation scores once memorized. Contamination mitigation evaluation intervenes in the decoding process to suppress memorization and restore a contaminated model's genuine capability, but its prevailing metric, the G-AP (Gap of Aggregate Performance), is flawed. Discrete correct/incorrect readouts cannot characterize per-question performance, averaging before differencing lets over- and under-suppression cancel out, and uniform per-question weighting invites strategies to push solve probabilities onto the clean model's high-frequency values. We propose SA-PPG (Stratified Aggregate of Per-question Probability Gaps): estimate each question's solve probability by sampling, difference it against the clean model per question, and aggregate within groups defined by the clean model's solve probability. Existing mitigation strategies first estimate where contamination lies and then operate on the estimate, so they are only as correct as the estimate. RailCap instead judges contamination during generation: whenever a sample falls back onto the greedy trajectory, the next trajectory token is capped to the runner-up, accumulating suppression until the response distribution becomes sufficiently dispersed. Across multiple contaminated models and benchmarks, SA-PPG reveals that prior strategies' restoration is substantially overestimated, while RailCap attains the lowest SA-PPG.
