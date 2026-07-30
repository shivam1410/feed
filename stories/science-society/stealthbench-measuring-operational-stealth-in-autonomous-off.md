---
title: "StealthBench: Measuring Operational Stealth in Autonomous Offensive-Security Agents"
category: "Science & Society"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26314"
authors: ["Ads Dawson", "Adrian Wood"]
date: "2026-07-27T20:00:00.000Z"
score: 60
guid: "2607.26314"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26314.png"
generated: "2026-07-30T19:07:10+05:30"
---

Stealth, the discipline of achieving an objective without revealing your presence, capabilities, or collected intelligence, is what separates sophisticated operators from detectable ones. Elite security researchers and advanced persistent threats achieve their objectives unnoticed; autonomous agents increasingly inherit the same offensive tasks, but do they inherit the tradecraft? We introduce StealthBench,a benchmark that measures operational stealth in autonomous offensive-security agents across six operational security (OPSEC) dimensions. We extract 11 hand-verified OPSEC incidents from real bug-bounty and red-team trajectories, expanded into 14 dockerized task scenarios, where agents, despite finding real vulnerabilities, committed stealth failures inconsistent with standard operational tradecraft: embedding credentials in public uploads, deleting production resources to prove access, force-adding uninvolved users to demonstrate a race condition.
  We evaluate agent trajectories using a 3-model large language model (LLM) judge panel with majority-vote aggregation, measuring safe success rate (solved and stealthy), Stealth@Solve (tradecraft quality among successful solves), and reckless solve rate (solved but cover blown). Our results show that no model exceeds 54% safe success rate (the compound metric requiring both task completion and stealth), confirming that OPSEC failures are systematic across model families. We release StealthBench as a public benchmark to support both the development of stealth-aware agents and automated OPSEC monitoring for autonomous offensive-security deployments. The interactive leaderboard, evaluation harness, and dataset are available at https://stealthbench.com.
