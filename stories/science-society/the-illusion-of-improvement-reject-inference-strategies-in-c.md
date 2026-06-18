---
title: "The Illusion of Improvement: Reject Inference Strategies in Credit Scoring"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18479"
authors: ["Bruno Scarone, Ricardo Baeza-Yates"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.18479v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18479v1 Announce Type: new Abstract: Reject inference methods are widely used to mitigate survival bias in credit scoring, yet their effectiveness remains poorly understood. We systematically evaluate several such methods and uncover a structural failure mode: in a natural retraining cycle, models whose accuracy improves while recall collapses create an illusion of improvement that leads practitioners to believe the system is getting better when, in fact, its rejection quality -- the ability to correctly screen out defaulters -- is deteriorating. We then propose a controlled exploration strategy that breaks the feedback loop without statistical assumptions: the lender deliberately approves a fraction of rejected applicants and observes their true outcomes. We show that accuracy and rejection quality give opposite recommendations on whether to explore: accuracy favors no exploration, while rejection quality improves with it, confirming that standard evaluation metrics are misleading under selection bias. Even minimal exploration rates (2--5\%) prove sufficient in our experiments to diagnose the severity of the feedback loop at near-zero cost. Our findings are consistent across two machine learning methods and three real-world datasets, and suggest that standard evaluation protocols are inadequate for assessing models trained under survival bias.
