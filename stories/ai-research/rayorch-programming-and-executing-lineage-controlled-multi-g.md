---
title: "RayOrch: Programming and Executing Lineage-Controlled Multi-Grain Dataflows for Foundation-Model Data Preparation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.18703"
authors: ["Xiaochen Ma", "Zimo Meng", "Junzhu Liang", "Youhe Jiang", "Yue Cheng", "Hao Liang", "Bohan Zeng", "Dengchun Li", "Lu Ma", "Zhengyang Zhao", "Zhen Hao Wong", "Runming He", "Meiyi Qiang", "Jiangtao Guan", "Binhang Yuan", "Wentao Zhang"]
date: "2026-09-15T20:00:00.000Z"
score: 50
guid: "2609.18703"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.18703.png"
generated: "2026-09-28T20:49:59+05:30"
---

Preparing high quality training data for foundation models requires scalable pipelines that transform heterogeneous documents and videos into structured records. Such pipelines expand each parent item into an ordered and input dependent sequence of children, whose counts may be long tailed. GPUs should batch children across parents while preserving parent relationships, child order, completion status, and result routing. Existing systems either hide parallelism behind coarse grained jobs or expose flat records that force applications to manage lineage and regrouping. We present RayOrch, a programming model and distributed execution engine that preserves parent child relations throughout execution. Programs declare ordered variable cardinality expansions and matching gathers. The compiler validates each pair, while the runtime records child membership, immediate parents, immutable ordinals, and terminal states. Per Call FIFO Ready Queues batch ready children across parents. Gathers reconstruct results from declared membership and ordinals rather than batch boundaries or completion order. Parents can advance as soon as all required children become terminal. Typed parent scoped failures suppress undispatched siblings of the failed parent while allowing unrelated parents to continue. On NVIDIA H20 GPUs, RayOrch achieves 15.14 times speedup when scaling MinerU from 4 to 64 GPUs and 7.82 times speedup when scaling a video pipeline from 8 to 64 GPUs. It reduces end to end time by 13.1 percent versus Ray Data and 29.0 percent versus Daft on MinerU, and by 16.0 percent versus Ray Data on Docling. Code available at https://github.com/OpenDCAI/RayOrch .
