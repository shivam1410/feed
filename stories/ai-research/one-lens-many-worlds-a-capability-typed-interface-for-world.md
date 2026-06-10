---
title: "One Lens, Many Worlds : A Capability-Typed Interface for World-Model Interpretability"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09936"
authors: ["Bhavith Chandra Challagundla, Sanskar Pandey, Param Thakkar, Rishikesh Mallagundla, Yugandhar Reddy Gogireddy, Wenhao Lu, Hindol Roy Choudhury, Shravani Challagundla, Mohamed Deraz Nasr, Spursh Deshpande"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09936v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09936v1 Announce Type: new Abstract: World models are now built on substantially different computational substrates. Latent recurrent state-space models such as PlaNet and the Dreamer family compress observations into recurrent states; token-based models such as IRIS quantize observations into a learned codebook and predict autoregressively with a transformer; and joint-embedding predictive architectures such as I-JEPA predict in a learned latent space with no pixel decoder. The interpretability methods applied to these models, including probing, activation patching, sparse autoencoders, and surprise analysis, share a common set of primitives, yet they are re-implemented from scratch for each architecture because existing hook-and-cache tooling assumes a transformer language model with no notion of actions, environment steps, or imagined rollouts. We argue that this fragmentation reflects the tooling rather than the models, and that the shared structure of world models is captured by a small typed interface. We present WorldModelLens, an open-source interpretability substrate organized around a capability-typed adapter: every model implements four required methods (encode, transition, initial state, sample) and declares a set of optional heads (decode, reward, continue, actor, critic) through an explicit capability descriptor, so that reinforcement-learning and self-supervised world models are first-class without either imitating the other. A single hook and cache layer exposes time-indexed activations, imagination rollouts, and intervention replay over this interface, allowing each analysis to be written once.
