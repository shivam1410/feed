---
title: "Too Rare to Learn: Prescribed Cyclone Tracks Degrade a Bay of Bengal Ocean Emulator"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04635"
authors: ["Sumaiya Islam"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.04635v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04635v1 Announce Type: new Abstract: Neural ocean emulators are being proposed for regional forecasting in cyclone-exposed coastal seas, and a natural design choice is to hand the network the cyclone as a prescribed input. We test that choice in the Bay of Bengal and find it harmful. We withhold 15 whole cyclones spanning 65 to 150 kt from GLORYS12 reanalysis and compare two U-Nets that are identical except for four prescribed cyclone-track channels. Across three seeds the ocean-only model beats persistence in every run and the storm-conditioned model loses to it in every run, with the two skill ranges disjoint (p = 3.1e-5, paired across storms). The cause is exposure frequency rather than signal content: the channels are non-zero on only 7.9% of training days, so they are out of distribution the moment they activate. The extra error falls inside the prescribed storm footprint, and replacing the real cyclone map with a no-storm map at inference improves held-out storm forecasts by 7.5 to 16.4% in every seed. The conditioned network has learned a response to a rare signal that is confidently wrong.
