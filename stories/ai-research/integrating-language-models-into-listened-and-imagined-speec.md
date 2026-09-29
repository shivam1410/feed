---
title: "Integrating Language Models into Listened and Imagined Speech Decoding from MEG"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31997"
authors: ["Maryam Maghsoudi, Sai Samrat Kankanala, Shihab A. Shamma, Sriram Ganapathy"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.31997v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Decoding imagined speech is an important goal for brain-computer interfaces but remains challenging due to weak neural responses, low signal-to-noise ratio, and limited imagined-speech datasets. Language models provide strong contextual cues for text prediction, but how much they can help neural decoding and whether their contribution differs for decoding perceived and imagined speech remains unclear. To investigate this, we use a paired listened-imagined MEG dataset and incorporate language-model information at two stages. First, we train a contrastive neural decoder that aligns MEG representations with acoustic and contextual language representations, improving cross-subject word decoding for both listened and imagined speech. Second, at inference, we introduce a neural-constrained beam-search framework that combines neural evidence with language-model next-word probabilities. We find that imagined-speech decoding benefits more from the language model than listened-speech decoding. For Imagined speech, the best-performing balance between neural and language-model evidence shifts toward the language model, and the gain over neural-only decoding is larger. Together, these results suggest that language priors are most useful when neural evidence is weaker, making them particularly valuable for imagined-speech BCIs.
