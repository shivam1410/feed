---
title: "Interpreting Coding Agents Through Their Behavioral Trajectories"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.17440"
authors: ["Ibragim Badertdinov", "Alexander Golubev"]
date: "2026-11-11T19:00:00.000Z"
score: ""
guid: "2611.17440"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.17440.png"
generated: "2026-11-17T19:45:07+05:30"
---

Standard coding-agent benchmarks primarily evaluate binary task success, treating execution as a black box and obscuring the behaviors that produce those outcomes. We analyze a large corpus of 143,209 execution trajectories from 125 agent configurations spanning 117 unique models. To enable comparisons across heterogeneous agent interfaces, we develop a rule-based parser that maps raw execution traces to high-level actions such as repository search, file editing, and test execution, and audit its predictions against a six-model consensus reference on 500 events. We find that agents with similar solve rates can nevertheless differ substantially in how they explore, modify and verify code. Moreover, without using task outcomes, token counts, or tool names as features, aggregate behavioral profiles retrieve the corresponding agent stack across disjoint repository sets and programming languages, although task composition is not fully controlled in the cross-repository setting. Through analyses of frontier models and agent scaffolds, we further show that scaffold choice and reasoning effort systematically shift agents' search, editing, and testing behavior. We release the deterministic parser together with the full annotation and analysis pipeline alongside an annotated trajectory subset.
