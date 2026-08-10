---
title: "Can MLLMs Decode the Creative Leap? Introducing C4 for Cross-Concept Understanding"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.06501"
authors: ["Ming Wang", "Yuqing Zhang", "Tingna Xie", "Xiangju Li", "Xiaocui Yang", "Daling Wang", "Shi Feng", "Yifei Zhang"]
date: "2026-08-05T20:00:00.000Z"
score: 55
guid: "2608.06501"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.06501.png"
generated: "2026-08-10T19:05:52+05:30"
---

Creative capabilities of MLLMs matter in design, communication, education, and human--AI collaboration, yet remain difficult to evaluate because explicit targets and reward signals are scarce compared with accuracy-oriented tasks. Cross-concept understanding is a core cognitive capacity underlying receptive creativity. It enables a perceiver to recover intended meaning from non-obvious but meaningful conceptual relations. We operationalize item construction as cross-concept encoding and model inference as cross-concept decoding. We introduce C4, a cognition-inspired evaluation framework for Chengyu (Chinese idiom)-based Cross-Concept Creativity. Its encoding component maps target slots to imageable substitute concepts along bridge paths in a manually annotated and third-party-reviewed cross-concept network, enabling batch generation with explicit structure, difficulty indexed by bridge count and depth, and exact answers. Using this framework, we instantiate the C4 Evaluation Set (C4-Eval), comprising 184 synthetic items and 37 human-created cross-concept chengyu figures collected from online sources. We manually construct and review cross-concept relations, bridge paths, and reasoning processes for the collected figures. Each C4-Eval item is instantiated in five task settings, yielding 884 primary answer-recovery cases. Across ten evaluated MLLMs, the strongest closed models reach 50.7% and 48.0% primary accuracy, while open-source models remain substantially lower. Candidate constraints improve accuracy sharply, but bridge hints and explanation requests provide only modest gains. These results expose a substantial gap in how current MLLMs decode creatively encoded meaning through cross-concept relations. The code is in the supplementary material.
