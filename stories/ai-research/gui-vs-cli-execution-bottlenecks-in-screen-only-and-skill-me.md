---
title: "GUI vs. CLI: Execution Bottlenecks in Screen-Only and Skill-Mediated Computer-Use Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.24551"
authors: ["Xiao Zhou", "Siyue Zhang", "Yilun Zhao", "Jinbiao Wei", "Tingyu Song", "Arman Cohan", "Chen Zhao"]
date: "2026-06-21T20:00:00.000Z"
score: 60
guid: "2606.24551"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.24551.png"
generated: "2026-06-28T19:19:18+05:30"
---

Computer-use agents can execute software tasks through either graphical interfaces or programmatic command interfaces, but existing evaluations confound interaction modality with differences in tasks, initial states, verifiers, and permitted actions. We introduce a matched execution-layer benchmark of 440 desktop tasks across 18 applications and 12 workflow categories, where screen-only GUI agents and skill-mediated CLI agents receive identical goals, states, and final-state verifiers while being restricted to modality-native actions. In this controlled setting, the strongest GUI agent reaches a 59.1% full pass rate, outperforming the strongest original-skill CLI agent at 48.2%; however, verifier-guided skill augmentation raises CLI success to 69.3%, showing that much of the CLI deficit comes from incomplete skill coverage rather than model capability alone. These results suggest that GUI and CLI expose different execution bottlenecks: GUI agents are limited by reliable grounded interaction over long-horizon workflows, whereas CLI agents are limited by the coverage and scalability of their skill interfaces.
