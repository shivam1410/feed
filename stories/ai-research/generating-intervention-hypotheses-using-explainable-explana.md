---
title: "Generating Intervention Hypotheses using Explainable Explanations on Graphs: G2I, a Two-Stage Greedy Framework"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.23835"
authors: ["Mulin Tian, Ajitesh Srivastava"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.23835v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.23835v1 Announce Type: new Abstract: Real-world decision-making in public health and social science can greatly benefit from predictive models, yet translating predictions into effective interventions requires explaining the model behavior. While Graph Neural Networks (GNNs) are well-suited for modeling relational data, existing explanation methods largely operate at the node level and fall short of supporting actionable, network-level intervention design. Existing counterfactual GNN explainers, such as CF-GNNExplainer and CF$^2$, rely on continuous mask optimization over features and edges, which implicitly assume feasible edge manipulation, may allocate effort to immutable or non-actionable attributes, and incur substantial computational overhead. Further, the method of arriving at the explanation itself is difficult to explain to a domain specialist who is not an AI expert. Can simple methods generate good explanations? To explore this, we reframe counterfactual explanation as an intervention design problem. At the local level, we generate counterfactuals via a greedy search that directly identifies minimal, actionable changes to node features and neighbor-level conditions. We derive conditions under which the greedy search provides guarantees, and empirically show that these conditions are approximately met. These counterfactuals are converted into interpretable rules suitable for real-world intervention. At the network level, we formulate intervention selection as a Disjunctive Normal Form (DNF) coverage problem under a budget constraint, which is nondecreasing and approximately submodular, enabling a greedy algorithm with theoretical guarantees. Experiments on synthetic graphs and real-world suicide risk networks demonstrate that our approach produces scalable, cost-effective intervention strategies with significantly improved efficiency over mask-based counterfactual methods.
