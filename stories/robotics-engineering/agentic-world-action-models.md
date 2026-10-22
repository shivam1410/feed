---
title: "Agentic World Action Models"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.30136"
authors: ["Zhuoyang Liu", "Dantong Niu", "Botong Zhang", "Boning Shao", "Jing Wang", "Ruijie Zheng", "Yuvan Sharma", "Runyu Lu", "Jiaming Liu", "Renrui Zhang", "Roei Herzig", "Yutong Bai", "Ken Goldberg", "Danfei Xu", "Yuke Zhu", "Guanzhi Wang", "Linxi &#34;Jim&#34; Fan", "Trevor Darrell"]
date: "2026-10-20T20:00:00.000Z"
score: 50
guid: "2610.30136"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.30136.png"
generated: "2026-10-22T20:05:20+05:30"
---

Recent world action models provide visual foresight and future prediction for robot manipulation, but lack explicit mechanisms for compositional skill reuse. Agentic robotics combines code-based planning and reasoning with reusable skills, but often lacks predictive grounding in physical dynamics. We introduce AW-0, an agentic world action model framework that integrates code-based planning with joint video and action prediction. We jointly model code, future video, and robot actions as three coupled generative streams within a unified mixture-of-transformers architecture. Within this architecture a code expert generates parameterized skill routines and control logic while video and action experts generate future visual states and low-level motor commands. Code serves two complementary roles: it structures multi-step prediction and control within the world model and represents skills as reusable programs for subsequent agentic execution. We further introduce an automated curation pipeline that labels robot and human video trajectories with aligned programs and consolidates recurring routines into reusable skill libraries. Evaluations on RoboTwin 2.0 and physical bimanual manipulation tasks show improved task performance over VLA and WAM baselines, alongside gains in language following, semantic reasoning and robustness, demonstrating that agentic code enables connection between planning, prediction and execution within WAMs.
