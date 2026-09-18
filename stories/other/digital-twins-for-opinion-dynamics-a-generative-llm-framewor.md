---
title: "Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19913"
authors: ["Omran Berjawi, Giuseppe Fenza, Rida Khatoun, Sherali Zeadally"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19913v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19913v1 Announce Type: new Abstract: The study of opinion dynamics in social networks is one of the key challenges in computational social science with direct relevance to understanding political polarization, misinformation, and health responses. Current approaches focus on simplified mathematical models that ignore linguistic and contextual factors related to belief updates or use Large Language Model (LLM)-based simulations that have not been validated against real data. We present a framework based on the concept of a digital twin to simulate opinion dynamics in social networks. The approach fills the gap by cloning a real-world Twitter network, assigns a set of attributes for agents (such as persona, emotions, centrality, stubbornness, and influence), and employs Mistral-7B to perform opinion update based on memory and social exposure. To evaluate the proposed approach, we validate it against two real Twitter datasets (COVID-19 discourse and U.S elections 2020). The results show that the capability of the proposed framework reproduces opinion trajectories and reduces individual prediction error by more than 50% compared to the best-performing classical baseline (Mistral-7B achieves Mean Absolute Error (MAE) = 0.150 and 0.121 on the COVID-19 and US Election 2020 datasets, respectively). We observe similar improvements in structural alignment (Delta_r = 0.120 and 0.180) and polarization dynamics (Delta_Var = 0.106 and 0.115) on the two datasets, respectively. Additionally, the ablation studies confirm that agent attributes, memory, and social exposure all contribute to the framework's predictive fidelity in reproducing opinion trajectories, with agent attributes being the most critical contributor. Overall, our results demonstrate that grounding Mistral-7B within empirically cloned interaction networks produces a realistic simulation framework capable of reproducing complex social dynamics.
