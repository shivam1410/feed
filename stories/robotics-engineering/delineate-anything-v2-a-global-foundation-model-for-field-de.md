---
title: "Delineate Anything v2: A Global Foundation Model for Field Delineation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.19069"
authors: ["Mykola Lavreniuk", "Nataliia Kussul", "Andrii Shelestov", "Yevhenii Salii", "Volodymyr Kuzin", "Charlotte Julia Li-Xing Wang", "Zoltan Szantoi"]
date: "2026-07-20T20:00:00.000Z"
score: 70
guid: "2607.19069"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.19069.png"
generated: "2026-07-26T22:35:53+05:30"
---

Accurate agricultural field boundary delineation at large scale is a foundational task for food security, supply chain transparency, and carbon accounting. While vision foundation models like SAM show remarkable zero-shot capabilities, they frequently fail in geospatial domains due to topological complexity, cropland texturing patterns, and a lack of physical scale awareness. In this work, we introduce Delineate Anything v2, a globally scalable foundation model designed specifically for wide-area field boundary mapping. We construct FBIS-73M, a 73-million-instance multi-resolution dataset spanning 61 countries. To address the pervasive issue of multi-field administrative parcel merging, we introduce a resolution-specific data curation pipeline that leverages topological image-space adaptation to homogenize merged parcels and strengthen weak physical boundaries. Furthermore, we establish a novel, manually curated evaluation benchmark covering 100 countries to assess independent zero-shot generalization. Our results show that Delineate Anything v2 surpasses the current state-of-the-art, including the Delineate Anything framework, by 0.284 mAP@0.5 (+103.3% relative gain), while maintaining execution speeds suitable for rapid national- and global-scale deployment, as demonstrated by nationwide mapping of Ukraine (603,000 km^2) in 5.4 hours on a consumer-grade workstation. Code, pre-trained weights, the FBIS-73M dataset, and ready-to-use national-scale vector boundary products are publicly available at https://github.com/Lavreniuk/Delineate-Anything.
