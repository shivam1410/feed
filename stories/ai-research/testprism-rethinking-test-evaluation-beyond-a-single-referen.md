---
title: "TestPrism: Rethinking Test Evaluation Beyond a Single Reference"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12289"
authors: ["Han Li", "Lingxiang Hu", "Jiacheng Huang", "Ziqian Jiang", "Jingkai Luo", "Wei Gao", "Yunfan Tan", "Zun Wang", "Jiaheng Liu"]
date: "2026-10-07T20:00:00.000Z"
score: 67
guid: "2610.12289"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12289.png"
generated: "2026-10-10T00:52:03+05:30"
---

Large language model (LLM) coding agents have advanced test generation across diverse programming tasks. However, the common practice of evaluating tests against a single reference solution overlooks alternative valid implementations and can overstate test quality. We introduce TestPrism, comprising 300 test tasks from 17 sources and 3000 candidate implementations, evenly split between valid and invalid solutions. Its primary metric, Joint Success Function, requires the generated tests to fail on the initial program state, accept every valid candidate, and reject every invalid candidate. Across fourteen baseline coding agent configurations, Joint Success Function reaches only 28.00%, whereas single reference success reaches 59.67%. Our analysis reveals missed behaviors, unsupported assertions, and faulty test construction. To address these weaknesses, we introduce TestHelix, which combines heterogeneous synthesis of test and repair pairs with peer cross validation and recursive self improvement (RSI). Across two models, TestHelix improves Joint Success Function by 8.67 to 9.00 percentage points over the native harness comparators in the TestHelix evaluation
