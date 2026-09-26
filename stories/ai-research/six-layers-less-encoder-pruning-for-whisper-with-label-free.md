---
title: "Six Layers Less: Encoder Pruning for Whisper with Label-Free Recovery"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.27980"
authors: ["Rasmus Aagaard", "Nicki Skafte Detlefsen"]
date: "2026-09-22T20:00:00.000Z"
score: 38
guid: "2609.27980"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.27980.png"
generated: "2026-09-26T22:52:50+05:30"
---

Pruning large pre-trained transformer-based ASR models such as OpenAI's Whisper has seen great adoption, as pruning the decoder led to significant end-to-end transcription speedups. For instance, the {\tt whisper-large-v3-turbo} variant reduced the decoder from 32 to 4 layers, while Distill-Whisper similarly reduced the decoder to only 2 layers. Although some attention has been put towards reducing the size of the encoder, no approach has seen wide adoption. This could be due to the need for custom inference implementations to take advantage of the compressed model. We present an approach that ranks encoder layers by the leave-one-layer-out change in Word Error Rate (WER). The six layers that cause the least change are removed, corresponding to 18.5% of the encoder stack. The pruned model requires no custom inference code as it is simply a more shallow encoder with fewer layers. We further distill using unlabeled monolingual speech data to recover performance degradation caused by the zero-shot layer pruning. Mean WER across four languages increases to 20.1% after distillation, compared to 21.9% zero-shot, going from a baseline of 18.2%. We release all of our code (https://github.com/rasgaard/whisper-encoder-layer-prune) and the pruned model (https://huggingface.co/rasgaard/whisper-large-v3-turbo-encoder-pruned).
