---
title: "M$^2$Weather: A Benchmark for Joint Multi-Station and Multi-Variable Weather Forecasting"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00370"
authors: ["Rongwen Li, Xiao Wang, Mingyang Wang, Hongwu Liu, Changjian Chen, Zhuo Tang, Kenli Li"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 80
guid: "oai:arXiv.org:2610.00370v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Station weather forecasting is fundamentally shaped by both complex spatial dependencies across stations and strong physical coupling among weather variables. However, existing studies often consider these relationships separately and use different datasets and experimental settings, hindering systematic assessment of their individual and joint contributions. In this paper, we introduce $M^2$Weather, a benchmark for joint multi-station and multi-variable weather forecasting. Through multi-criteria quality control and station stratification, we collect 2,809 high-quality stations with 5 physically coupled weather variables across three spatial scales: France, Europe, and Global. This multi-scale design lets us examine whether conclusions persist from national to global station networks. We also introduce unified training and evaluation protocols to enable fair comparison of different station-variable modeling paradigms. To further examine the benefits of modeling station-variable relationships, we design a lightweight, plug-and-play adapter. With a trained weather forecasting model, this adapter can introduce missing station or variable relationships without retraining the model. This enables fair and efficient investigation of station-variable relationships. Systematic evaluation of 16 representative models shows the benefits of jointly modeling station and variable relationships. Completing missing relationships further reduces MSE for all adapted models on all three datasets. Together, these results identify the complementary information across stations and variables as an important resource for improving station weather forecasting. Our code can be obtained at https://github.com/hnu-vis/M2-Weather.
