---
title: "Correct Labels Are Not Enough: Reliable Metadata Can Silently Control Model Behavior"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.04395"
authors: ["Renee Jia", "Jinzhou Wu"]
date: "2026-11-02T19:00:00.000Z"
score: ""
guid: "2611.04395"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.04395.png"
generated: "2026-11-18T19:12:26+05:30"
---

Fine-tuning data can include metadata that predicts the correct answer, such as a reward-model score or a quality label. We ask whether a model learns to rely on this metadata even when every training label is correct. We fine-tune 7-9B open-weight models from three families on multiple-choice questions in which (Reward: 5) always marks the correct option; when this annotation is moved to a wrong option at test time, models select that option on 97-100% of CommonsenseQA items. Removing it leaves most answers correct, so evaluation without it misses the dependence. Cue-following rises sharply with training-time reliability and develops even with neutral or nonsense annotation words, although test-time wording affects its strength. A Qwen3 experiment also finds cue dependence in option-letter scores after direct preference optimization. Audits can test for this dependence by moving or removing visible annotations while holding the task and correct answer fixed.
