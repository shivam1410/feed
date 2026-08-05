---
title: "Zero-Mem: Zero-Token Memory Operations for LLM Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.29377"
authors: ["Yilin Xiao", "Zhehan Zhu", "Yujing Zhang", "Jin Chen", "Zijin Hong", "Luyao Zhuang", "Qinggang Zhang", "Shengyuan Chen", "Xiaocao Ouyang", "Lingfei Ren", "Xiao Huang"]
date: "2026-07-30T20:00:00.000Z"
score: 75
guid: "2607.29377"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.29377.png"
generated: "2026-08-05T20:00:21+05:30"
---

LLM agents need memory to act consistently over long interactions, yet many systems use additional LLM calls to operate that memory. Generating intermediate records and mediating their retrieval adds recurring token and time costs, while omitted or merged details can obscure the original evidence. We ask whether structured memory access requires generation at all. Zero-Mem introduces zero-token memory operations: no step outside final question answering invokes an LLM or consumes LLM input or output tokens; encoder computation is accounted for separately. Zero-Mem preserves original interaction traces as its source of record. It organizes the traces in two complementary ways. An entity--context graph exposes connections across interactions, while a temporal hierarchy preserves conversational locality and session state. For each query, Zero-Mem weighs the two views, retrieves from both, and follows their structure to recover supporting relations or surrounding context. Deterministic calibration first discards conflicting evidence and then keeps the reader's answer grounded in the retrieved traces. Only the final-QA reader invokes an LLM. Across long-memory and long-context question-answering benchmarks, Zero-Mem achieves competitive performance while eliminating LLM calls and LLM-token consumption from memory operations. With the same final-QA reader and context budget, it reduces memory-operation time cost by 57.6\% relative to the fastest compared baseline. Ablations support the contribution of the two views and their query-dependent coordination. Overall, the results show that structured agent memory need not generate an intermediate representation of the past. After peer review, the code and implementation details will be available at blue{https://github.com/TheMoon0815/Zero-mem}.
