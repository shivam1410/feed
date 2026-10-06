---
title: "PerturBot: Breaking Shortcut Priors in Vision-Language-Action Models with Perturbative Training"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04616"
authors: ["Mingyu Liu", "Chonghao Sima", "Tianjian Feng", "Hanqing Wang", "Cong Chen", "Hao Chen", "Chunhua Shen"]
date: "2026-10-02T20:00:00.000Z"
score: 65
guid: "2610.04616"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04616.png"
generated: "2026-10-06T22:55:59+05:30"
---

A vision--language--action (VLA) policy can complete complex tasks while ignoring the evidence that should determine its actions. An object held near the wrist camera can displace the instructed target. Language and action show the same pattern: a familiar noun can trigger the operation it was paired with in training even after the verb changes, and a gripper that closed on nothing may lift anyway. We call these dependencies modality shortcuts: regularities in successful demonstrations make visual, lexical, or motor cues sufficient to predict expert actions without the task evidence needed for the underlying decision. More demonstrations of the same kind can raise task success while leaving these shortcuts intact. We propose Perturbot which makes task-relevant evidence easier to use and shortcuts insufficient on their own: it applies task-preserving wrist-view perturbations, enriches instructions with decision-relevant captions, and adds random and failed trajectory segments relabeled with the behavior they contain. It complements scaling by changing what is scaled, and leaves inference unchanged. Moreover, we propose GroundingFscore, an offline score that diagnoses how severely a policy relies on modality shortcuts. Task success rate shows whether a policy improves, while GroundingFscore reveals whether the policy scales healthily, relying on task evidence rather than shortcuts. Together, Perturbot and GroundingFscore provide a training-and-evaluation framework for disentangling VLA decisions from shortcut priors while preserving responsiveness to task-relevant evidence.
