---
title: "Can Multimodal Large Language Models Understand OCT?"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16609"
authors: ["Baochen Fu", "Wenzhi Deng", "Baihao Jin", "Yang Li", "Zihan Nie", "Kailin Jiang", "Yuntao Du", "Weiye Song"]
date: "2026-07-17T20:00:00.000Z"
score: 70
guid: "2607.16609"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16609.png"
generated: "2026-07-21T19:05:01+05:30"
---

Optical coherence tomography (OCT) imaging is essential for the diagnosis and treatment of retinal diseases. Although multimodal large language models (MLLMs) have demonstrated considerable potential in medical image analysis, existing benchmarks largely reduce OCT understanding to coarse-grained disease classification or isolated visual question answering, leaving the complete cognitive process from visual perception to clinical reasoning insufficiently evaluated. To address this limitation, we introduce OCT-Bench, a comprehensive benchmark dedicated to OCT image understanding. OCT-Bench comprises 10,076 high-quality multiple-choice questions constructed from 4,137 OCT images across seven public datasets. Following the real-world clinical interpretation workflow, we establish a hierarchical capability taxonomy consisting of 20 fine-grained tasks across three dimensions: Perception, Cognition, and Reasoning. These tasks cover a broad range of capabilities, including imaging attributes, retinal anatomy, lesion characteristics, spatial relationships, disease assessment, therapeutic decision-making, and prognostic management. We systematically evaluate 20 representative MLLMs, including proprietary models, open-source general-purpose models, and medical-domain models. Experimental results demonstrate that current models remain substantially short of reliable OCT understanding. Moreover, neither medical-domain adaptation nor increased model scale consistently improves performance across capability levels. OCT-Bench enables comprehensive and fine-grained evaluation of MLLMs, providing a foundation for identifying capability bottlenecks and advancing clinically grounded OCT understanding.
