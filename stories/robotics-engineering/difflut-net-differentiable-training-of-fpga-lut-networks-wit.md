---
title: "DiffLUT-Net: Differentiable Training of FPGA LUT Networks with Learnable Connectivity"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09254"
authors: ["Jiaqi Ye, Xinrui Gong, Jingcun Wang, Olga Kondrateva, Bing Li, Grace Li Zhang"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09254v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09254v1 Announce Type: new Abstract: Field-programmable gate arrays (FPGAs) enable efficient neural-network inference, but most deployment flows either accelerate multiply-accumulate operations or convert pretrained quantized models into lookup tables (LUTs). We present DiffLUT-Net, an FPGA-native network connected by six-input LUTs that are trained from scratch. We jointly learn the 64 truth-table entries of a LUT and the source to each of its six input ports using a differentiable LUT function relaxation and hardware source selection. After training, the truth tables and connections are discretized, unused logic can be pruned, and the network is exported directly as synthesizable Verilog. Across five benchmarks, DiffLUT-Net achieves favorable accuracy-resource trade-offs. These results demonstrate the effectiveness of jointly learning LUT functions and sparse connectivity for compact FPGA-native inference. The code is available at https://github.com/TUDa-HWAI/DiffLUT-Network.
