---
title: "AUC Maximization from Biased Positive-unlabeled Data with Confidence"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10928"
authors: ["Atsutoshi Kumagai, Tomoharu Iwata, Hiroshi Takahashi, Taishi Nishiyama, Kazuki Adachi, Yasuhiro Fujiwara"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10928v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10928v1 Announce Type: new Abstract: Maximizing the area under the receiver operating characteristic curve (AUC) is a standard approach to imbalanced binary classification. Although positive and negative data are required for maximizing the AUC, negative data are often difficult to collect in some real-world applications due to privacy concerns or the need for specialized expertise to annotate them. Thus, AUC maximization from positive and unlabeled (PU) data has been attracting attention. Existing methods assume that labeled positive data are unbiased samples from the true positive distribution. However, this ideal assumption is often violated in practice. In this paper, we propose a method to maximize the AUC from biased PU data. To address the bias, our key idea is to exploit {\it confidence}, i.e., the probability that an instance is positive, associated with the small number of labeled positive data. We derive an estimator of the AUC risk using biased PU data with confidence, enabling AUC maximization under such bias. We further show that the rewritten AUC risk induces a Bayes-optimal AUC ranking even when the available confidence is any strictly increasing transformation of the true posterior probability. We experimentally show the effectiveness of our method on eight real-world datasets.
