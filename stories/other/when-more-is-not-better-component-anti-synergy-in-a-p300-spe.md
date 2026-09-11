---
title: "When More Is Not Better: Component Anti-Synergy in a P300 Speller"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10961"
authors: ["Lucas Yang, Rui Liu, Fusheng Wang"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10961v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10961v1 Announce Type: new Abstract: P300 brain-computer interface (BCI) spellers can provide hands-free communication for people with severe motor impairments. Modern pipelines combine multiple individually promising components, often assuming that 'more-is-better'. We tested this assumption using a four-component full-factorial experiment varying the inclusion of Euclidean Alignment (EA), xDAWN spatial filtering, subject calibration, and language model priors on a public P300 dataset. Performance was evaluated using accuracy, repetitions, and information transfer rate (ITR) with mixed-effects models. Results show that the value of components is conditional rather than additive. Calibration was the strongest singular contributor, while EA compensated for its absence in zero-calibration settings. Adding independently useful components could also reduce performance, revealing component anti-synergy. Contrary to conventional wisdom, LM support was not universally beneficial: its effect depends strongly on the strength of the underlying EEG pipeline, while results from a larger LM showed a similar pattern. Together, these findings challenge maximal 'all-on' pipeline design and highlight the value of selecting spatial and language-support components according to the quality of available EEG evidence.
