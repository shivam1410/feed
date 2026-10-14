---
title: "WorldCast: Distributed Multiplayer World Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12412"
authors: ["Ziyang Ye", "Junchao Huang", "Evelyn Zhang", "Zhihao Xie", "Ruicheng Zhang", "Boyao Han", "Litao Ban", "Ziye Wang", "Xinting Hu", "Shaoshuai Shi", "Zhuotao Tian", "Li Jiang"]
date: "2026-10-07T20:00:00.000Z"
score: ""
guid: "2610.12412"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12412.png"
generated: "2026-10-14T19:00:21+05:30"
---

Multiplayer world models must generate independently controlled views with consistent representations of both players and their shared environment. Most existing approaches coordinate multiple players through joint multi-view generation, whose cost grows with each additional player. We present WorldCast, a distributed multiplayer world model in which each player runs a local client comprising a video generator and a state model. Using recorded player positions and map geometry during training, the state model estimates the player's position from generated video and control inputs. Clients exchange player states and project them into camera-aligned player state fields that guide where and how other players are rendered. Shared scene state enables clients to reuse one another's generated observations to maintain consistent scene appearance across views. Experiments on Counter-Strike 2 demonstrate WorldCast's consistency, real-time performance, and distributed scalability. The camera-aligned player state field improves player rendering rates by over an order of magnitude over joint-generation methods, while shared scene state improves visual consistency over whole rounds. Each client runs in real time and exchanges only player and scene states, enabling scalable multiplayer generation without a centralized computational bottleneck. Image quality remains stable over hour-long rollouts.
