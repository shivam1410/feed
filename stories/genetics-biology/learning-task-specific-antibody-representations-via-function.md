---
title: "Learning Task-Specific Antibody Representations via Function-Aware Masking"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00518"
authors: ["Ayan Goel, Thomas A. Walton, Amirali Aghazadeh"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.00518v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00518v1 Announce Type: new Abstract: Antibody-specific language models pretrained via masked language modeling (MLM) learn representations that are critical for downstream sequence design and property prediction tasks. Yet, the corruption process itself is rarely leveraged as a source of inductive bias during pretraining. While preferentially masking complementarity-determining regions (CDRs) improves binding-related predictions, antibodies possess diverse biological priors over a variety of functions. Herein, we introduce function-aware masking, a family of pretraining algorithms that align mask placement with specific functional priors (e.g., from IMGT annotations or structure predictions) to shape the learned representation space. We show that these specialist masking strategies significantly improve performance on their respective objectives, yielding up to a 14% gain on structure-related tasks and up to a 5.9x improvement on CDR-related tasks. To further improve performance across multiple functional axes, we develop hybrid masking strategies that integrate multiple priors, balancing reconstruction over binding, structural, and biophysical objectives. Our results demonstrate that informed mask placement provides a parameter-free mechanism for imposing functional inductive biases in antibody language model training.
