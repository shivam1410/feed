---
title: "SWE-Bench Pro Verified: A Reliable Benchmark for Software Engineering Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.08149"
authors: ["Pujun Zheng", "Zixin Shang", "Shufan Jiang", "Wenhui Tian", "Dongsheng Zhu", "Zerun Ma", "Dingbo Yuan", "Qi Zhang"]
date: "2026-09-07T20:00:00.000Z"
score: 66
guid: "2609.08149"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.08149.png"
generated: "2026-09-12T19:07:27+05:30"
---

SWE-Bench Pro has emerged as a standard benchmark for evaluating software engineering agents on challenging repository-level tasks. However, our analysis work show that its evaluation is undermined by two sources of unreliability: reward hacking, enabled by leakage of gold solutions or hidden evaluation information, and task quality issues, including misleading problem statements and improperly scoped tests. These issues can inflate benchmark performance and obscure agents' true coding ability. We present SWE-Bench Pro Verified, a verified version of SWE-Bench Pro that addresses both problems. Our approach combines anti-hacking safeguards that eliminate major leakage channels without disrupting normal agent functionality, with task refinement that minimally corrects inconsistencies within flawed instances. Evaluations on SWE-Bench Pro Verified reveal that some models perform substantially worse than previously reported, suggesting that existing results on SWE-Bench Pro may overestimate real software engineering capability. SWE-Bench Pro Verified offers a more trustworthy benchmark for assessing software engineering agents.
