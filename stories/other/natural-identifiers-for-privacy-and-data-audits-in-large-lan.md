---
title: "Natural Identifiers for Privacy and Data Audits in Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24408"
authors: ["Lorenzo Rossi, Bart{\\l}omiej Marek, Franziska Boenisch, Adam Dziedzic"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24408v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24408v1 Announce Type: new Abstract: Assessing the privacy of large language models (LLMs) presents significant challenges. In particular, most existing methods for auditing differential privacy require the insertion of specially crafted canary data during training, making them impractical for auditing already-trained models without costly retraining. Additionally, dataset inference, which audits whether a suspect dataset was used to train a model, is infeasible without access to a private non-member held-out dataset. Yet, such held-out datasets are often unavailable or difficult to construct for real-world cases since they have to be from the same distribution (IID) as the suspect data. These limitations severely hinder the ability to conduct scalable, post-hoc audits. To enable such audits, this work introduces natural identifiers (NIDs) as a novel solution to the above-mentioned challenges. NIDs are structured random strings, such as cryptographic hashes and shortened URLs, naturally occurring in common LLM training datasets. Their format enables the generation of unlimited additional random strings from the same distribution, which can act as alternative canaries for audits and as same-distribution held-out data for dataset inference. Our evaluation highlights that indeed, using NIDs, we can facilitate post-hoc differential privacy auditing without any retraining and enable dataset inference for any suspect dataset containing NIDs without the need for a private non-member held-out dataset.
