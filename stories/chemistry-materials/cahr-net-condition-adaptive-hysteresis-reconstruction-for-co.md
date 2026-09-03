---
title: "CAHR-Net: Condition-Adaptive Hysteresis Reconstruction for Compact and Interpretable Magnetic Core Loss Modeling"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01991"
authors: ["Chunye Gong, Cong Yao"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.01991v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01991v1 Announce Type: new Abstract: Magnetic core loss originates in the hysteresis loop: the energy dissipated per excitation cycle equals the loop area, and frequency, temperature, and waveform shape set the loss by reshaping the loop geometry. Most existing models let these conditions act only on a terminal scalar - empirical equations fold them into fitted exponents, and data-driven predictors append them to encoded features - so no intermediate hysteresis representation remains for the conditions to reshape. This paper proposes CAHR-Net, a condition-adaptive hysteresis reconstruction network that injects the operating conditions where they physically act. It preserves the interpretable chain from flux density waveform to magnetic field reconstruction, loop-area integration, and power loss estimation, and uses feature-wise linear modulation to inject frequency, temperature, and waveform statistics into the intermediate reconstruction representation. A matched large-batch training protocol based on AdamW, cosine scheduling, and a staged reconstruction-to-power-loss objective is also reported, because the modulation pathway takes effect only within it. On the MagNet final A-E material protocol, CAHR-Net attains an average p95 relative error of 6.89% with only 1874 parameters, the lowest among all compared methods, together with a lower worst-material p95 than the strongest black-box solution at about 48x fewer parameters; it reduces the average p95 of the physical reconstruction backbone from 7.47% to 6.89% and the p95 of material D, the most difficult material, from 16.40% to 14.87%. Ablation and condition-slice analyses attribute the improvement to the coupling of physical loop reconstruction, structured condition modulation, and the matched optimization trajectory.
