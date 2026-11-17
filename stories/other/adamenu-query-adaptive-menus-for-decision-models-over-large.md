---
title: "AdaMenu: Query-Adaptive Menus for Decision Models over Large Label Spaces"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.19005"
authors: ["Jiangze Yan, Yi Shen, Jieyun Huang, Wenjing Zhang, Zhaoxiang Liu, Ning Wang, Kai Wang, Shiguo Lian"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.19005v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Decision models such as Jev return probabilities over caller-defined options and are increasingly used for classification. Large label spaces challenge both accuracy and scalability: larger menus can impair decisions, increase input costs, and exceed option limits. Hierarchical classification reduces menu size but introduces serial calls and error propagation. We propose AdaMenu, which builds a compact candidate menu from retrieved labeled examples and makes a single decision-model request. Its candidate labels adapt to the query, and its default setting also adjusts menu size using aggregated retrieval scores. We evaluate AdaMenu with open and closed decision models on four label sets containing up to 1,016 labels. It outperforms TypeSafe's beam-search baseline on all 16 model and label-set pairs where both methods run, improving accuracy by 16.6-34.3 percentage points. Relative to the full menu on the three smaller label sets, accuracy differences range from -0.5 to +7.2 percentage points, while input token usage falls by factors of 3.2-22.9. AdaMenu also runs when option limits exclude the full menu, including settings where the hierarchical baseline is unavailable.
