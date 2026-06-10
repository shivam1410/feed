---
title: "SocraticPO: Policy Optimization via Interactive Guidance"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09887"
authors: ["Zirui Liu, Jie Ouyang, Qi Liu, Xianquan Wang, Jiayu Liu, Tingyue Pan, Qingchuan Li, Jing Sha, Zhenya Huang, Shijin Wang, Enhong Chen"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09887v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09887v1 Announce Type: new Abstract: Reinforcement learning (RL) for large language models usually supervises reasoning with scalar outcome rewards, such as binary correctness. Such rewards provide an optimization direction but rarely explain how a model should revise its mistaken reasoning, which can encourage shortcut learning and brittle policies. We propose \textbf{SocraticPO} (Socratic Policy Optimization), a policy-optimization framework that augments RL rollouts with Socratic-style natural-language guidance. During rollout, the student first answers independently; if the answer is incorrect, a teacher diagnoses the attempt and provides concise corrective guidance, after which the student continues under the expanded context. Crucially, this guidance is paired with reward decay: correct answers obtained after teacher intervention only receive decayed rewards, preventing the policy from treating teacher help as a free path to reward. Since SocraticPO only modifies the rollout process while leaving the standard expected-reward objective intact, it can be plugged into existing policy-gradient backends such as Reinforce++. Moreover, because the teacher provides only text-level guidance, SocraticPO can leverage stronger black-box teacher models without requiring access to logits or distribution matching. On undergraduate-level scientific reasoning benchmarks from SciKnowEval, SocraticPO improves over strong RL and self-distillation baselines. Ablations show that both targeted guidance and reward decay are necessary, with reward decay mitigating reliance on assisted correction.
