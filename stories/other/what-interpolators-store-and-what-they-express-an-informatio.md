---
title: "What Interpolators Store and What They Express: An Information-Theoretic Framework for Benign Overfitting and Label-Free Model Selection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23630"
authors: ["Nikolaos Nikolaou"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23630v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Overparameterized learners can fit noisy training labels perfectly and still predict well, which neither classical complexity measures nor information-theoretic generalization bounds explain. We develop an information-theoretic framework that separates two things an interpolating learner does with its sample: storage, the information the trained model retains about its training labels, and expression, the information about the sample that reaches its predictions at fresh inputs. We first characterize the ideal model: for a loss l, the least complex l-sufficient representation is the Bayes act, whose entropy is the minimal sufficient complexity; this generalizes, and corrects, an earlier "lossless maximal compression" view of boosting. We then show that every interpolator stores exactly nH(Y|X) bits of label noise, so storage, and bounds built on it (including CMI bounds), cannot tell interpolators apart. Expression can: excess risk is bounded above and below by the expressed information V, the entropy over training samples of the prediction at an input, plus a modal-bias term, exactly so for binary labels. Benign overfitting is therefore vanishing expression, a picture that covers nearest-neighbour rules, averaging, minimum-norm least squares and double descent, and that links V to classical bias-variance decompositions and to model disagreement. Finally, V gives a model-selection criterion that needs no held-out labels. Among overparameterized learners on 15 noisy datasets, V estimated from two disjoint halves has 60% less regret than holdout validation at the same cost and matches 5-fold cross-validation at a quarter of its cost; at matched cost it also beats selection by conditional mutual information. We characterize when it fails and give remedies. Code: https://github.com/nnikolaou/GLMC
