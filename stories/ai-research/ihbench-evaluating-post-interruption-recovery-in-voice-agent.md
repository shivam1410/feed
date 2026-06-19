---
title: "IHBench: Evaluating Post-Interruption Recovery in Voice Agents with Structured Workflows"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19595"
authors: ["Ahmad Salimi, Wentao Ma, Yuzhi Tang, Dongming Shen, Mu Li, Alex Smola"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.19595v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19595v1 Announce Type: new Abstract: Voice agents deployed in structured workflows (customer service, healthcare scheduling, account management) must handle frequent user interruptions while maintaining progress through multi-step procedures. Existing benchmarks for speech-capable models focus on the timing of interruptions: barge-in detection, endpointing, and turn-taking dynamics. They leave unmeasured what happens after the interruption: does the agent resume the workflow at the correct step? Does it address the user's interjection? Does it avoid re-delivering content the user already heard? We introduce IHBench (Interruption Handling Benchmark), a benchmark that evaluates post-interruption recovery in voice agents executing state-machine-driven workflows across 10 enterprise domains. Six interruption types are injected at controlled points mid-utterance, with per-interruption evaluation rubrics generated alongside the data. Each interruption is scored on two axes: task fulfillment and recovery quality. We evaluate 27 audio-language model configurations from OpenAI, Google, and the open-weight community. Models vary widely, and recovery quality depends strongly on the interruption type. Across our experiments, closed-weight models are consistently more robust to interruptions than open-weight ones: they win far more often on task fulfillment, degrade roughly 3.3x more slowly as conversations grow longer, and show no audio-versus-text modality gap, whereas the open-weight models lose ground on all three. A human study validates the LLM judge against human annotators, and a cross-benchmark analysis against AudioMultiChallenge indicates that recovery quality is a largely distinct capability axis.
