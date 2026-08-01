---
title: "VideoCoCo: Code-as-CoT for Physically-Consistent Video Generation via an Agentic Dual-Engine System"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27380"
authors: ["Haodong Li", "Tianfei Ren", "Xiaoxiao Ma", "Chunmei Qing", "Zhen Fang", "Sipeng He", "Ziyu Guo", "Haoyu Wu", "Juanxi Tian", "Yihang Zou", "Ruichuan An", "Dongzhi Jiang", "Boxue Yang", "Ji Xie", "Xu Huang", "Wenhao Yan", "Jialv Zou", "Zhengrong Yue", "Yaxin Luo", "Xiaotong Li", "Yuzhu Wang", "Junyan Ye", "Jinjing Zhao", "Zehui Chen", "Lin Chen", "Renye Yan", "Feng Zhao", "Pheng-Ann Heng"]
date: "2026-07-28T20:00:00.000Z"
score: 80
guid: "2607.27380"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27380.png"
generated: "2026-08-01T19:05:30+05:30"
---

Text-to-video models produce visually compelling but physically inconsistent results because temporal evolution must be inferred implicitly from compressed text. VideoCoCo uses executable Blender code as process-level chain of thought: a coding agent synthesizes programs specifying scene geometry and animation; simulation engine runs them deterministically; video editor transforms results into photorealistic video. Decomposition separates physics reasoning from visual rendering, making dynamics controllable and inspectable. On PhyGenBench, VideoCoCo improves OmniWeaving baseline from 0.475 to 0.558; on VBench-2.0, from 52.18 to 77.88, achieving best score on both benchmarks. This enables executable, verifiable video generation.
