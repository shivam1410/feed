---
title: "Srijika: OpenType-Layout-Reusing Font Restyling for Nine Indic Scripts"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.05661"
authors: ["Anil Pai"]
date: "2026-09-03T20:00:00.000Z"
score: 48
guid: "2609.05661"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.05661.png"
generated: "2026-09-21T19:05:57+05:30"
---

We present Srijika, a system for producing installable OpenType fonts for nine Brahmic scripts: Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, and Odia. Rather than generating fonts from scratch, Srijika restyles glyph outlines from shaping-complete template fonts. It preserves the template's cmap and GSUB closure and its GPOS data under a documented metric policy, making every output a complete font by construction. This addresses a central challenge of Indic font generation: hundreds to thousands of conjuncts, half forms, and matra variants must remain mutually consistent under OpenType shaping.
  Srijika produces 66 TTFs: 57 curated presets and nine open-vocabulary showcase fonts. All pass the OpenType Sanitizer, while HarfBuzz and CoreText reproduce the template glyph-ID sequences on conjunct-heavy probes. A full-closure audit covering 80,915 glyphs and 54,812 anchors quantifies metric changes. Natural-language style selection uses Lipika, a retrieval index over approximately 650 open-license font families. A reference-conditioned latent diffusion model redraws template glyphs in the selected style, followed by content gating, harmonization, and shaped-cluster verification with fallback to template outlines.
  We evaluate against no-learning baselines. On diffusion-training-family-held-out SSIM gates, template copying outperforms generation on 50 of 56 faces. Style movement is measurable only with an internal same-model embedding whose training corpus includes the held-out families, so these results require caution. A learned baseline, independent style metric, and human study are outside this report's scope. Our contributions are the layout-reusing formulation and pipeline, its nine-script audit and benchmark, and a negative-results catalogue covering failed conditioning, objective choices, and data-hull limits of reference-guided restyling.
