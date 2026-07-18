---
title: "DeepLoop: Depth Scaling for Looped Transformers"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13491"
authors: ["Shuzhen Li", "Yifan Zhang", "Jiacheng Guo", "Quanquan Gu", "Mengdi Wang"]
date: "2026-07-14T20:00:00.000Z"
score: ""
guid: "2607.13491"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13491.png"
generated: "2026-07-18T21:58:10+05:30"
---

Looped Transformers scale sequential computation by applying a compact stack of physical blocks for multiple rounds, increasing unrolled depth without increasing stored parameters. This reuse changes the residual-scaling problem: in an untied Transformer, each residual branch receives and applies its own parameter update, whereas in a looped Transformer one shared update aggregates gradients from repeated visits and is read back by those same visits in the next linearized forward pass. We formalize this tied-depth effect through a first-order perturbation bound controlled by a visit-alignment coefficient κ_R. The bound recovers the DeepNorm exponent when visits decorrelate, but in the conservative aligned regime it requires the exponent to increase from 1/4 to 1/2 as loop count grows at fixed physical depth. The resulting method, DeepLoop, keeps the Post-LN DeepNorm architecture and sets α=(2N)^{1/2} and β=(8N)^{-1/2} for unrolled depth N. On GPT-style looped language models at GPT-2 small and GPT-2 medium scale, DeepLoop is neutral when no physical block is revisited and improves validation loss and downstream accuracy once recurrent depth is activated. These results show that stable recurrent depth requires residual scaling rules that account for parameter visits, not only nominal layer count.
