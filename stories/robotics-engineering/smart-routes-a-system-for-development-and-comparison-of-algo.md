---
title: "Smart routes: a system for development and comparison of algorithms for solving vehicle routing problems with realistic constraints"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14140"
authors: ["Andrew Soroka, German Mikhelson, Alexander Mescheryakov, Sergey Gerasimov"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.14140v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.14140v1 Announce Type: new Abstract: The problem of route optimization with realistic constraints is becoming extremely relevant in the face of global urban population growth. While we are aware of approaches that theoretically provide an exact optimal solution, their application becomes challenging as the problem size increases because of exponential complexity. We investigate the Capacitated Vehicle Routing Problem with Time Windows (CVRPTW) and compare solutions obtaining by exact solver SCIP with heuristic algorithms such as LKH, 2-OPT, 3-OPT, the ORTools framework, and the deep learning model JAMPR. We demonstrate that for problem of size 50 deep learning and classical heuristic solutions became close to SCIP exact solution but requires less time. Additionally for problems with size 100, SCIP exact methods around 13 times slower that neural and classical heuristics with the same route cost and on around 50% worse for the first feasible solution on the same time. To conduct experiments, we developed the Smart Routes platform for solving route optimization problems, which includes exact, heuristic, and deep learning models, and facilitates convenient integration of custom algorithms and datasets.
