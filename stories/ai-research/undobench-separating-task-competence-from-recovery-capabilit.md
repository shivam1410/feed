---
title: "UndoBench: Separating Task Competence from Recovery Capability in Tool-Using AI Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05622"
authors: ["Dolly Sah", "Tanmay Sah", "Harshul Jain", "Tanya Sah"]
date: "2026-10-03T20:00:00.000Z"
score: 75
guid: "2610.05622"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05622.png"
generated: "2026-10-06T22:55:59+05:30"
---

Tool-using AI agents are increasingly deployed across enterprise software systems, yet widely used benchmarks primarily evaluate nominal task completion, conflating baseline planning competence with operational fault recovery. We introduce UndoBench, a benchmark spanning 36 base workflows and 36 fault scenarios across 8 enterprise domains, decoupling task competence from recovery capability via counterfactual paired trials under identical seeds alongside wire-level effect-history and environment-state oracles. On 12 held-out TEST workflows across two open-weight models, two frameworks, and three recovery paradigms (5,760 executions / 2,880 paired trials) in the frozen lost-acknowledgment study, nominal competence reached 83.54% while conditional recovery success rate (CRSR) fell to 46.72%, with naive retry producing duplicate external effects in 53.33% of trials. Extensions to commercial API models reproduced this competence-recovery separation. Evaluations across complementary execution boundaries show that recovery is phase-dependent: before mutation, methods perform similarly without duplicate effects among capable trials; during partial mutation, naive retry, per-call idempotency, and zero-privilege journaling collapse on the evaluated composite workflows; after commit but before acknowledgment, verification and server-side idempotency substantially improve safety. These findings demonstrate that evaluating nominal completion alone masks critical, phase-dependent recovery vulnerabilities in autonomous agents.
