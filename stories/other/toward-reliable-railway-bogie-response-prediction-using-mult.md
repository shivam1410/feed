---
title: "Toward Reliable Railway-Bogie Response Prediction Using Multifidelity TDNN and Physics-Informed Residual Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12018"
authors: ["Gyeolhee Lee, Moosun Kim, Taewook Kwon, Jaehun Kim, Dongjin Lee"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12018v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12018v1 Announce Type: new Abstract: Railway engineers need simulation models that predict vehicle responses across operating scenarios that cannot be tested exhaustively. Agreement with representative measurements provides essential evidence, but calibration at a limited set of conditions does not guarantee accuracy elsewhere. We present a multifidelity railway-bogie response-correction method that treats multibody simulation histories as low-fidelity information and roller-rig measurements as high-fidelity evidence. This method combines an experiment-anchored fidelity assignment with physics-informed discrepancy learning for multichannel bogie-response histories. A time-delay neural network (TDNN) represents the condition-dependent simulation trend, and development-fitted amplitude alignment defines the low-fidelity baseline. A residual-correction network then models the reproducible response component not explained by this baseline and adds it to the baseline. An effective dynamic-balance equation constrains the learned discrepancy by representing differences in inertia, damping, stiffness, and external forcing between the simulated and physical systems. The training objective combines this constraint with residual matching, temporal smoothness, and selectively applied displacement-acceleration consistency terms. For the evaluated reconstruction case, the corrected response gives a mean coefficient of determination of 0.8197, a mean normalized root-mean-square error (NRMSE) of 4.6055 %, and a mean normalized mean absolute error (NMAE) of 1.9297 %. These results provide initial evidence of accurate response prediction at the held-out 385 km/h condition.
