---
title: "ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.21099"
authors: ["Ke Sun", "Kevin Yuchen Ma", "Yike Zhang", "Yanzhe Chen", "Mike Zheng Shou"]
date: "2026-11-15T19:00:00.000Z"
score: ""
guid: "2611.21099"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.21099.png"
generated: "2026-11-18T19:12:26+05:30"
---

Frontier multimodal models can now control robots zero-shot from images, yet many manipulation tasks depend on contact forces that images cannot show. Bringing force to an API-only frozen model raises two challenges. First, contact evolves much faster than an API model can decide, so the system must close the loop on force beneath the model. Second, a frozen model cannot interpret raw force streams, so force must be returned in a form the model can reason about. Therefore, we present ForceHarness, a harness that lets frozen models use force without demonstrations or finetuning. After calibrating hand force from a wrist sensor or joint torques alone, ForceHarness addresses the first challenge with self-terminating force primitives that regulate force on their own and return at a contact event. To address the second challenge, a physics translation layer turns each force trace into physical quantities with uncertainty as the tool result. To evaluate ForceHarness against expert force controllers and learned policies under identical conditions, we also build HiddenPhys, a seven-task MuJoCo benchmark with hidden physical variables. On a real arm without a wrist force sensor, ForceHarness raises the zero-shot success rate of GPT-6 Astra from 3.3% to 90.0%. In simulation, it adds 17.5 percentage points on the public ForceBench suite and 34.3 percentage points on HiddenPhys, surpassing force-aware policies trained on demonstrations on both benchmarks and matching hand-written expert controllers on HiddenPhys. Ablations further show that smaller models make significantly better decisions when given physical quantities rather than raw force values.
