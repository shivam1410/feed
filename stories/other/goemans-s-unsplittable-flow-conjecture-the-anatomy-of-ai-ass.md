---
title: "Goemans's Unsplittable-Flow Conjecture: The Anatomy of AI-Assisted Counterexample Discovery"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23244"
authors: ["Jingwei Ge, Na Xie, Li Li, Jiayang Li"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23244v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Goemans conjectured that any fractional single-source flow could be converted into an unsplittable flow without increasing total cost and while increasing any arc load by at most the largest demand. Recently, Dmitry Rybin announced a seven-vertex counterexample found through an interaction with ChatGPT, which disproved this long-standing conjecture. However, the interaction did not reveal why this particular topology and its demand, fractional-flow, and cost choices work together, whether the example belongs to a broader family, or which structural features determine where counterexamples can occur. It also left unclear why the AI-assisted search succeeded where earlier human efforts had not. In this paper, we develop a forward counterexample construction pipeline. It starts from an arborescence on which failure is impossible and adds terminal-entering shortcut arcs. The resulting load constraints define a finite set of admissible route choices; their convex hull, the conflict polytope, yields exact conditions for demands, fractional flows, and costs. Starting from a simple arborescence, the pipeline selects Rybin's topology and characterizes all counterexamples it supports. Experiments further demonstrate the pipeline's transferability: when instructed to follow it while varying the initial arborescence and shortcut placement, ChatGPT produced counterexamples on topologies genuinely different from Rybin's and found valid constructions starting from 93 other rooted arborescence shapes. The theory also explains why the original example was difficult to discover through blind enumeration and suggests that Rybin's interaction lies between blind enumeration and a complete theory-guided construction.
