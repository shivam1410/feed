---
title: "Transferring local rib responses to new component geometries in sheet forming with a graph-based Transformer"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10086"
authors: ["Yingxue Zhao, Haoran Li, Haosu Zhou, Tobias Pfaff, Nan Li"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10086v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Sheet metal components often consist of a global geometry, such as the corner radii and forming depth of a corner component, and local features added to it. During forming, both affect material flow. A surrogate learning all their combinations may need large training data. However, the same local feature type is often used on many global geometries. This study therefore partly decouples local features from the global geometry. The local-feature effect is first learned on one global geometry, needing fewer simulations than learning all combinations, then transferred to other global geometries via transfer learning, which can need fewer target simulations than training from scratch. A baseline-conditioned residual surrogate, R-BiLoGo, is proposed for ribs on the side walls of hot-stamped corner components. Its inputs are the baseline response and the geometric perturbation introduced by the ribs. Its outputs are the changes in displacement and thinning from the baseline. R-BiLoGo gave lower errors than a hierarchical graph-based model and a Transolver-based model on the source geometry, and on two of three selected target geometries after transfer. Across the 22 target geometries, transfer learning with 20 target simulations gave errors similar to or lower than training from scratch with 80 target simulations for about half of the targets. With the same 80 target simulations, transfer learning reduced errors for 95% of targets. The effect of the global geometry on transfer was studied with four parameter-free geometric descriptors and controlled variations across 4 corner subclasses. The benefit of transfer decreased with increasing surface distance and high-curvature change between source and target, and for targets shallower than the source. These trends were also seen in other corner types with a different magnitude.
