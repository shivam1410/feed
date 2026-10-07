---
title: "ConEx: Human-Interpretable Saliency Maps via Concept-Aware Attribution"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04605"
authors: ["Yehonatan Elisha", "Oren Barkan", "Ziv Weiss Haddad", "Noam Koenigstein"]
date: "2026-10-02T20:00:00.000Z"
score: 50
guid: "2610.04605"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04605.png"
generated: "2026-10-07T19:11:01+05:30"
---

Many visual explanation methods in computer vision highlight pixel importance but struggle to link these low-level cues to semantically meaningful concepts, limiting their interpretability and trustworthiness. We introduce Concept-based Explanations (ConEx), a novel framework that bridges saliency visualization with concept-based reasoning to provide both faithfulness and interpretability. ConEx automatically discovers class-specific concepts and represents them through concept activation vectors (CAVs), learned without manual supervision using an architecture-specific masking mechanism that reduces noise introduced by the segmentation masks to enhance concept purity. ConEx generates faithful saliency maps that reveal where each concept appears in the image and how it contributes to the prediction. To evaluate the reliability of these learned concepts, we propose two complementary metrics, Vector-Concept Match (VCM) and Concept-Class Match (CCM), that quantify concept alignment and enable direct comparison with existing methods. Extensive experiments across diverse settings demonstrate that ConEx achieves state-of-the-art performance on faithfulness, segmentation, and concept-quality benchmarks. Overall, ConEx advances the field toward truly interpretable and concept-grounded explanations in vision models.
