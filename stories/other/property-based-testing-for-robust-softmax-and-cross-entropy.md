---
title: "Property-Based Testing for Robust Softmax and Cross-Entropy"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36427"
authors: ["Muhammad Maaz"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36427v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

A recent paper of Barron et. al. (2026) identified two numerical issues with the softmax and cross-entropy functions in virtually all standard machine learning libraries (e.g., PyTorch and JAX). We show that these issues can be recovered through simple property-based tests in Hypothesis. However, our tests identify an additional edge case where their implementation fails. We then propose an even more robust softmax implementation which passes these tests and also supports use in causal attention masking. We compare our implementation with theirs and discuss some of the differences. Overall, this work shows that property-based testing can be a powerful tool for discovering and fixing numerical issues in machine learning libraries. Our implementations and property-based tests can be found at https://github.com/mmaaz-git/softmax-fix.
