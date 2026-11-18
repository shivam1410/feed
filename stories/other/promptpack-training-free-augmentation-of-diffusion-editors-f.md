---
title: "PromptPack: Training-Free Augmentation of Diffusion Editors for Intent-Aligned Spatial and Semantic Control"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21865"
authors: ["Sophia Zalewski, Mustafa Munir, Enting Liu, Anjul Patney, David Dynerman"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21865v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Many image-editing tasks require confining changes to intended spatial regions while exactly preserving user-designated source content. Instruction-driven editing pipelines often leave such user-intent underspecified, while inpainting editors condition generation on explicitly defined edit support but not on the spatial assignment of individual edit concepts. PromptPack addresses both limitations by equipping diffusion editors with two explicit 'Edit Guides': an edit-role partition that labels each pixel as 'Keep,' 'Permit,' or 'Modify' to specify where edits may occur, and a regional-prompt assignment that maps spatial regions to text prompts to specify which concepts apply where. These guides may be manually specified or, for source-object edits, automatically derived from a text-grounded SAM 3 mask. Without retraining, PromptPack injects independently embedded regional prompts into the editor's fixed-length text sequence and uses the Edit Guides to spatially mask attention, gate flow updates, and restore protected source pixels. We integrate PromptPack into FlowEdit FLUX, FlowEdit SD3, and FLUX Kontext and demonstrate improved requested-concept placement and protected-content preservation across all three integrations on PIE-Bench++. In a pairwise user study, PromptPack achieves an 87% preference rate over FlowEdit FLUX, establishing PromptPack as a practical, training-free interface for intent-aligned diffusion editing.
