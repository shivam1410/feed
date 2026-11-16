---
title: "VibePrevisBench: Evaluating Agentic Coding for 4D Scene Generation in Blender"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.15789"
authors: ["Yuzhe Chen", "Muxi Diao", "Lele Yang", "Wenbin Xu", "Xuyang Liu", "Qile Su", "Changyi Liu", "Jiankang Chen", "Kaiyu Jiang", "Haoyu Zhang", "Hongyi Fu", "Jianxiong Wang", "Tianke Zhang", "Haonan Fan", "Yingxin Li", "Bingyi Li", "Xu Wang", "Xuanyu Zheng", "Bin Wen", "Tingting Gao", "Wentao Zhang", "Jiale Cao"]
date: "2026-11-10T19:00:00.000Z"
score: ""
guid: "2611.15789"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.15789.png"
generated: "2026-11-16T20:51:01+05:30"
---

Controllable real-world video generation models can condition on a rendered graybox proxy video, which fixes layout, motion and camera. Coding agents can build such videos by reconstructing a 4D scene in Blender, yet no benchmark checks both these videos and the long, multi-shot scenes behind them. We introduce VibePrevisBench, a benchmark for 4D scene reconstruction: an agent turns a brief into an executable 4D scene and renders its proxy video. Its 242 tasks span four input kinds, including scripts, photos, continuations, and reference videos. Each delivery is scored along two evaluation dimensions. Rule-based Scene Check re-runs the code and compares the exported 4D scene with hidden ground truth facts in nine dimensions. VLM-based Screen Check asks a VLM judge whether the facts that pass can be recognized in the proxy video. We analyze the evaluation results and trajectories of 11 frontier coding agents and identify three key observations. First, multimodal understanding separates the agents, especially in understanding space and camera motion. Second, all agents seem to already master basic camera work and staging, and fail at challenging requests. Third, agents inspect their own renders but fail to correct their errors. Agents thus need better visual understanding of space and camera, explicit checks for challenging requests, and item-by-item verification of renders against the brief.
