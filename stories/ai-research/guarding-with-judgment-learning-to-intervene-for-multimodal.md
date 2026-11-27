---
title: "Guarding with Judgment: Learning to Intervene for Multimodal Safety"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.28849"
authors: ["Jipei He", "Cheng Cheng", "Liuguo Wang", "Zihan Wen", "Changlin Yu", "Wentao Song", "Suyun Zhao"]
date: "2026-11-20T19:00:00.000Z"
score: 50
guid: "2611.28849"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.28849.png"
generated: "2026-11-27T19:03:37+05:30"
---

When visual context makes an ordinary request unsafe to answer as asked, a blanket refusal may leave the user's need unresolved. Choosing how to help requires distinguishing an established hazard from a condition that still needs verification, a distinction that binary safety labels leave unspecified. We formulate this decision through four actions: allow, warn, review, and refuse. To ground these decisions in verifiable evidence, we build a corpus of 20,126 training audits and the JudiBench benchmark, connecting each action to diagnostic judgments, source evidence, and controlled context changes. Our guard, JudiAct, separately states what the source establishes, what condition governs the help, and how the rules apply. It then checks these three brief review items against the original inputs to predict diagnostic labels and a handling action. Supervised training learns individual judgments while comparing label assignments across related cases. A second stage swaps one review item at a time, using the resulting audit feedback to refine review generation. On JudiBench, JudiAct improves request and answer Macro-F1 by more than 28 percentage points over its 4B backbone. Across nine public benchmarks, it outperforms state-of-the-art guards on the mean delivered-answer score in both pre-generation and post-generation settings, cutting MM-SafetyBench attack success from 40.78% to 25.30%.
