---
title: "VideoChat3: Fully Open Video MLLM for Efficient and Generalist Video Understanding"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14935"
authors: ["Xinhao Li", "Yuhan Zhu", "Xiangyu Zeng", "Yuhao Dong", "Haoning Wu", "Zhiqiu Zhang", "Yuandong Yang", "Changlian Ma", "Qingyu Zhang", "Yansong Shi", "Xinyu Chen", "Haoran Chen", "Zizheng Huang", "Jun Zhang", "Kun Ouyang", "Lin Sui", "Ziang Yan", "Yicheng Xu", "Chenting Wang", "Yinan He", "Hongjie Zhang", "Yi Wang", "Yu Qiao", "Yali Wang", "Ziwei Liu", "Kai Chen", "Limin Wang"]
date: "2026-07-15T20:00:00.000Z"
score: ""
guid: "2607.14935"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14935.png"
generated: "2026-07-18T21:58:10+05:30"
---

Recent advances in video understanding have spanned motion, long video, and streaming interaction, driving this field toward real-world applications. Despite this progress, current open-source models remain limited in several ways. They often struggle to generalize across diverse video types, making them effective only in specific domains. High computational demands further restrict their efficiency and scalability. Moreover, most models are only partially open, with key components such as training code, strategy, or datasets unavailable, which hinders reproducibility and slows community-driven development. To address these issues, we introduce VideoChat3, a fully open, efficient, and generalist video-centric MLLM. VideoChat3 advances video understanding through two complementary designs. For efficiency, we introduce Inflated 3D Vision Transformer (I3D-ViT) and Adaptive Frame Resolution for Streaming Video Perception, which enables efficient spatiotemporal representation and reduces the cost of processing video inputs during training and inference. For effectiveness, we develop a scalable video data synthesis pipeline that curates three diverse, high-quality training datasets: VideoChat3-Academic2M, VideoChat3-LV116K, and VideoChat3-OL617K, covering general, long-form, and streaming video scenarios, improving the model's generalization across domains. By integrating these designs, VideoChat3 achieves a rare balance of broad generalization and computational efficiency. Experiments across general, long-form, and streaming benchmarks demonstrate that VideoChat3 surpasses prior open-source models with equal or larger parameter counts with only 4B parameters and higher efficiency.
