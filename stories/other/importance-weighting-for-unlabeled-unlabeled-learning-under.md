---
title: "Importance Weighting for Unlabeled-unlabeled Learning under Distribution Shift"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10994"
authors: ["Atsutoshi Kumagai, Tomoharu Iwata, Hiroshi Takahashi, Taishi Nishiyama, Kazuki Adachi, Yasuhiro Fujiwara"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10994v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10994v1 Announce Type: new Abstract: Unlabeled-unlabeled (UU) learning allows us to learn a binary classifier from two sets of unlabeled data with different class-priors. It is a general framework because it includes a wide variety of supervised learning such as positive-unlabeled (PU) learning, noisy label learning, and similarity-based learning. Existing UU learning assumes that the test and training distributions have the same class-conditional densities. However, this assumption rarely holds in practice due to distribution shifts. This paper proposes a distribution shift adaptation method for UU learning that uses UU data in the training distribution and a few UU data in the test distribution. The proposed method is based on the importance weighting, which minimizes the test risk by using training data with estimated importance weights. Although existing importance weighting methods cannot handle UU data, we show that it can be done in a principled manner. Thanks to the generality of UU learning, our method can handle various learning problems such as PU and noisy label learning under distribution shift within a single framework while existing methods are usually tailored to a specific problem. Moreover, it does not require any assumption of the shift types such as covariate shift. We experimentally demonstrate the effectiveness of the proposed method with real-world datasets.
