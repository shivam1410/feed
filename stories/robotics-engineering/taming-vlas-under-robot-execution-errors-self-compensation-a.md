---
title: "Taming VLAs under Robot Execution Errors: Self-Compensation and Stress Testing"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37334"
authors: ["Sohyun Lee", "Yoonjae Baek", "Jaesang Won", "Jinnyeong Kim", "Kang Hyunwoo", "Seung-Hwan Baek", "Ivan Laptev", "Suha Kwak"]
date: "2026-09-28T20:00:00.000Z"
score: 70
guid: "2609.37334"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37334.png"
generated: "2026-10-07T19:11:01+05:30"
---

Vision-language-action (VLA) policies often fail when a robot's executed motion deviates from their commanded action. Such execution errors arise from the robot's mechanics and operating conditions, such as wear and payload changes. We propose self-compensating VLA, a deployment-time adaptation method that enables a VLA policy to pre-compensate for the robot's execution errors when generating commands. Without task rewards or labels, it updates the policy online using the residual between the action commanded by a VLA and the motion executed by the robot. To stress-test VLA robustness across execution conditions that are impractical to cover with physical robots alone, we introduce RoboStress, a controlled simulation benchmark. It combines established joint-level models of friction, backlash, compliance, and gravity-compensation error into seven deployment scenarios whose execution errors depend on the robot's state and motion history. On RoboStress, self-compensating VLA achieves higher average task success than both the base policies and methods that build in robustness during training. On two physical robot arms with different usage histories, it raises the average task success rate by more than 30 percentage points on each arm, and the gains extend to objects not seen in the task demonstrations.
