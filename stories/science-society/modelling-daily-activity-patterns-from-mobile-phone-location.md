---
title: "Modelling daily activity patterns from mobile phone location data via deep representation learning"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22121"
authors: ["Xinglei Wang, Junyuan Liu, Guangsheng Dong, Zichao Zeng, Stephen Law, James Haworth, Tao Cheng"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.22121v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22121v1 Announce Type: new Abstract: Passively collected mobile phone location data provide large-scale, longitudinal observations of human mobility but do not directly reveal activity purposes. The functional characteristics of visited locations offer useful contextual information, yet their relationship with activity purpose remains uncertain, particularly in mixed-use urban environments. We conceptualise activity pattern mining as an integrated process of representation, clustering, and interpretation, and propose the Activity Chain Encoder (ACE) for the representation stage. ACE is a self-supervised model that combines pre-trained urban embeddings with visit timing and duration and uses a Transformer to model the sequential organisation of stays. It is trained using masked activity modelling and identity-guided contrastive learning without requiring deterministic activity purpose labels. Learned daily representations are aggregated into user-level profiles, clustered, and interpreted through temporal-functional patterns and Census-derived demographic context. Applied to mobile phone app location data from London and compared with three representative methods, ACE supports the identification of six differentiated weekday activity-pattern groups characterised by distinct daily rhythms, urban functional contexts, and demographic associations. These complementary forms of evidence further support the development of empirically grounded activity-pattern personas, establishing a holistic route for deriving behaviourally meaningful population patterns from unlabelled mobile phone location data. The source code for the entire analytical pipeline developed in this study is publicly available at https://github.com/xlwang233/ACE.
