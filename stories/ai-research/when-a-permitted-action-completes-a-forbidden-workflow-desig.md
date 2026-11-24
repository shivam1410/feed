---
title: "When a Permitted Action Completes a Forbidden Workflow: Designing Consequence-Oriented Approval for LLM Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28454"
authors: ["S M Asif Hossain, Ruksat Khan Shayoni, Md Kishor Morol, M F Mridha"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 55
guid: "oai:arXiv.org:2611.28454v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Tool-using language-model agents increasingly ask people to approve consequential actions, yet an approval prompt shows only the next step. A request to send a file to an approved recipient can look harmless even when that file was assembled, several steps earlier, from data the user said must never leave. We call this a cumulative authorization failure and argue that it is an interaction design problem as much as a security problem. The evidence a reviewer needs is spread across the trajectory, and listing it in time order leaves the reviewer to reconstruct the causal chain. We present the Cumulative Consent Ledger (CCL), an approval interface built on four design principles that restate the user's intent, bind the review to the exact action, compose the cumulative consequence, and keep every claim checkable. A trusted monitor that tracks artifact lineage supplies the evidence. In a between-subjects study with 80 participants and 960 approval decisions, CCL was associated with fewer unsafe approvals than an evidence-matched chronological log (24.2% vs. 32.5%), higher comprehension, and faster decisions, although the adjusted difference in unsafe approvals remained uncertain (-7.9 points, 95% CrI [-19.7, 3.8]). In a system evaluation, the monitor detected 89.2% of 120 violating checkpoints and, used as an execution gate, reduced executed unsafe effects from 43.3% to 5.0% for one agent at a small cost to benign completion. We derive implications for designing consent around consequences rather than individual calls.
