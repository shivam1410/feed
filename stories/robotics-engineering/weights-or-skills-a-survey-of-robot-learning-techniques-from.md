---
title: "Weights or Skills? A Survey of Robot-Learning Techniques: from Action-Predicting Weights to Robots that Write their Own Skills"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.01851"
authors: ["Gaytri Jena", "Kapil Wanaskar", "Vinija Jain", "Aman Chadha", "Vasu Sharma", "Amitava Das"]
date: "2026-08-02T20:00:00.000Z"
score: 65
guid: "2608.01851"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.01851.png"
generated: "2026-08-08T19:05:03+05:30"
---

Robot learning is splitting into two bets: policies that bake competence into frozen weights (vision-language-action, or VLA, models), and agents that write and refine their own executable skills as code. This survey organises the field around that axis of weights versus skills. Its central analytical contribution is a deep-dive that arranges code-as-policy methods by their degree of self-improvement, from zero-shot program synthesis, through closed-loop self-repair and persistent skill memory, to the sparsely populated cell in which execution feedback, skill memory, and evolutionary search combine into one open-ended loop; only a few very recent systems (for example ASPIRE, ENPIRE, and RoboClaw) occupy that cell. We map the complementary "skills" pole, from unsupervised reinforcement-learning skill discovery to large-language-model skill libraries, and show that the word "skill" is used in at least five distinct senses, of which only the code sense self-improves without gradient updates. We then connect the taxonomy to the emerging skill economy: commercial robot-skill marketplaces now distribute one-tap skills across robots but ship only static playback, which surfaces open problems of adaptation, cross-embodiment portability, provenance, safety verification, composition, and standardisation. This is a deliberately focused survey. Rather than cataloguing the field exhaustively, it examines 77 representative systems across six technique families through one taxonomy and a set of contrast tables, and it supplies operational definitions of the self-improvement mechanisms together with a statement of what each family cannot do.
