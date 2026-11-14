---
title: "WorldDraft: If Code Builds the World, Can Video Models Just Render It?"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.16217"
authors: ["Zhiyu Hou", "Wen-Jie Shu", "Harold Haodong Chen", "Weilin Ruan", "Chenfei Liao", "Liuzhou Zhang", "Disen Lan", "Xiaogang Xu", "Qi Chen", "Ser-Nam Lim"]
date: "2026-11-11T19:00:00.000Z"
score: ""
guid: "2611.16217"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.16217.png"
generated: "2026-11-14T19:35:57+05:30"
---

Multimodal coding agents decouple 4D world construction from visual generation, repurposing video models from world generators toward generative renderers. This division of labor raises a fundamental question: if code builds the world, can video models just render it? A reliable generative renderer hinges on two complementary criteria: (i) world preservation, retaining prescribed 4D kinematics and camera paths; and (ii) visual realization, persistently binding text-specified target attributes over time. To evaluate this capability, we introduce WorldDraft, a benchmark of 432 strictly paired test cases across 48 executable 4D world families spanning six dynamic challenge categories. Under a 3 times 3 factorial design, WorldDraft orthogonally crosses draft granularity (abstract proxy to previs) and appearance alignment (neutral to conflicting) under identical dynamics. Extensive evaluations across 12 representative models reveal that: (I) world preservation and visual realization remain in stark operational tension; (II) richer draft scaffolding anchors structure but paradoxically impairs appearance fidelity; and (III) conflicting source cues trigger severe source leakage (up to 64%), exposing fragile cross-modal disentanglement. To mitigate these bottlenecks, we propose WorldDraft-Primer, a plug-and-play visual prompting strategy that consistently improves both objectives across frozen video renderers. Together, WorldDraft and WorldDraft-Primer lay a foundation for bridging programmatic 4D simulation with video generation, advancing physically grounded generative rendering.
