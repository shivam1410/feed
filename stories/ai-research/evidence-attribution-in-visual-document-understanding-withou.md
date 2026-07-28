---
title: "Evidence Attribution in Visual Document Understanding without Coordinates or Region Labels"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.24651"
authors: ["Zhuchenyang Liu", "Yao Zhang", "Yu Xiao"]
date: "2026-07-26T20:00:00.000Z"
score: 65
guid: "2607.24651"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.24651.png"
generated: "2026-07-28T19:07:22+05:30"
---

Reliable visual document understanding requires a model to attribute each answer to the evidence regions that support it. Recent benchmarks and systems express this step through a coordinate interface: the model outputs the coordinates of bounding boxes that mark the evidence regions in the document. Under this interface, vision-language models often fail to identify the right regions even when the answer is correct, a failure known as Attribution Hallucination. We present a study that investigates whether this failure is partially limited by what the model can express through coordinates. On a verified bilingual CiteVQA subset, we compare the coordinate interface with a language interface in which the model outputs only text, quoting its evidence verbatim, and a multimodal retriever returns the location of each quote as a page region proposed by a layout parser (tables and figures are quoted through their captions or notes); the comparison is repeated over six open vision-language models. Compared with the coordinate interface, evidence recall rises from at most 8 points to between 26 and 47 and the hallucination rate roughly halves, with little change in answer quality. Building on this comparison, we use the same quote-and-retrieve pipeline as a training scaffold: because region-level evidence labels are expensive to collect for long documents, we introduce a GRPO recipe whose reward is a judge's reading of the gold answer and crops of the retrieved regions, training the model to quote better evidence without any region labels and raising an 8B backbone's strict attributed accuracy from 22.4 to 33.8. These findings indicate a practical path to improve attribution"without a coordinate interface and without costly region-level supervision.
