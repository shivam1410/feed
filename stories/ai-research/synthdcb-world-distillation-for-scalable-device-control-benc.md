---
title: "SynthDCB: World Distillation for Scalable Device Control Benchmarking"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.18639"
authors: ["Zichen Zhu", "Dingye Liu", "Nan Jiang", "Danyang Zhang", "Hang Zheng", "Shijie Zheng", "Situo Zhang", "Kunyao Lan", "Yingzi Ma", "Sheng Jiang", "Lu Chen", "Kai Yu"]
date: "2026-11-18T19:00:00.000Z"
score: 60
guid: "2611.18639"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.18639.png"
generated: "2026-11-24T19:04:06+05:30"
---

Scaling device-control evaluation requires scaling both interactive worlds and the tasks agents must solve. We introduce SynthDCB, a benchmark for environment awareness and device control built through world distillation (WD). World distillation transforms knowledge of device behaviors, constraints, and environmental effects into modular executable components. A unified capability representation connects tool discovery, world execution, and task synthesis. SynthDCB instantiates Home, Car, and Phone with 114 device classes, 1,166 functions, and 95 events, supporting five task families with 32 subtypes. Explicit states and tool-call traces support task validation and agent evaluation. We evaluate 22 models on 2,560 test tasks; the best achieves 88.8% mean Pass@1. Construction experiments demonstrate token efficiency and expansion of task coverage. At the richest knowledge level, WD fully covers 22/23 properties, 19/29 functionalities, and 30/39 event requirements specified in a real RobotVacuum protocol. Furthermore, the 1,000 sampled tasks semantically cover 81.6% of the 854 reference instructions in the real-world corpus. SynthDCB connects an expanding space of real-to-sim executable capabilities to verifiable agent evaluation.
