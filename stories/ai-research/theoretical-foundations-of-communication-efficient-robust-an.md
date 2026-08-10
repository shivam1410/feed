---
title: "Theoretical Foundations of Communication-Efficient, Robust, and Practical Distributed and Federated Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06563"
authors: ["Grigory Malinovsky"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.06563v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06563v1 Announce Type: new Abstract: Machine learning and optimization have advanced together, with practical demands motivating new theory and theoretical breakthroughs enabling new applications. Modern large-scale training relies on classical optimization principles, but the constraints of distributed systems require these foundations to be reconsidered. This thesis addresses seven challenges at the intersection of theory and practice, focusing on key bottlenecks in federated learning and distributed optimization. First, we introduce ProxSkip and prove that local gradient steps can accelerate communication, providing a theoretical foundation for this widely used heuristic. Second, we develop Variance Reduced ProxSkip, which eliminates the neighborhood error of stochastic local updates while balancing communication and local computation. Third, we show that local steps retain their communication acceleration under partial client participation. Fourth, we prove that server-side stepsizes and sampling without replacement improve convergence in heterogeneous settings. Fifth, for Random Reshuffling, we demonstrate that compressing gradient differences rather than gradients yields better theoretical and practical performance. Sixth, we establish that Byzantine robustness and partial participation can be achieved simultaneously using gradient-difference clipping. Finally, we develop the first theoretical framework for low-rank adaptation based on randomized asymmetric chains, providing new insights into fine-tuning large models. Across these contributions, we introduce novel algorithmic frameworks, establish sharp guarantees under realistic assumptions, and support the theory with numerical experiments.
