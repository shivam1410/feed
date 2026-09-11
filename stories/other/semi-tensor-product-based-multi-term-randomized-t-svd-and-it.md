---
title: "Semi-Tensor Product-Based Multi-Term Randomized T-SVD and Its Visual Applications"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11168"
authors: ["Xingchen Xiao (School of Mathematics and Statistics, Southwest University, Chongqing, China), Feng Zhang (School of Mathematics and Statistics, Southwest University, Chongqing, China), Wenjin Qin (School of Mathematics and Statistics, Southwest University, Chongqing, China), Jianjun Wang (School of Mathematics and Statistics, Southwest University, Chongqing, China)"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11168v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11168v1 Announce Type: new Abstract: Tensor singular value decomposition (T-SVD), which is built upon the tensor-tensor product (t-product), has emerged as a powerful tool for processing high-dimensional visual data such as color images and videos. However, the standard t-product imposes strict dimensional compatibility constraints. Although extensions based on the semi-tensor product (STP) relax this restriction, their single-term formulations still suffer from limited approximation accuracy. Moreover, these deterministic methods incur high computational costs when processing large-scale tensor data. To address these issues, this paper introduces a novel semi-tensor product for third-order tensors under the t-product framework induced by arbitrary invertible linear transforms. The resulting tensor semi-tensor product breaks the rigid dimension matching requirement of the standard t-product, while retaining the closed-form property of T-SVD. Based on this construction, we develop a multi-term semi-tensor product singular value decomposition (MSTP-SVD), which integrates multiple orthogonal decomposition terms to significantly improve low-rank approximation accuracy compared with single-term schemes. To reduce the computational cost of multi-term modeling, we incorporate randomized projection and power iteration techniques into the MSTP-SVD framework, yielding an accelerated multi-term randomized semi-tensor product SVD (MRSTP-SVD) algorithm that achieves a balance between reconstruction accuracy and computational efficiency. Experiments on image and video compression and completion tasks demonstrate the effectiveness of the proposed method.
