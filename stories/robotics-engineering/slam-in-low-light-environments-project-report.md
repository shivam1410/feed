---
title: "SLAM in Low-Light Environments: Project Report"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17699"
authors: ["Oleh Basystyi", "Anna Stasyshyn", "Oleksandr Kosovan", "Yaroslav Prytula"]
date: "2026-07-19T20:00:00.000Z"
score: 62
guid: "2607.17699"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17699.png"
generated: "2026-07-25T21:42:33+05:30"
---

Simultaneous localization and mapping (SLAM) is one of the fundamental problems in robotics, as it enables autonomous operations in real-world scenarios. Under low illumination, reduced contrast, sensor noise, and motion blur degrade both feature extraction and feature matching, while compensating with LiDAR, depth, or thermal sensors raises cost, power draw, and integration complexity. Existing benchmarks remain dominated by well-lit indoor or daylight sequences, leaving open how far SLAM with standard RGB cameras can be pushed in the dark. We benchmark six systems spanning the feature-based, direct, filter-based, and learning-based paradigms - ORB-SLAM3, DSO, Kimera-VIO, OpenVINS, DPVO, and DPV-SLAM - on five LaMARia sequences of varying difficulty and illumination, reporting absolute and relative pose error alongside control-point recall. Kimera-VIO is the only system to track all five sequences to completion, combining the lowest relative pose error with steadily growing absolute error due to the absence of loop closure; DPVO and DPV-SLAM never lose tracking but incur absolute errors of roughly 100 m under low light; and the classical monocular pipelines (ORB-SLAM3, DSO) together with the filter-based OpenVINS fail outright or diverge on most of the harder and low-light sequences. The results suggest that RGB-only SLAM maintains stable low-light tracking only when both inertial fusion and global optimization are present. Closing the remaining gap will likely require low-light-specific learned front-ends or a return to complementary sensing.
