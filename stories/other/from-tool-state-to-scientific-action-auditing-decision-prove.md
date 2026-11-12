---
title: "From Tool State to Scientific Action: Auditing Decision Provenance in Biomedical Research Agents"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.01527"
authors: ["Xingyu Yi", "Xinya Zhang", "Yunshen Zhou", "Haoyu Bao"]
date: "2026-10-31T23:58:26.000Z"
score: ""
guid: "2611.01527"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.01527.png"
generated: "2026-11-12T19:00:28+05:30"
---

A scientific agent can give the same verdict while reading and citing different evidence. BioAgent-DF tests this separation using paired reference and candidate values saved at the same scientific computation site. It restores or transplants those values at their original coordinates, then runs the agent on healthy hardware. Across eight SciFact batches, Qwen3.5-4B shows repeatable citation changes in three capture-claim combinations, and Gemma 3 4B IT shows repeatable read and citation changes in four. These seven combinations cover two claims. Full restoration recovers the reference evidence sets while verdicts remain unchanged. Verdict changes observed under the baseline prompt did not recur under the explicit-example prompt. Complementary tool and optimizer experiments distinguish recovery of numerical state, recovery of ranked lists, and restoration of an agent's visible history. These results show that an audit should track both the evidence an agent uses and its final answer. In hERG cardiac-safety assay allocation, silent numerical faults changed testing decisions while the fixed-budget shortlist kept the same number of compounds labeled as blockers. After the agent had used faulty values, restoring its earlier execution state and supplying certified scores recovered all 39 changed decisions, whereas replacing the prediction file recovered none; no incorrect action was committed. A streaming implementation of the arithmetic checks reduced the total time for forward execution and verification by 42.4% relative to the original FP64 implementation, with identical flags and recovery outputs.
