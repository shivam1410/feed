---
title: "A Theoretical Framework for Understanding and Building \"Any-task inference\" Capable Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40934"
authors: ["Matthew McDermott, Florent Pollet, Payal Chandak, Gregory Kondas, Liat Friedman Antwarg, Noa Dagan, Isaac Kohane"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2610.40934v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

In this work, we provide a formal framework and mathematical definition for the subset of foundation models focused on enabling the property of "any-task inference" (ATI) (similar to zero-shot inference), rather than those designed for pre-training fine-tuning. To achieve this mathematical definition, we formalize the notion of a "space of tasks of interest," which we include in the problem domain, then provide an interface-based formal definition for ATI foundation models as those that map samples of data $x$ and tasks $t$ to predictions over the space of labels directly. While simple, this definition allows us to show that all ATI foundation models can be decomposed through a "universal task reduction" lens into encoder, model, and decoder aspects. We can leverage this decomposition to also decompose foundation model error into terms corresponding to different aspects of this reduction, stratified into a collection of "design terms," which are theoretical properties that can inform one of whether a particular proposed ATI foundation model can achieve optimality or not due to the structure of the proposed task reduction, and "realized model excess" terms which capture interactions between learned and programmatic components of foundation model systems. Lastly, we can use this perspective to offer two "prototypical" recipes for realizing ATI foundation models in diverse domains, which we term generative and discriminative variants of ATI foundation models. This exercise is grounded throughout by 5 real-world examples of foundation models in different settings, varying greatly in how these capabilities are realized, showing the applicability of this definition to real-world settings.
