---
title: "Token Budgets: An Empirical Catalog of 63 LLM-Agent Budget-Overrun Incidents, with an Affine-Typed Rust Mitigation as a Case Study"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.04056"
authors: ["Sajjad Khan"]
date: "2026-06-01T20:00:00.000Z"
score: 75
guid: "2606.04056"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.04056.png"
generated: "2026-06-05T02:55:12+05:30"
---

A systematic study documents 63 confirmed production incidents from 2023 to 2026 across 21 orchestration frameworks where LLM-agent systems exceeded token budgets, causing financial losses. In documented cases, retry loops spent thousands of dollars before human operators noticed. Failures cluster into eight patterns including missing cost checks and delegation-race conditions. A proposed solution is a Rust crate using affine type-system enforcement that prevents double-spending and uncontrolled delegation at compile time, making budget violations impossible. This treats cost control as a language-level guarantee rather than operator vigilance.
