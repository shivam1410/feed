---
title: "Acoustic Anomaly Detection for Early Identification of Drill Jamming"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07356"
authors: ["Maria Beatriz Silva, Lucas Edson Silva de Ara\\'ujo, Sergio F. Chevtchenko, Ermeson Andrade, Danilo Araujo, Saeed Afshar"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07356v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

In the context of Industry 4.0, predictive maintenance is essential to minimize unplanned downtime and ensure operational safety. In machining processes, drill jamming is a critical failure that compromises both workpiece quality and tool integrity. This work proposes an acoustic anomaly detection system using ultrasonic sensors to identify pre-failure patterns in Computer Numerical Control (CNC) machining. We release a public dataset of time- and frequency-domain acoustic features from 17 drills, and benchmark semi-supervised autoencoder-based normality modelling against supervised XGBoost classification using Leave-One-Drill-Out validation. The results demonstrate that the Autoencoder is highly effective for industrial safety, achieving a Recall of 1.00 and a consolidated F1-score of 0.81. Furthermore, the threshold-independent analysis shows that the Autoencoder better separates normal and pre-failure acoustic patterns, achieving a consolidated AUC of 0.8294, compared with 0.7559 for the supervised model under inter-tool covariate shift. In contrast, the supervised XGBoost achieved an average F1-score of 0.55 and failed to detect failures in some of the evaluated drills. The findings highlight that the ultrasonic spectrum provides a reliable window for identifying incipient mechanical instabilities, and the AE model offers a robust safety envelope by anticipating all jamming events across the tested drill bits.
