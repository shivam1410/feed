---
title: "AutoHebb: Self-Modifying Neural Networks that Zero-Shot Infer and Continually Learn"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40757"
authors: ["Daniel Levine, David van Dijk, Kenneth Kay"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2610.40757v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Humans and animals have a unique capacity to generalize and learn in novel circumstances, including "0-shot" inference (ZI) and continual learning (CL) -- two powerful cognitive abilities. Despite this importance, efforts to model ZI and CL are seriously limited in several ways. First, existing models typically lack components critical to ZI and CL in the brain, namely, strong inductive biases (for ZI) and autonomous control of learning (for CL). Second, models can be less tractable to analysis if model components are overly complex (lacking simplicity), or too task-restricted if model components are overly bespoke (lacking expressivity). Here we introduce autonomous Hebbian networks ("AutoHebb"), a class of online learning feedforward neural networks that realize strong inductive biases and autonomously controlled learning, and are both simple and expressive. Unlike standard models that learn via externally controlled optimization (e.g. gradient descent), AutoHebb networks combine external feedback with internally generated activity to produce a global learning signal ('neuromodulator') fed back to the network. The neuromodulator in turn gates a biologically grounded local learning rule (3-factor Hebbian rule) that updates networks' plastic weights. Using meta-learning to search for fixed (non-plastic) weights, we find that AutoHebb networks (1) succeed on ZI tasks, (2) show emergent (untrained) ZI/CL abilities, (3) admit reverse-engineering into explicit algorithms, and (4) outperform modern learning models on ZI/CL tasks. Lastly, performance comparisons to related models implied an essential role for three model components: meta-learning, Hebbian plasticity, and autonomous control of learning. These findings indicate that AutoHebb may be useful in hypothesis generation, analysis, and discovery of biologically grounded forms of learning and generalization.
