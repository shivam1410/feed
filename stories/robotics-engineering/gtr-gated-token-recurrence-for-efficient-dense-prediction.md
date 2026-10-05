---
title: "GTR: Gated Token Recurrence for Efficient Dense Prediction"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.26590"
authors: ["Zhe Feng", "Longfei Liu", "Wei Liu", "Kai Chen", "Jiangang Kong", "Wei Zhou", "Yifeng Qian", "Dexiong Chen", "Xuanlong Yu", "Xi Shen"]
date: "2026-09-22T20:00:00.000Z"
score: 58
guid: "2609.26590"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.26590.png"
generated: "2026-10-05T19:10:08+05:30"
---

Self-attention-based vision backbones perform well on dense prediction, but the quadratic computational cost of global softmax attention limits their efficiency as image resolution increases. We introduce Gated Token Recurrence (GTR), a softmax-free recurrent vision backbone that combines gated linear attention, alternating spatial scan directions, and spatially enhanced SwiGLU blocks. GTR is distilled from a detection-specialized DINOv3 teacher using only final-layer patch-token alignment through a linear projection and squared ell_2 loss, without masked-token prediction or intermediate-layer supervision. With Objects365 detector pre-training, GTR-L achieves 58.9 box AP on COCO val2017 with 1.908\,ms median batch-one latency under compiled FP16 execution on an RTX~4090. The same backbone also transfers to instance segmentation, pose estimation, oriented detection, semantic segmentation, and monocular depth estimation. In an isolated kernel benchmark, our specialized chunkwise CUDA operator is 4.0times faster than FLA v0.5.0 at 1.6K tokens on RTX~4090. TensorRT deployment on DRIVE AGX Thor achieves 2.282--8.769\,ms median batch-one latency across the evaluated models. These results show that recurrent token mixing can provide an efficient alternative to global softmax attention for high-resolution dense prediction and edge deployment. Project page: https://intellindust-ai-lab.github.io/projects/GTR/
