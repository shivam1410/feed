---
title: "Human-in-the-Loop Signature Bootstrapping for UAV Hyperspectral PFM-1 Mine Detection"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25310"
authors: ["Sagar Lekhak", "Prasanna Reddy Pulakurthi", "Emmett J. Ientilucci"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.25310"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25310.png"
generated: "2026-07-30T19:07:10+05:30"
---

Hyperspectral imaging (HSI) is useful for material discrimination, but operational mine screening also depends on how many false alarms must be inspected before targets are found. This paper studies PFM-1 landmine detection in unmanned aerial vehicle (UAV) visible and near-infrared (VNIR) HSI using spectral angle mapper (SAM), matched filter (MF), adaptive coherence estimator (ACE), and constrained energy minimization (CEM). We compare a ground-measured SVC signature, a fully informed in-scene core-pixel signature, and a simulated human-in-the-loop signature bootstrap. Besides receiver operating characteristic area under the curve and average precision, we report target-discovery curves and spatial candidate-review counts. Full-review bootstrapping reaches the fully informed in-scene signature case after all seven target regions are verified, but the required inspection effort varies strongly: ACE confirms all regions in two rounds and nine candidate inspections, whereas the SAM variants need thousands of candidate reviews for their final target locations. Code is available at https://github.com/SagarLekhak/IEEE_WHISPERS_2026_UAV_HSI_PFM1.
