---
title: "SUFLECA: Scaling Up Feature Learning for CAD-to-image Alignment"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15058"
authors: ["Saad Ejaz", "Miguel Fernandez-Cortizas", "Javier Civera", "Holger Voos", "Jose Luis Sanchez-Lopez"]
date: "2026-07-15T20:00:00.000Z"
score: 65
guid: "2607.15058"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15058.png"
generated: "2026-07-20T19:05:49+05:30"
---

CAD-to-image alignment aims to estimate an object's 9D pose (rotation, translation, and anisotropic scale) from a single RGB image, enabling applications in robotics and augmented reality. Recent zero-shot methods use visual foundation models to match image regions to CAD models, yet typically their correspondences are appearance-driven and degrade under occlusion or sim-to-real domain shift. To address these limitations, we introduce SUFLECA (Scaling Up Feature LEarning for CAD Alignment), a weakly-supervised framework for zero-shot CAD alignment with two key contributions. First, SUFLECA scales up geometry-grounded feature learning from pretrained visual representations through Normalized Object Coordinates (NOCs) supervision on 674K images spanning 12 real and synthetic datasets, learning compact geometry-aware features that generalize across domains. Second, we propose a geometrically consistent matching algorithm that establishes reliable one-to-one CAD-to-image correspondences. Together, these contributions enable accurate, sub-second alignment per object instance without iterative pose refinement. On ScanNet25k, SUFLECA achieves 33.4%/42.3% category/instance accuracy, outperforming, with a smaller computational footprint, the strongest zero-shot baseline by 10.3/12.2 percentage points and, for the first time on this benchmark, even surpassing fully supervised methods. Code is available at: https://github.com/snt-arg/SUFLECA
