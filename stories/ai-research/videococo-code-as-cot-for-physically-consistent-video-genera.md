---
title: "VideoCoCo: Code-as-CoT for Physically-Consistent Video Generation via an Agentic Dual-Engine System"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27380"
authors: ["Haodong Li", "Tianfei Ren", "Xiaoxiao Ma", "Chunmei Qing", "Zhen Fang", "Sipeng He", "Ziyu Guo", "Haoyu Wu", "Juanxi Tian", "Yihang Zou", "Ruichuan An", "Dongzhi Jiang", "Boxue Yang", "Ji Xie", "Xu Huang", "Wenhao Yan", "Jialv Zou", "Zhengrong Yue", "Yaxin Luo", "Xiaotong Li", "Yuzhu Wang", "Junyan Ye", "Jinjing Zhao", "Zehui Chen", "Lin Chen", "Renye Yan", "Feng Zhao", "Pheng-Ann Heng"]
date: "2026-07-28T20:00:00.000Z"
score: 70
guid: "2607.27380"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27380.png"
generated: "2026-08-02T19:04:48+05:30"
---

Text-to-video models have achieved remarkable visual quality, yet they still struggle to generate physically consistent dynamics because the temporal evolution of a scene must be inferred implicitly from a highly compressed text prompt. Existing chain-of-thought approaches introduce intermediate plans or visual states, but these representations are typically non-executable or temporally sparse, limiting their ability to instantiate and control the complete spatiotemporal process. To address this limitation, we introduce VideoCoCo, an agentic dual-engine framework in which executable Blender code serves as a process-level chain of thought. Given a text prompt, a coding agent synthesizes a Blender program that explicitly specifies the scene and its temporal evolution. The executable simulation engine runs the program to produce a deterministic spatiotemporal draft, which is subsequently transformed into a photorealistic video by a generative video engine through draft-conditioned editing. This decomposition separates process-level reasoning from high-fidelity visual realization. To adapt the video editor to simulated drafts, we construct VideoCoCo-3K, a curated dataset of draft-instruction-target triplets. VideoCoCo improves the OmniWeaving baseline from 0.475 to 0.558 on PhyGenBench and from 52.18 to 77.88 on VBench-2.0, achieving the best average score on both benchmarks. These results demonstrate that executable code provides an effective, controllable, and inspectable intermediate representation for physically consistent video generation.
