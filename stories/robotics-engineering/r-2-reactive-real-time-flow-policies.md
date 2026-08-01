---
title: "πR^2: Reactive Real-time Flow Policies"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26055"
authors: ["Sungjae Park", "Shubham Tulsiani"]
date: "2026-07-27T20:00:00.000Z"
score: 80
guid: "2607.26055"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26055.png"
generated: "2026-08-01T19:05:30+05:30"
---

Action-chunking diffusion policies run open-loop, sacrificing reactivity because they cannot respond to sensory input arriving mid-execution. πR² restores real-time reactivity while retaining large backbones and expressive policies via two innovations: split conditioning separates fast proprioception (updated each tick) from asynchronously updated vision-language features, enabling reaction to immediate sensory input while tolerating vision latency; latency-adaptive flow schedule treats in-flight actions as inpainting and emits actions in one denoising step, accommodating varying hardware latency. Applied to GR00T on xArm6+XHand, πR² replans closed-loop approximately 4× faster than baseline (~25 Hz on A5000 GPU).
