---
title: "Reinforcement Learning for Continuous-Time Jump Markov Decision Processes with Applications to Network Dynamic Pricing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20680"
authors: ["Huiling Meng, Ningyuan Chen, Xuefeng Gao"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2608.20680v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20680v1 Announce Type: new Abstract: We study reinforcement learning (RL) in Continuous-Time Jump Markov Decision Processes (CTJMDPs) featuring general discrete state spaces (which need not possess a vector space structure) and continuous/discrete action spaces. The setup covers many well-known applications in operations such as multi-product dynamic pricing with capacitated resources (Gallego and van Ryzin 1997). To model the exploration-exploitation tradeoff, we formulate an entropy-regularized continuous-time control problem with stochastic policies. Recent continuous-time RL techniques such as $q$-learning for controlled diffusions in (Jia and Zhou 2023) focus on continuous state spaces $\mathbb{R}^d$ and rely heavily on semimartingale theory in $\mathbb{R}^d$ for their theoretical analysis. Consequently, their methods cannot be directly applied to CTJMDPs with general discrete state spaces, which may lack the algebraic addition and subtraction structures inherent to Euclidean spaces. To bridge this gap, we establish the theoretical foundations of $q$-learning for CTJMDPs and develop model-free $q$-learning algorithms. Compared to na\"{i}ve time discretization and approximating CTJMDPs using discrete-time MDPs, our approach has several conceptual and empirical benefits. Numerical experiments in network dynamic pricing (Gallego and van Ryzin 1997) show that our proposed RL algorithm reliably learns near-optimal policies and consistently outperforms standard benchmark methods, demonstrating superior solution quality and effective scalability to large-scale network instances.
