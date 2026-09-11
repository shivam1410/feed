---
title: "Legible Failures: Detecting and Repairing In-Context Binding Errors"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11216"
authors: ["Manas Venkata Sai Ravulapalli, Samrath Singh Chadha, Abhinav M. Hari"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11216v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11216v1 Announce Type: new Abstract: A wrong answer does not show whether the model lacked the needed information or held it and failed to use it. On an entity-obligation binding task, a language model can emit an incorrect prompt-supplied binding while a linear probe can recover the correct one from its frozen hidden state. We measure how often this occurs across 16 public checkpoints, each evaluated with three seeds. We fit a probe on a training fold, select its layer on a validation fold, and report results on a disjoint test fold. On the trials each model gets wrong, probe accuracy exceeds the strict present-obligation baseline, 1/K = 0.125, by +0.196 (95% CI [+0.101, +0.296], bootstrapped over models). A query-entity counterfactual rules out token presence and recency. A score built from the sign of probe-output disagreement improves failure detection over the model's own confidence by +0.079 AUROC (95% CI [+0.036, +0.126]). Raw probe confidence gives no measurable improvement over model confidence. Steering the residual stream toward the probe-decoded binding, with no gold label, raises accuracy on all eight models tested by a mean of +0.168 (95% CI [+0.066, +0.280]). Where recent studies report that probe-detected errors are resistant to interventions, we find that in-context binding is a setting in which probes are actionable.
