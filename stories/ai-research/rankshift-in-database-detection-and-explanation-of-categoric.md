---
title: "RankShift: In-Database Detection and Explanation of Categorical Shifts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.28922"
authors: ["Omair Shafi Ahmed"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.28922v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.28922v1 Announce Type: new Abstract: A login service can receive its usual number of failed sign-ins while one source grows from 2% to 30% of them. The same pattern appears in system logs when a rare event template becomes common while the message rate stays stable. These events change which categories are active without changing how many events occur. RankShift detects such changes inside the analytical database that stores the data. It compares each window's category shares with a benign reference using a Pearson score whose terms identify the categories responsible for the change. The same query returns the score, calibrated alert, and largest increasing contributions. We evaluate RankShift on HDFS, BGL, and Thunderbird. It matches the count-vector autoencoder within 0.001 AUROC on HDFS (0.999 versus 1.000) and leads on Thunderbird (0.983 versus 0.949). In a controlled fixed-volume experiment, RankShift detects rare-category shifts that are invisible to event-count monitoring, reaching 0.787 AUROC compared with 0.771 for the autoencoder. Across all three corpora, observed false-alarm rates track the requested operating levels. RankShift requires no model training or inference service, and the autoencoders deployed state is 137x larger.
