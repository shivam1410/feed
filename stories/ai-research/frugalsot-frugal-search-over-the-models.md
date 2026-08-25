---
title: "FrugalSOT - Frugal Search Over the Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21621"
authors: ["Pradheep P, Yuvanesh S, Harish KB, Keerthan Saai Reddy S, Joshva Devadas T, Naveenkumar J, Hemalatha K"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21621v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21621v1 Announce Type: new Abstract: In on-device NLP tasks, limited resources of embedded hardware, such as the Raspberry Pi 5, require efficient inference strategies. This paper introduces FrugalSOT (Frugal Search Over The Models), a resource-aware model selection architecture for on-device NLP inference. FrugalSOT estimates each request's complexity by extracting features such as prompt length, named entity density, and syntactic complexity. The request is first made to the least complex model that is likely to pass a relevance threshold. If the output of that model falls short of the threshold, the request is made to a more complex model. It is important to note that the relevance threshold undergoes continuous updates in the background. using past validation outcomes in an adaptation process using a low-pass filtering mechanism, thus imparting adaptation to changing input patterns. Experimental results achieved on a Raspberry Pi 5 show that FrugalSOT reduces average inference time and overall computational resource use to a significant extent compared to a single-model baseline approach, without compromising output relevance to the same extent as the most sophisticated model. These results confirm that adaptive model selection can enable efficient, high-quality natural language processing inference on limited devices.
