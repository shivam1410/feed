---
title: "DeltaVisionX: A Low-Cost Vision-Guided Automation System Using YOLOv11 and PLC-Based Actuation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17959"
authors: ["Lara Sobh (AUST), Marc Nahhas (AUST), Francisco Katach El Halabi (AUST), Michel Owayjan (AUST, IREENA, Nantes Univ), Fadi Elias Sleiman"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17959v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

This paper presents DeltaVisionX, a low-cost industrial automation system that integrates real-time computer vision with PLC-based actuation for object classification and sorting. The system uses the YOLOv11 (You Only Look Once) deep learning model to detect objects on an operating conveyor belt and communicates detection results to a Delta DVP-SE PLC, which actuates pneumatic pistons for sorting. A custom dataset was created, labeled, and augmented to train the YOLOv11 model, achieving a mean average precision of 0.97 with real-time inference of 100 ms per frame. Encoder-based tracking ensures reliable synchronization between detection and actuation, supporting a throughput of 80 objects per minute. Results show that affordable, locally developed automation can reduce labor dependency and improve manufacturing efficiency. The novelty of the proposed system lies in its encodersynchronized vision-PLC integration rather than in the detection model itself. Future work includes integrating a highspeed Delta robot with EtherCAT-based servo control for advanced pick-and-place operations.
