---
title: "Ego2Act: Evaluating Goal-Directed Manipulation in Egocentric Video Generation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01092"
authors: ["Patrick Amadeus Irawan", "Iskandar Muda Rizky Parlambang", "Rava Maulana", "Qinrong Cui", "Erland Hilman Fuadi", "Zayd M. K. Zuhri", "Nanda Ryaas Absar", "Ahmed Elshabrawy", "Wilfried Ariel Mulyawan", "Shoubin Yu", "Yue Zhang", "Mohit Bansal", "Alham Fikri Aji"]
date: "2026-09-30T20:00:00.000Z"
score: 68
guid: "2610.01092"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01092.png"
generated: "2026-10-05T19:10:08+05:30"
---

Video generation models are increasingly being explored as world simulators for embodied planning and learning. To do so effectively, these models must not only generate visually appealing frames, but also predict how environments dynamically evolve when executing goal-directed actions. While evaluating these capabilities is crucial, existing benchmarks focus mainly on single short actions or step-by-step instructions. This leaves multi-step physical reasoning underexplored, especially in egocentric video generation that requires planning to simulate proper execution to accomplish high-level goals by carrying out multiple real-world manipulations. We introduce Ego2Act, a goal-directed benchmark featuring 2,640 videos from 110 real-world tasks across day-to-day settings, varying object clutter and multi-step complexity. Given an initial scene image and a high-level goal, Ego2Act evaluates whether video generation models can produce realistic egocentric videos of a hand manipulating objects to carry out the task. To support scalable evaluation, we also introduce Ego2ActJudge, a reference-free evaluation pipeline that achieves better task completion and physics plausibility evaluation alignment with human consensus compared to relevant baselines. Our findings reveal that models' generated simulations often skip or partially execute steps, leaving later steps missing dependent states, which leads to unfulfilled goal. Furthermore, models consistently fail at fine-grained physical dynamics, particularly during complex object manipulation and persistent world modeling. We hope Ego2Act provides a rigorous testbed for advancing video models toward physically plausible, goal-directed simulation.
