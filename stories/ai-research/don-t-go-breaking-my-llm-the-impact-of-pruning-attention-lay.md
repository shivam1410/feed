---
title: "Don't Go Breaking My LLM: The Impact of Pruning Attention Layers on Explanation Faithfulness and Confidence Calibration"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24970"
authors: ["Pietro Tropeano, Maria Maistro, Tuukka Ruotsalo, Christina Lioma"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24970v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24970v1 Announce Type: new Abstract: Pruning Large Language Models (LLMs) reduces memory and inference costs by removing parts of the network, producing smaller models that retain most of their accuracy. As attention layers are the most resource-intensive parts of LLMs, pruning them is a promising compression strategy. Prior work shows that up to 33% of attention layers can be pruned with minimal accuracy loss. Nevertheless, the impact of attention pruning on model interpretability, specifically faithfulness and confidence calibration, remains unstudied. To address this gap, we study how pruning attention layers affects explanation faithfulness and confidence calibration across five LLMs and eight datasets. While the pruned models often maintain high accuracy, we find that their faithfulness and calibration often degrade. Notably, faithfulness and calibration can fluctuate significantly, even when accuracy remains stable, highlighting a misalignment between model confidence, interpretability, and accuracy. Our findings suggest that layer pruning can affect LLMs' interpretability and reliability in ways not captured by accuracy and efficiency measures alone. We recommend including explainability and calibration metrics when evaluating pruned models.
