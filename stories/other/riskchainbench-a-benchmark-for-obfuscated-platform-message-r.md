---
title: "RiskChainBench: A Benchmark for Obfuscated Platform Message Restoration and Evidence-Grounded Web Investigation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.16900"
authors: ["ZhuoXin Liu", "Zhiming Ma", "Ying Zhang", "Mengzheng Yang", "Yifan Wang", "Zhengqi Huang", "Yanhan Zhou", "Zekun Lin", "Jun Zhang", "Shun Zhang", "Yue Chen", "Qiao Zhao", "Peng Chen"]
date: "2026-09-14T20:00:00.000Z"
score: ""
guid: "2609.16900"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.16900.png"
generated: "2026-09-18T20:52:59+05:30"
---

Platform abuse campaigns conceal redirection instructions with emojis, homophones, character decomposition, and redundant symbols, then route users through disguised links to services associated with pornography, fraud, gambling, or illicit transactions. Existing benchmarks evaluate obfuscated text and risky webpages separately, obscuring how target recovery affects downstream evidence acquisition. We introduce RiskChainBench, pairing 3,600 synthetic token-text restoration inputs from 600 source sessions with 600 corresponding human-labeled local web environments. A model first restores the message, operational intent, and destination; the same underlying model then acts as a VLM-driven web agent that investigates the correctly associated website and produces a frozen, evidence-cited risk report without message-side semantics or domain-reputation cues. We score restoration and correct-routing web investigation separately and compose them offline by applying the frozen primary-entry prediction as a gate to the same Task 2 result. Human labels determine task correctness, while a fixed multimodal evidence judge assesses faithfulness, sufficiency, completeness, and consistency. Across ten models, Entry Top-1 ranges from 35.2% to 95.2% and web decision accuracy from 26.3% to 62.8%; the leading systems differ across entry recovery, full reconstruction, website decisions, and fine-grained typing. Execution failures account for 31.9% of web runs, whereas post-decision type errors account for only 0.9%, identifying stable exploration and risk judgment as the principal bottlenecks. We release the benchmark, protocol, and resettable local sandbox.
