---
title: "On Locality and Length Generalization in Visual Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.09061"
authors: ["Pulkit Madan", "Sanjay Haresh", "Reza Ebrahimi", "Sunny Panchal", "Apratim Bhattacharyya", "Roland Memisevic"]
date: "2026-07-09T20:00:00.000Z"
score: 70
guid: "2607.09061"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.09061.png"
generated: "2026-07-20T19:05:49+05:30"
---

A striking feature of the human visual system is that it ingests visual information through a series of local foveated glimpses, rather than a single global computation. This makes human vision distinctly different from most popular computer vision models in use today, which input images globally and in a single shot. A natural question therefore is whether local, sequential vision models may provide any fundamental computational benefits in addition to being biologically more plausible than global models. In this work, we investigate this question from the perspective of visual state tracking and length generalization. Inspired by recent studies of length generalization in language models, we study the behavior of vision models trained on simple vision tasks that require the aggregation of local information across an image. Our experiments reveal that, similar to language models, vision models can learn to exploit global shortcuts and thereby fail to generalize over task length or complexity. We also show that recurrent vision policies based on strictly local perception can mitigate these failures, thereby allowing models to generalize on these tasks. Our results show that local attention may be an essential overlooked requirement for robust compositional generalization.
