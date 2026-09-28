---
title: "Electric Vehicle Charging Station Location Selection using Geospatial Artificial Intelligence (GeoAI)"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30417"
authors: ["Eun Hak Lee, Euntak Lee"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.30417v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

As electric vehicle (EV) adoption increases, ensuring efficient and well-distributed charging infrastructure has become a critical challenge. While many EV charging station location problem (CSLP) studies focus on minimizing costs or travel distance, it is crucial to consider the surrounding geospatial characteristics of existing stations that influence operational performance. This study proposes a geospatial artificial intelligence (GeoAI)-based framework that integrates high-dimensional EV-related geospatial data, including EV usage, land-use, population, and traffic attributes. We incorporate a variational autoencoder (VAE) and a graph convolutional network (GCN) into the model to capture similarities among existing charging stations, and to identify suitable locations for future stations. The VAE compresses high-dimensional EV input data into a low-dimensional latent space, and the GCN uses this latent representation to predict locations suitable for charging stations. Using real-world data from Bryan-College Station, Texas, US, the proposed model outperforms state-of-the-art baselines, achieving an F1-score of 0.87 in distinguishing existing station locations from non-station locations. The model also identifies 27 additional candidate locations that show geospatial characteristics similar to those of existing stations, based on a similarity score. We further evaluate two policy implementation scenarios, maximizing geospatial similarity and minimizing total travel distance, each yielding different outcomes aligned with distinct strategic objectives. The findings highlight the importance of incorporating spatial context into CSLP and provide valuable insights for future EV infrastructure planning, promoting both efficiency and accessibility in the rapidly growing electric mobility sector.
