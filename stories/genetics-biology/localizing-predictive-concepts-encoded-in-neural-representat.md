---
title: "Localizing predictive concepts encoded in neural representations via hierarchical testing"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41046"
authors: ["Viktoriia Huryn, Marco Simnacher, Jim Berend, Wojciech Samek, Christoph Lippert, Sonja Greven, Uwe Ohler"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2610.41046v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Understanding which regulatory sequence motifs a genomic deep learning model has learned, with statistical error guarantees, is essential for trusting its use in downstream tasks such as variant effect prediction. Existing approaches to identifying which units in a trained network encode human- understandable concepts fall into two groups. Exploratory methods rank and visualize units but offer no statistical guarantee that the selected units are associated with the prediction target across the population of inputs. Testing-based methods test only single units or one pre-defined set of them, and do not control the error across the many sets of units. We introduce CUTTIE (Cluster-tree Unit Top-down Testing of Independence with Error control), which clusters the units of each layer into a tree and tests the clusters top-down with conditional independence tests, localizing information about the target while controlling the family-wise error rate. Thereby, we identify clusters that carry information about the target beyond the rest of the layer. For the units in the identified clusters, conditional attribution maps then reveal what motifs they encode. In a controlled simulation, the procedure identifies the clusters whose concepts affect the target. We apply the procedure to a convolutional model predicting cell-type-specific chromatin accessibility from DNA sequence, where the concepts encoded in the identified clusters map onto known regulatory motifs.
