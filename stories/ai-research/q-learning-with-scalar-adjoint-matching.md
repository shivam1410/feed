---
title: "Q-Learning with Scalar Adjoint Matching"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.10437"
authors: ["Yonghoon Dong", "Minsung Yoon", "Jaehyuk Kim", "Jungwoo Park", "Changyeon Kim", "Jinwoo Shin"]
date: "2026-10-06T20:00:00.000Z"
score: 78
guid: "2610.10437"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.10437.png"
generated: "2026-10-08T19:08:02+05:30"
---

Flow policies capture rich and diverse action distributions, and fine-tuning them with off-policy RL to improve beyond the demonstrations has drawn growing interest. However, fine-tuning a flow policy against a learned value function is not trivial, because the policy generates its action over many flow steps. Adjoint matching offers a principled way to update the flow model itself by propagating value information from the final action back to each flow step, but it requires a vector--Jacobian product through the policy at every step, a cost that grows with the number of flow steps and the policy size. We observe that the batch-averaged velocity Jacobian of pretrained flow policies concentrates on its diagonal. Motivated by this finding, we derive a closed-form scalar adjoint that scales the value gradient at the final action by the flow time, eliminating the per-step vector--Jacobian products. We further find that controlling the critic's value at policy-generated actions is particularly important under the scalar adjoint. Based on these findings, we propose Q-learning with Scalar Adjoint Matching (SQAM), which combines the scalar adjoint with a value penalty at those actions. SQAM's gains concentrate on the four hardest OGBench domains, where its success rate exceeds that of the strongest baseline in each domain by 18 to 35 percentage points. To test whether SQAM extends to large pretrained policies, we also fine-tune a vision-language-action policy on a real bimanual robot. SQAM improves over supervised fine-tuning on all three tasks.
