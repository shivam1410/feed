---
title: "πR^2: Reactive Real-time Flow Policies"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26055"
authors: ["Sungjae Park", "Shubham Tulsiani"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.26055"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26055.png"
generated: "2026-08-02T19:04:48+05:30"
---

Generalist manipulation policies increasingly take the form of action-chunking flow policies built on large pretrained backbones. Such chunks run open-loop, so the policy cannot react to sensory input arriving mid-execution, sacrificing reactivity. Replanning more often would restore it, but the perception-to-action pipeline (a large backbone plus multiple denoising steps) is too slow: this latency forbids frequent replanning and leaves committed actions stale, making such policies ill-suited for dynamic, closed-loop control. We present πR^2, which makes these policies reactive and real-time while retaining large backbones, expressive multi-modal policies, and multi-action prediction. Built on the per-position noise schedule of diffusion forcing, πR^2 contributes two ideas. First, it splits conditioning into a fast channel (proprioception, fresh every tick) and an asynchronously updated slow channel (vision-language features), so the policy reacts to proprioception within a chunk while tolerating stale vision. Second, a latency-adaptive flow schedule treats in-flight actions as inpainting conditioning and emits actions in one denoising step per call, letting one trained model adapt to varying hardware latency. Requiring minimal modification to existing architectures, πR^2 can be finetuned from a pretrained policy: applied to GR00T-N1.7 on a real xArm6+XHand platform, it replans closed-loop roughly 4times faster than the base policy (~25Hz on an A5000 GPU), acting on a fresh observation every 40ms. Across simulation and real-world manipulation tasks, πR^2 improves the success rate by up to 23% in simulation and 30% in the real world over the strongest baseline. Project page: https://pi-r2-flow.github.io/
