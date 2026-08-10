---
title: "Do AI Personas Grow? Analyzing and Benchmarking Personality Evolution in LLM Agents After Life Events"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.06485"
authors: ["Ming Wang", "Peidong Wang", "Xiaocui Yang", "Daling Wang", "Shi Feng", "Fiona Fui-Hoon Nah", "Ee-Peng Lim"]
date: "2026-08-05T20:00:00.000Z"
score: 65
guid: "2608.06485"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.06485.png"
generated: "2026-08-10T19:05:52+05:30"
---

Personality-conditioned LLM agents (PC-Agents) are increasingly used in emotional support, social simulation, and role-playing, motivating the development of lifelong agents that remain coherent over extended interactions. A key component of such coherence is personality evolution: agents should undergo plausible, psychology-grounded changes as they experience life events in different contexts. Although prior work shows that LLM personalities can shift under contextual perturbations, how these shifts vary across traits, events, personas, and models remains poorly understood. We study event-induced personality change after 11 major life events, using the Big Five traits as a psychometric anchor and interpreting the resulting trajectories against longitudinal evidence from human personality psychology. Across four diagnostic axes, PC-Agents exhibit measurable trait shifts at similar rates for event-trait pairs with and without documented human change directions. Even when shifts follow the expected direction, their magnitudes usually fall below human effect-size ranges. Gender and cultural-region prompts show little moderating effect, while persona-level dispersion is compressed three- to four-fold relative to human samples. To enable systematic comparison, we introduce BFI-Adapt, a reusable benchmark for scoring the directional fidelity of event-induced personality change, and use it to rank 14 models. A validation suite shows that the measured shifts exceed no-event retest noise, remain stable under independently paraphrased prompts, exhibit limited and model-dependent convergence with scenario-based behavioral choices, and persist across intervening unrelated dialogue. Together, these checks establish the measured trajectories as robust event-conditioned response patterns. Our results suggest that current PC-Agents simulate the mean of human personality dynamics, but not its shape.
