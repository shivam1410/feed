---
title: "ARGUS: Attention-Guided Transformers for Scalable Person Identification Using Wi-Fi Telemetry"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14670"
authors: ["Nayan Sanjay Bhatia, Pranay Kocheta, Yuhan Li, Katia Obraczka"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14670v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14670v1 Announce Type: new Abstract: Passive, device-free person identification offers an alternative to camera- and wearable-based biometrics, yet existing wireless approaches rely largely on gait or activity cues and are rarely evaluated at scale. In this paper, we present \emph{Argus}, a passive Wi-Fi sensing system that identifies people from commodity Channel State Information (CSI) without requiring an attached device or a prescribed motion. Argus converts short CSI spans into compact \emph{statgrams}: statistical maps built from the channel views available on a given device. A lightweight decoder-only Transformer then reads coarse statgram patches as tokens, and segment-level logit aggregation combines evidence over time. On a 154-subject CSI dataset evaluated with a strict physical-segment split, Argus reaches $78.88\% \pm 1.62\%$ Top-1 accuracy on 6-second windows and $84.85\% \pm 1.31\%$ after aggregating 19 overlapping windows over a 60-second segment; Top-3 and Top-5 reach $98.61\%$ and $99.26\%$. For a 60-second statgram, Argus improves over a raw-CSI Transformer baseline by 7.75 points while using $4.4\times$ fewer FLOPs per window. Attention-guided compression preserves full single-window accuracy with only half of the EHealth patches. On WiMANS, a multi-user benchmark across three rooms and two Wi-Fi bands, Argus remains within 1.23 percentage points of the strongest per-configuration baselines on average while using $27\times$ fewer inference FLOPs. These results show that compact CSI statistics can scale passive identification while also exposing deployment limits in open-set rejection and cross-room transfer.
