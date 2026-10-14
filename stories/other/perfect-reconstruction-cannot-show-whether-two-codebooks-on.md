---
title: "Perfect Reconstruction Cannot Show Whether Two Codebooks on a VAE's Latent Space Agree"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14012"
authors: ["Yusuke Hayashi"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14012v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Many systems read the latent space of a variational autoencoder (VAE) as discrete codes, and rely on each latent being read back as the code it was written as. Shannon (1948) took such a shared codebook as given; inside a VAE nothing enforces it. We prove that no item of a standard training report can reveal whether the written and read codes agree on encoded data. We construct two VAEs that reconstruct every input perfectly, infer exactly, and match on every per-example ELBO and every code histogram, yet agreement is one in the first and zero in the second. We then show that the ELBO's own terms bound how far a measured agreement can move: the variational gap bounds the shift to exact inference, and the rate bounds the shift to generation from the prior. For Gaussian posteriors, a mean-field encoder pays an exact price in the gap that depends on its choice of axes. On probabilistic PCA the gap certifies a trained encoder in all 75 settings we test, at agreement between 0.76 and 0.97. On 240 trained VAEs, a floor set by the rate and the dataset size rules out rate-side certification in advance for 66 models, and none of them certifies. The results yield a simple protocol, Certify-or-Measure, for any pipeline that reads a VAE as codes.
