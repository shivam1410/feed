---
title: "SeerGuard: A Safety Framework for Mobile GUI Agents via World Model Prediction"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15550"
authors: ["Xue Yu", "Bo Yuan", "Pengshuai Yang", "Kailin Zhao", "Hong Hu", "Junlan Feng"]
date: "2026-07-16T20:00:00.000Z"
score: ""
guid: "2607.15550"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15550.png"
generated: "2026-07-23T04:03:36+05:30"
---

Mobile graphical user interface (GUI) agents have demonstrated remarkable capabilities in automating complex tasks, yet they introduce critical safety risks where a single erroneous action can lead to irreversible consequences. Existing safety mechanisms are primarily reactive, lacking the ability to assess risks before execution. In this paper, we introduce SeerGuard, a consequence-aware safety framework designed to mitigate these risks through pre-execution instruction-level screening and action-level risk assessment. Specifically, the action-level assessment analyzes agent-proposed actions within current GUI states, anticipating likely outcomes to identify risks before they are executed. To enable these capabilities, we construct a unified safety-augmented world model (SAWM) via multi-task learning, integrating semantic next-state prediction with safety risk assessment. Extensive experiments demonstrate that SeerGuard generalizes effectively across diverse mobile GUI agents. On Qwen3-VL-8B-Instruct, it increases the safety-utility score from 0.191 to 0.596 at ω=0.8 and reduces the risk-cost score from 0.347 to 0.130 at α=0.8. Further analyses on our SAWM validate the effectiveness of the instruction-level screening, alongside the capability of action risk assessment and next-state prediction.
