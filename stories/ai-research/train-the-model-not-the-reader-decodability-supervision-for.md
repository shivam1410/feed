---
title: "Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20379"
authors: ["Hiskias Dingeto"]
date: "2026-07-21T20:00:00.000Z"
score: 78
guid: "2607.20379"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20379.png"
generated: "2026-07-26T22:35:53+05:30"
---

Standard natural-language autoencoders evaluate explanation faithfulness via reconstruction but lack structural sensitivity: flipping false claims that don't affect reconstruction incurs no penalty. On Qwen-2.5-7B, explanations reconstruct well while only ~2% of specific claims are reconstruction-dependent, meaning scores track gist, not facts. Under synthetic ground truth, standard training develops co-adapted private codes in 5/5 runs. RECAP trains linear heads alongside the target model to keep designated content independently probe-decodable. On RECAP-trained models, fresh verbalizers state content truly, codes vanish, at 0.001-nat cost. For AI safety, RECAP makes internal content checkable against probes rather than trusting opaque reconstruction.
