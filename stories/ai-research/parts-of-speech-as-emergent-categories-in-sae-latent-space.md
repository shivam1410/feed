---
title: "Parts-of-Speech as Emergent Categories in SAE Latent Space"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29362"
authors: ["Alessandro Bondielli", "Lucia Passaro", "Serena Auriemma", "Alessandro Lenci"]
date: "2026-09-23T20:00:00.000Z"
score: 60
guid: "2609.29362"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29362.png"
generated: "2026-09-25T23:24:50+05:30"
---

Sparse AutoEncoders (SAEs) offer a promising way to inspect language model representations, but it is still unclear what kind of linguistic structure their latents expose. We use part-of-speech (PoS) categories as a controlled test case to study whether morpho-syntactic information is encoded by individual latents or by structured groups of features. We find that PoS distinctions are highly recoverable from SAE activations, but do not align with one-to-one latent / category mappings. This recoverability is not reducible to lexical memorisation, and Open and Closed PoS classes differ substantially. Categories are supported by compact groups of sparse latents, with substantial variation across tags. These groups remain stable on held-out data, while also showing overlap between related categories. Our results show that SAEs localise morpho-syntactic information in a distributed and category-dependent form rather than through atomic grammatical features.
