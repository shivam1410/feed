---
title: "REARL: A Closed-loop Autonomous Driving Simulation Enhancement Framework with Real Traffic Data and Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19903"
authors: ["Xiaojun Bi (Minzu University of China, Beijing, China), Jun Jiang (Minzu University of China, Beijing, China), Yiwen Sun (Peking University, Beijing, China, BIGAI, Beijing, China), Quanyi Ou (Minzu University of China, Beijing, China), Ke Cheng (Beihang University, Beijing, China), Mingjie Bi (BIGAI, Beijing, China), Yexin Li (BIGAI, Beijing, China)"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19903v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19903v1 Announce Type: new Abstract: Accurate simulation is crucial for autonomous driving development, yet capturing real-world traffic complexity remains challenging. Existing simulators that rely on predefined rules or static data playback struggle with dynamic traffic. CRITICAL uses real traffic data and a large language model (LLM) to adjust the initial simulation configuration, but the simulated distribution still diverges from real traffic as the rollout evolves. We propose REARL, a closed-loop simulation enhancement framework that integrates real traffic data with LLMs. Real traffic data are clustered, and each cluster center is used as a representative scenario that provides typical real-world traffic patterns for the LLM. A timed sliding-window detector then monitors discrepancies in vehicle speed distribution and mean spacing between pairs of vehicles. If a metric exceeds a threshold, the LLM adjusts vehicle decision-making; otherwise the existing controller is kept. The LLM also selects a matching real vehicle from a traffic snapshot and modulates the simulated vehicle with reference to that real action. In a controlled HighD highway setting, compared with the CRITICAL baseline and a PPO-based learning baseline, REARL reduces the Hellinger distance for speed distributions to 0.3067 and the MAPE for mean spacing to 0.8371, while achieving a time headway (THW) of 22.8575 and a lane change rate of 0.0708.
