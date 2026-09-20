---
title: "Srijika: OpenType-Layout-Reusing Font Restyling for Nine Indic Scripts"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.05661"
authors: ["Anil Pai"]
date: "2026-09-03T20:00:00.000Z"
score: 38
guid: "2609.05661"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.05661.png"
generated: "2026-09-20T21:43:11+05:30"
---

Srijika automatically generates installable OpenType fonts for nine Brahmic scripts: Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, and Odia. The system produces 66 total fonts—57 curated presets and nine open-vocabulary showcase fonts. Rather than creating glyphs from scratch, Srijika restyles glyphs from existing template fonts while preserving OpenType shaping consistency across hundreds of conjuncts and variants. A retrieval index selects styles from approximately 650 open-license font families, and a diffusion model redraws template glyphs in selected styles. All output fonts pass the OpenType Sanitizer and preserve correct glyph-ID sequences, solving the central challenge of Indic font generation: maintaining consistency across complex typographic variations while ensuring correct shaping behavior.
