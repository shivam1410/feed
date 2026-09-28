---
title: "FoMo: Forking Moment in Generative Trajectory as a Perceptual Distance"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.25716"
authors: ["Jaihyun Lew", "Mingi Jung", "Minjun Park", "Wooseok Song", "Sungroh Yoon"]
date: "2026-09-21T20:00:00.000Z"
score: 22
guid: "2609.25716"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.25716.png"
generated: "2026-09-28T20:49:59+05:30"
---

Reference-based image quality assessment (IQA) metrics aim to reflect how humans perceive the perceptual distance between a pair of images. To learn how the human visual system (HVS) operates, recent reference-based IQA metrics heavily rely on human-annotated data. Mean opinion score (MOS)-based pointwise scoring, which assigns a scalar quality value per image, is preferable for annotation but is prohibitively expensive to collect at scale and is known to be noisy due to inconsistent human judgments. As an alternative, two-alternative forced choice (2AFC) pairwise labels have gained popularity due to their reliability and efficiency, but they capture only relative comparisons between pairs. In this paper, we propose a fully automated data generation pipeline that generates pointwise perceptual distance labels between image pairs without any human annotation. Our approach exploits the generative dynamics of diffusion models as a perceptual distance proxy, where the coarse structure of an image is generated in the early timesteps and the fine details are generated in the later timesteps. Images that fork early in the generation process share only coarse structure and are perceptually far apart; images that fork late differ only in fine detail. We demonstrate that the diffusion trajectory aligns well with the human visual system, and use this forking moment, FoMo, as a reference-grounded distance label to supervise the training of a reference-based IQA metric. The pointwise labels, which support universal comparison between arbitrary image pairs, enable an information-rich training objective. Extensive experiments across diverse backbone architectures confirm the effectiveness of our generation pipeline, outperforming human-annotated datasets in multiple benchmarks.
