---
title: "Rethinking World-Action Model for Compositional and In-Context Robotic Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02368"
authors: ["Shukai Gong", "Xuanran Zhai", "Yintianrun Zhang", "Ruopeng Cui", "Ye Huang", "Yiyang Fu", "Dexuan Lyu", "Chaojie Li", "Xinyi Song", "Peiwen Lin", "Chuang Wang", "Mingyuan Jia", "Yufan Deng", "Jiaxin Fang", "Bo Liang", "Jiaxin Li", "Yuxiang Gao", "Hao Liu", "Daquan Zhou"]
date: "2026-09-30T20:00:00.000Z"
score: 80
guid: "2610.02368"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02368.png"
generated: "2026-10-08T19:08:02+05:30"
---

Long-horizon compositional manipulation has become increasingly important for real-world robot deployment, where a single task involves multiple coordinated subtasks. Existing world-action models (WAMs) jointly predict short-horizon visual futures and actions, but typically lack explicit subtask-level reasoning. We propose Visual Goal-conditioned Action Reasoning (ViGAR), a hierarchical framework that factorizes manipulation into a visual subgoal planner and a subgoal executor. Given the current observation and global instruction, the subgoal planner predicts a visual subgoal for the next subtask. The subgoal executor then jointly generates future visual trajectories and actions conditioned on the predicted subgoal. Both components share a pretrained world-model representation, enabling task-level planning and action generation to benefit from common physical knowledge. Moreover, our framework naturally supports in-context learning: using a global goal image as context can induce different subtask decompositions and behaviors without parameter updates. On the RoboTwin Clean2Random benchmark, ViGAR achieves 82.00% and 67.02% success rates under the Clean and Random settings, respectively, surpassing the strongest baseline by 12.86 percentage points in average success rate. Real-world robot experiments on five compositional and two in-context learning tasks further confirm the effectiveness of ViGAR.
