---
title: "Pass the Baton: Trajectory-Relayed On-Policy Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26057"
authors: ["Haolei Xu", "Xiaowen Xu", "Haiwen Hong", "Zixuan Ni", "Hongxing Li", "Yiwen Qiu", "Weiming Lu", "Yongliang Shen"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.26057"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26057.png"
generated: "2026-07-29T16:31:06+05:30"
---

On-policy distillation (OPD) grounds token-level supervision in the student's own trajectory, yet suffers from prefix failure: once the student commits to a wrong reasoning direction, all subsequent generation builds on this deviation, producing misdirected continuations that elicit unreliable supervision and waste compute. We identify a teacher-student continuation asymmetry on failed prefixes, where the teacher tends to redirect while the student continues along the original direction, and convert it into a label-free handoff trigger in Relay On-Policy Distillation (Relay-OPD). During training, Relay-OPD constructs relay trajectories by letting the teacher briefly take over at detected trigger points to produce a teacher leg, after which the student resumes and is optimized on the resulting trajectory. A limited relay budget concentrates intervention on critical early positions while limiting departure from the student policy. With a Qwen3-4B-Instruct-2507 teacher and Qwen3-0.6B/1.7B-Non-Thinking students on eight mathematical reasoning benchmarks, Relay-OPD achieves the best or second-best results on every benchmark, outperforming standard OPD by +5.73% and the strongest baseline FastOPD by +1.49% on average for 1.7B, with consistent gains at 0.6B. Training trajectory length is reduced by over 50%.
