---
title: "Massive Activations Are Architecturally Robust: A Controlled Scratch/Commitment Residual Stream Test"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20743"
authors: ["Maruthi Vemula (University of North Carolina at Chapel Hill)"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20743v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20743v1 Announce Type: new Abstract: Trained transformers reliably develop massive activations, a small number of hidden dimensions whose magnitude is far above the median and which concentrate on the sequence-start token. Whether these outliers are a removable artifact of the residual stream's overloaded read and write role, or instead a functional necessity, is actively debated. We test the artifact hypothesis directly, with an architectural intervention. Our architecture, Ledger Residuals, splits the residual stream into a mutable scratch stream (Deliberation) that intermediate computation may freely overwrite and a protected, decode-only accumulator (Commitment) that holds the representation the model reads out. If massive activations exist only because one stream is forced to be both scratchpad and answer, then a dedicated answer channel should remove the need for them. We find that it does not. In matched-loss language models at the 160M and 290M scales, the model rebuilds the canonical fixed-dimension, start-token outlier inside the protected channel. The rebuilt feature is smaller in magnitude than in a standard transformer but more sharply concentrated on the start token, and a stronger sparsity penalty makes it more persistent and more concentrated still, rather than removing it. Massive activations therefore look architecturally robust: they re-emerge in whichever representation the model decodes from, which is what we would expect if they are functional rather than incidental. We release our architecture and measurement code.
