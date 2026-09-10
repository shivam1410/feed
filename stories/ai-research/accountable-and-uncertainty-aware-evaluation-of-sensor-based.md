---
title: "Accountable and uncertainty-aware evaluation of sensor-based AI under distribution shift: devices, subjects, and nearly three years underground"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09257"
authors: ["Benny Platte (Mittweida University of Applied Sciences), Rico Thomanek (Mittweida University of Applied Sciences), Christian Roschke (Mittweida University of Applied Sciences), Marc Ritter (Mittweida University of Applied Sciences)"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.09257v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09257v1 Announce Type: new Abstract: Sensor-based AI systems are rarely operated under the conditions under which they were trained: devices, personnel and recording epochs change, and each change degrades performance in ways a random train-test split cannot reveal. We propose a staged, accountable evaluation protocol that treats the evaluation of a deployed model as a measurement with declared reference levels and a quantified uncertainty. Four cumulative generalisation stages hold out devices, subjects and time. Each stage is judged on quantiles of repeated trainings against chance references with the correct class count, an out-of-present-scope rate exposes silent misdirection towards classes that are no longer present in deployment relative to training, and an explicit decision rule ties roll-out decisions not to means but to 5% quantiles. We demonstrate the protocol on infrastructure-free geomagnetic localisation with smartphone-based recurrent classifiers in two real underground mines, including a replication of the scheme's training stages at the second site. Unchanged models are re-evaluated on data recorded 34 months after the training campaign, on a device generation unknown at training time and with a held-out surveyor. The 5% quantile of their present-conditioned precision there is 0.39 over 299 repeated trainings, 16.5 times the chance level; across the composition of the 42 reachable location classes the figure varies by +/-0.08, several times the spread between repeated runs. Repeated trainings of a single configuration show why means mislead: a bimodal configuration passes a mean-based test decisively while its 5% quantile lies more than an order of magnitude below chance.
