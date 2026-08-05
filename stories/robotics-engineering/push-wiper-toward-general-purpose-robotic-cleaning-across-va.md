---
title: "Push-Wiper: Toward General-Purpose Robotic Cleaning across Varied Stains and Surfaces with Segmented Pushing Trajectories"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.00730"
authors: ["Renhao Lu", "Mingxin Wang", "Chenyang Cao", "Yang Yang", "Guoping Pan", "Kangkang Dong", "Yi Cheng", "Houde Liu"]
date: "2026-07-31T20:00:00.000Z"
score: 65
guid: "2608.00730"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.00730.png"
generated: "2026-08-05T20:00:21+05:30"
---

Viscous stains, characterized by high viscosity and complex rheological properties, remain a major challenge for robotic surface cleaning. Conventional wiping often spreads the stain, while scrubbing provides stronger friction but risks damaging the surface. In this paper, we propose Push-Wiper, a framework that reformulates viscous stain cleaning as an aggregation problem. Push-Wiper employs a sponge to progressively gather stains through segmented pushing trajectories, followed by a post-processing phase that detaches the aggregated material and enables sponge self-cleaning. We adopt a stepwise strategy for stain gathering and leverage Diffusion Policy to generate adaptive pushing action sequences. These sequences are executed through our Arbitrary Surface Pose Interpolator (ASPI) and a hybrid force-position controller, allowing the method to generalize to stains with diverse spatial distributions. Push-Wiper achieves a cleaning score (CS), defined as the percentage of stain area removed, up to 130% higher than baseline methods. Without additional training, Push-Wiper also transfers in a zero-shot manner to solid residues, liquid spills, unseen viscous stains, and curved surfaces with varying geometries. Our experiments demonstrate the cleaning effectiveness of Push-Wiper and its strong generalization ability. The project website is available at https://push-wiper.github.io/.
