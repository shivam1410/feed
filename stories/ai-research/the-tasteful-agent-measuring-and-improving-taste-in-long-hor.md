---
title: "The Tasteful Agent: Measuring and Improving Taste in Long-Horizon Tasks"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.25804"
authors: ["Wenbo Pan", "Zhichao Liu", "Shujie Liu", "Jingying Zeng", "Chin-Yew Lin", "Xianfeng Tang", "Yan Lu", "Qi He", "Xiaohua Jia"]
date: "2026-09-21T20:00:00.000Z"
score: 55
guid: "2609.25804"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.25804.png"
generated: "2026-09-23T19:07:00+05:30"
---

LLM agents increasingly work on long-horizon tasks, and the decisions they make along the way, such as which hypothesis to test or which implementation to build on, determine the outcome of the whole run. Making these decisions well is becoming a key capability for both engineering and research agents. We refer to the ability to make good long-horizon decisions as the taste of an agent. While existing benchmarks measure the end-to-end success of agents on long-horizon tasks, none of them measures the taste of an agent. To address this problem, we build Taste-Bench, a benchmark of taste questions constructed automatically from trajectories that agents produced in engineering and research tasks. Each question presents a decision fork, a point in a trajectory where multiple directions are available and one of them leads to a better outcome, and the evaluated model chooses among these directions without seeing what happens after the fork. We mine these forks automatically from parallel attempts at the same task and from detours inside a single trajectory, without needing human annotation. We evaluate frontier models on Taste-Bench and find that the best model answers only 59.7% of the questions correctly. We further find that forks whose deciding evidence appears later in the trajectory are much harder for every model, and that a larger reasoning budget does not improve the accuracy. Finally, we show that taste can be trained. We distill the judgment of a teacher that has seen the outcome into a student model, and the student makes better decisions on unseen tasks and improves end-to-end success on held-out SWE-bench Pro tasks.
