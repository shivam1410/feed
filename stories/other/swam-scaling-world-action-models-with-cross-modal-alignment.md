---
title: "SWAM: Scaling World Action Models with Cross-Modal Alignment"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.12870"
authors: ["Yu Zhou", "Xinyuan Xia", "Xuankun Yang", "Yinghao Yang", "Wendi Chen", "Bowen Liu", "Jianhan Ma", "Weicheng Duan", "Jun Lv", "Cewu Lu", "Yanwei Li"]
date: "2026-11-08T19:00:00.000Z"
score: ""
guid: "2611.12870"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.12870.png"
generated: "2026-11-11T19:00:38+05:30"
---

World action models jointly predict video and actions conditioned on language. Existing studies focus primarily on architectures and training mechanisms, typically treating language-video alignment acquired through video pretraining as an established foundation. However, introducing action learning may impair this alignment. Principled guidance on data and supervision design for maintaining language-video alignment during action learning remains limited. To investigate this, we curate a pool of approximately 47,000 hours of general videos, egocentric videos, UMI demonstrations, and robot demonstrations. Building on this, we systematically study how language-video supervision, language-video-action supervision, and the joint use of these two forms affect WAM performance. In particular, we examine how language annotation quality affects pretrained language-video capabilities, and how action supervision from UMI and robot demonstrations extends these capabilities to language-video-action modeling. To better scale the model, we further conduct detailed studies on joint training recipe and model architecture. Under a fixed training budget, mixing egocentric videos and UMI demonstrations improves control generalization. Model architecture affects how effectively these experiences are used, while scaling pretraining under the selected configuration brings further gains. The resulting recipe, post-trained on RoboTwin Clean demonstrations only, achieves success rates of 88.10% and 61.56% under Easy (Clean-to-Clean) and Hard (Clean-to-Random) conditions, respectively. Our model achieves 40.00% SR across three real-world tasks, compared with 23.33% for the strongest baseline, indicating better generalization under unseen conditions. We release the curated data, training code, and model weights.
