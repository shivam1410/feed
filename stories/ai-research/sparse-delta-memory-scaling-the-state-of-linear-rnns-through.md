---
title: "Sparse Delta Memory: Scaling the State of Linear RNNs through Sparsity"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.07386"
authors: ["Loïc Cabannes", "Pierre-Emmanuel Mazaré", "Gergely Szilvasy", "Matthijs Douze", "Maria Lomeli", "Ilze Amanda Auzina", "Justin Carpentier", "Gabriel Synnaeve", "Hervé Jégou"]
date: "2026-07-07T20:00:00.000Z"
score: 72
guid: "2607.07386"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.07386.png"
generated: "2026-07-09T19:06:43+05:30"
---

Sparse Delta Memory is a new architecture that extends gated linear RNNs by introducing sparse addressing mechanisms to dramatically expand hidden state capacity while maintaining computational efficiency. This approach specifically targets long-context learning and retrieval tasks where standard RNNs struggle with information preservation and recall. By discretizing the addressing system into sparse patterns rather than using dense memory access, the method achieves significantly better performance on long-sequence problems and retrieval tasks. The innovation maintains the linear RNN advantage of computational efficiency while enabling scalability to context lengths previously requiring Transformer-based models, substantially expanding RNN viability for complex long-range dependencies and information retrieval.
