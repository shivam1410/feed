---
title: "Verifiable Social Reasoning for LLM Assistants"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.17496"
authors: ["Amir Taubenfeld", "Zorik Gekhman", "Avigail Grinstein-Dabush", "Itay Laish", "Ariel Goldstein", "Marian Croak", "Avinatan Hassidim", "Yossi Matias", "Amir Feder"]
date: "2026-09-14T20:00:00.000Z"
score: 69
guid: "2609.17496"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.17496.png"
generated: "2026-09-20T21:43:11+05:30"
---

LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narratives, and (ii) social properties, such as others' intentions, typically lack verifiable ground truth. To address these challenges, we introduce Fuse, a multi-agent simulation framework for studying user-mediated social reasoning. In Fuse, a target agent with a hidden motive interacts with other agents including one representing the user, who then consults the evaluated assistant to infer the target's motive, providing verifiable ground truth by construction. Simulation faithfulness is validated through a human study with 24k annotations. We apply Fuse to 12 LLMs and demonstrate its analytical utility by systematically isolating key factors, showing that (i) user mediation compounds the inherent difficulty of social reasoning; (ii) LLMs exhibit systematic sensitivity to biased user framing; (iii) models can require more details than humans need to reach a correct prediction; and (iv) longer conversations do not always improve performance despite providing opportunities for clarifying questions. We open-source Fuse and a dataset with 21k examples.
