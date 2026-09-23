---
title: "The Functionalizer: Lossless Functional Decomposition for Subword Tokenization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.15991"
authors: ["Connor Makowski", "Willem Guter"]
date: "2026-09-17T20:00:00.000Z"
score: 55
guid: "2609.15991"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.15991.png"
generated: "2026-09-23T19:07:00+05:30"
---

Standard subword tokenizers either treat every orthographic variation of a word (such as hello, Hello, HELLO, and Héllo) as unrelated vocabulary entries, which fragments the embedding space, or discard this variation through lossy normalization. We present the Functionalizer, a lossless pre-tokenizer framework that factors orthographic and structural variations into a compositional opcode/operand prefix stream before tokenization: a canonical base token (operand) prefixed by parametric transformation operators (opcodes) encoded in the Unicode Private Use Area. We introduce operators covering casing (CAPITALIZE), diacritics (13 dedicated opcodes), and character repetition (REPEAT, MULTIREPEAT), which are fully reversible. Across natural language and code corpora, the Functionalizer enables complete corpus coverage with significantly smaller vocabularies under unconstrained exhaustion conditions, reducing actual vocabulary slot requirements by up to 19.7%. Downstream evaluations on 98M-parameter GPT-2 models show that the Functionalizer improves Python code syntax validity (9.12% vs. 7.70%) while reducing duplicate n-gram repetition in natural language prose. These findings demonstrate that functional decomposition can be an effective mechanism for vocabulary-efficient, structurally aware language modeling, and motivate further validation at production scale.
