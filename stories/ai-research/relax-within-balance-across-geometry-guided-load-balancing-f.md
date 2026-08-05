---
title: "Relax Within, Balance Across: Geometry-Guided Load Balancing for Vision-Language Mixture-of-Experts"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.00574"
authors: ["Ziang Wu", "Peng Jin", "Qishen Yin", "Munan Ning", "Hao Li", "Peizhen Zhang", "Li Yuan"]
date: "2026-07-31T20:00:00.000Z"
score: 60
guid: "2608.00574"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.00574.png"
generated: "2026-08-05T20:00:21+05:30"
---

Vision-language MoE batches contain different numbers of image and text tokens. Image resolution, image count, tiling, and prompt length all change this token mix. We call the standard token-level Switch auxiliary loss Std-Aux. Std-Aux balances only the mixed load, so large image and text load errors can cancel at one mix. On our main model, the same trained router shows more than a fivefold change in load imbalance across image resolutions. We hold the image and text load profiles fixed and derive the exact load curve as the token mix varies. The image-text load gap controls sensitivity to the token mix. Physical preprocessing can also change the conditional profiles. The fixed-profile law excludes such changes. To design a remedy, we examine the router input structure. Image and text occupy distinct regions, while visual tokens group strongly by source image. The modality boundary motivates separate image and text terms. The image boundary motivates one equal-weight routing instance per image. ReBA, or Relax Within, Balance Across, implements both choices. Across four split backbones, ReBA lowers load on every reported benchmark input while keeping mean task accuracy comparable to Std-Aux. ReBA also lowers average load over the tested range and worst physical load under resolution and tiling shifts. Code is available at https://github.com/ZiangWu-77/ReBA.
