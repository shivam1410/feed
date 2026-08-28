---
title: "Algorithmic Principles For Multiclass Learning Are Hard To Come By: Limits of Regularization and Proper Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26516"
authors: ["Julian Asilis, Shaddin Dughmi, Vatsal Sharan, Alec Sun, Shang-Hua Teng, Chang Wang"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.26516v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26516v1 Announce Type: new Abstract: Two of the most fundamental questions in statistical learning theory are the following: which prediction problems are learnable, and how should they be learned? For the former, elegant answers often take the form of combinatorial dimensions. The latter question, however, has proved considerably more elusive: all known general-purpose multiclass learners rely on intricate orientations of exponentially large one-inclusion structures, and familiar algorithmic principles such as proper learning and regularization remain poorly understood. Motivated by prior work, we ask whether learning reduces to proper learning---possibly over a larger hypothesis class---and whether proper or improper multiclass learning can ultimately be captured by suitable regularizers. Our primary results answer both questions negatively, resolving three open problems from prior work. First, we exhibit a learnable multiclass problem that cannot be embedded in any properly learnable class, meaning learning cannot be reduced to proper learning by enlarging the hypothesis class. Second, we demonstrate that proper learning can require training error and characterize this phenomenon precisely: every properly learnable class admits a proper learner making $o(m)$ errors on samples of size $m$, but every prescribed sublinear scale $a_m=o(m)$ is necessary for some properly learnable problem. Third, regularization is not a general learner: we exhibit a properly learnable class that cannot be learned by any Structural Risk Minimization (SRM) learner, and a learnable class that cannot be learned by any local regularizer. We complement these impossibility results with a positive theory that gives two sufficient conditions for SRM learnability and characterizes SRM representability through integrability of revealed preferences.
