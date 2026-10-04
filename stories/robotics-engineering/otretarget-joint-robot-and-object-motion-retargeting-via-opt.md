---
title: "OTRetarget: Joint Robot and Object Motion Retargeting via Optimal Transport"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.36602"
authors: ["Guillaume Besset", "Erwann Carn", "Timothée Carecchio", "Valentin Tordjman-Levavasseur", "Fabian Schramm", "Yann de Mont-Marin", "Justin Carpentier", "Ajay Suresha Sathya"]
date: "2026-09-28T20:00:00.000Z"
score: 60
guid: "2609.36602"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.36602.png"
generated: "2026-10-04T19:07:43+05:30"
---

Transferring human motion to humanoid robots requires adapting the demonstrated motion to the robot morphology while preserving interactions with the environment. This is particularly challenging for loco-manipulation tasks, where contacts with the ground and manipulated objects must remain consistent despite differences in body proportions. Yet, skeletal motion alone does not fully describe these interactions, and fixing object trajectories limits the adaptation to a new embodiment. In this paper, we introduce OTR ETARGET, a unified approach to jointly retarget robot and multi-object motion from human demonstrations. Our approach represents surface interactions through signed distances, closest surface points, and relative directions, and uses entropic optimal transport to transfer these quantities across human, robot, and object geometries. We incorporate the resulting interaction targets into a constrained inverse kinematics formulation that balances contact preservation with motion style and jointly optimizes robot and object poses at each frame. This formulation accommodates robot-object and object-object interactions without rescaling the scene or the demonstration. We validate the proposed approach on OMOMO, where it achieves a robot- object interaction Jaccard score of 87% and a depth error of 8.7 mm, compared with 28% and 29.3 mm for OmniRetarget. Finally, we demonstrate transfer to a physical G1 humanoid using whole-body policies trained with reinforcement learning on the retargeted references, across motions including two-handed box pick-and-place onto a table.
