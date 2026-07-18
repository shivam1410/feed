---
title: "SPEAR: A Simulator for Photorealistic Embodied AI Research"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.06701"
authors: ["Mike Roberts", "Renhan Wang", "Rushikesh Zawar", "Rachith Dey-Prakash", "Quentin Leboutet", "Stephan R. Richter", "Matthias Müller", "German Ros", "Rui Tang", "Stefan Leutenegger", "Yannick Hold-Geoffroy", "Kalyan Sunkavalli", "Vladlen Koltun"]
date: "2026-07-06T20:00:00.000Z"
score: ""
guid: "2607.06701"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.06701.png"
generated: "2026-07-18T21:58:10+05:30"
---

Interactive simulators have become powerful tools for training embodied agents and generating synthetic visual data, but existing photorealistic simulators suffer from limited generality, programmability, and rendering speed. We address these limitations by introducing SPEAR: A Simulator for Photorealistic Embodied AI Research. At its core, SPEAR is a Python library that can connect to, and programmatically control, any Unreal Engine (UE) application via a modular plugin architecture. SPEAR exposes over 14K unique UE functions to Python, representing an order-of-magnitude increase in programmable functionality over existing UE-based simulators. Additionally, a single SPEAR instance can render 1920x1080 photorealistic beauty images directly into a user's NumPy array at 73 frames per second - an order of magnitude faster than existing UE plugins - while also providing ground truth image modalities that are not available in any existing UE-based simulator (e.g., a non-diffuse intrinsic image decomposition, material IDs, and physically based shading parameters). Finally, SPEAR introduces an expressive high-level programming model that enables users to specify complex graphs of UE work with arbitrary data dependencies among work items, and to execute these graphs deterministically within a single UE frame. We demonstrate the utility of SPEAR through a diverse collection of example applications: controlling multiple embodied agents with distinct action spaces (e.g., humans, cars, and robots) across several in-the-wild UE projects; rendering photorealistic city-scale environments; manipulating UE's procedural content generation systems; rendering synchronized multi-view images of detailed human faces; coordinating an interactive co-simulation with the MuJoCo physics simulator; and editing scenes with natural language via an AI coding assistant.
