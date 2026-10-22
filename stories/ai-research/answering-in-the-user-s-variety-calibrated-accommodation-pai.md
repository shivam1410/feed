---
title: "Answering in the User's Variety: Calibrated Accommodation Pairs for Post-Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.28474"
authors: ["Zhizhuo Kou", "Heming Li", "Jian Yang", "Junyu Luo", "Jingshu Peng", "Sirui Han", "Yike Guo"]
date: "2026-10-19T20:00:00.000Z"
score: 30
guid: "2610.28474"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.28474.png"
generated: "2026-10-22T20:05:20+05:30"
---

People adapt how they talk to the person in front of them. However, chat models tend to respond in Standard English regardless of the dialect used by the user. A uniform answer can hide whether training treats these users alike, and output audits cannot tell as well. We trace how each post-training stage, from supervised fine-tuning (SFT) to preference optimization (DPO) and reinforcement learning, changes a model's tendency to match the user, and read what each update prefers from two content-matched replies, one matching the user and one not. Across 10 open model lineages, post-training standardizes replies to every informal cue, yet after adjusting for how likely each reply already was, the DPO update still favours matching British and Australian spelling over AAE and Singlish on 10 lineages, and models still produce AAE features when asked. We then introduce calibrated accommodation pairs (CAP), preference data that reward matching users' dialect density while preserving Standard English for Standard-English users. On a fully open model, CAP raises convergence on features it was not trained on without a detectable increase in dialect for Standard-English users or a cost in instruction following. In contrast, one-sided pairs reach a similar gain only by overshooting the user and imposing dialect. Our findings show that uniform replies can hide selective updates and audits should read the update as well as the output. Code: https://github.com/kouzhizhuo/cap-accommodation.
