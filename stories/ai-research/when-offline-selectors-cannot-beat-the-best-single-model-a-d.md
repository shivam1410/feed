---
title: "When Offline Selectors Cannot Beat the Best Single Model: A Diagnostic Study on edX Dropout Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04161"
authors: ["Tyler Crosse, Alan Nadelsticher Ruvalcaba, Dustin Khang LeDuc, Thomas Trask, Nicholas Lytle, David Joyner"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2606.04161v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04161v1 Announce Type: new Abstract: Different predictors often excel on different inputs, so picking the best one per instance promises higher accuracy than committing to a single model. In practice, selectors trained from logged data routinely fail to beat the strongest single predictor. Three causes typically go unseparated before more tuning is applied: a mismatched learner, a state that does not predict which model wins, or buffer-to-deployment label shift. A three-stage diagnostic rules them out on a shared buffer. Stage~1 estimates a local ceiling on oracle recovery from $k$-NN label consistency. Stage~2 asks whether paired BC and offline-RL learners (BC, DQN, and CQL across penalty weights) reach that ceiling. Stage~3 ablates the selector state to test whether richer features would raise it. The combined verdict points to the most promising next step: tuning the learner, redesigning the state, or collecting new data. We apply it to selecting among five dropout-prediction models on edX clickstream data. Across 16 windows, the oracle beats the strongest single base model by 9.7 accuracy points on average, yet BC, DQN, and CQL land in the same test-accuracy band below it (robust to a tenfold buffer sweep and $N{=}2{,}000$ held-out examples). The bottleneck is local representational ambiguity: CQL closes the imitation gap without a deployment gain (not conservatism), regret clusters tightly across learners (not tie-breaking), and the three learners converge on test accuracy (not shift). The next iteration should change the state or collect new data, not tune the offline learner further.
