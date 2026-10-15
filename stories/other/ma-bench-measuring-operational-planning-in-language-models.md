---
title: "MA-Bench: Measuring Operational Planning in Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19138"
authors: ["Rodney Lafuente-Mercado, Robert Sincero, Phil Sage, Yuan Xue"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19138v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

How well can a language model turn a large, incomplete and partly contradictory body of documents into a plan when no single correct answer exists? We introduce Mission Analysis (MA)-Bench, built on mission analysis, the first step of military operational planning, in which a staff reads the full situation and states the problem before anyone proposes a solution. Its 10 expert-built scenarios pair synthetic packets of ten to twelve documents with 1,257 expert-written pass/fail requirements, each containing information on their source, question type, and importance level. A reasoning-model judge grades each brief against the requirements without seeing the documents; it grades like a fifth credentialed planner, leaving a four-planner panel's agreement unchanged (Fleiss $\kappa$ 0.42 to 0.41), and a judge from a second provider reproduces the model ranking (Spearman 0.94). Across twenty frontier and open-weights models the best gets 62% of the rubric items right. Models are strongest on facts stated in the documents (58%) and weakest on judgments that must be inferred (33%), and six failures in ten are omissions rather than errors. MA-Bench grades the determinations, not the prose. We release the packets, rubrics, prompts, scorer and every graded brief with item-level verdicts.
