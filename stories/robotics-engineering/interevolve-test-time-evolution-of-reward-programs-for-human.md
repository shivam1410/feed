---
title: "InterEvolve: Test-Time Evolution of Reward Programs for Humanoid Loco-Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02196"
authors: ["Zhuo Lin", "Sirui Xu", "Liuyu Bian", "Yu-Xiong Wang", "Liang-Yan Gui"]
date: "2026-09-30T20:00:00.000Z"
score: 75
guid: "2610.02196"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02196.png"
generated: "2026-10-02T21:40:09+05:30"
---

We study test-time evolution for humanoid loco-manipulation: solving tasks that a controller was never trained for by repurposing its existing skills, improving from its own attempts, and retaining what it learns, without retraining. Our key insight is that a broad controller already holds much of the competence a new task needs, and that this competence becomes accessible through an interface between planning and control that is expressive enough to specify contact-rich, multi-stage interactions, yet executable and measurable enough that execution feedback can guide planning from experience. InterEvolve realizes this interface with two components. First, we develop an object-aware forward-backward (FB) behavioral foundation model, whose object residuals on a frozen body prior turn a new reward about the body or objects into loco-manipulation behavior at test time. Second, we specify tasks as reward programs: staged rewards with completion conditions and tunable constants. A large language model (LLM) agent revises the program structure in context, drawing on execution feedback and a skill library of verified programs, while a numerical optimizer tunes its constants. With every candidate verified across parallel simulation scenarios, the program explores new ways to induce, repurpose, and compose the controller's existing motor competence for the task at hand, and thus improves over iterations. Experiments show that human-designed rewards leave much of the FB model's loco-manipulation competence untapped, whereas the programs InterEvolve evolves release it, sometimes through novel strategies. It further produces behaviors for diverse tasks, complex scenes, and long-horizon compositions in simulation, and evolved skills run autonomously on a physical Unitree G1 from egocentric onboard perception.
