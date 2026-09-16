---
title: "OPD-Aha: From Linguistic Momentum to Visual Reflection in Multimodal On-Policy Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16459"
authors: ["Chenhao Qiu, Dawei Li, Yechao Zhang, Lei Gong, Zhen Tan"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16459v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16459v1 Announce Type: new Abstract: Privileged on-policy distillation improves multimodal reasoning by allowing a teacher to evaluate student trajectories using rich, training-only visual evidence. Both models score these trajectories while conditioning on the same student-generated prefix. When a student misinterprets an image early in a response, this accumulating erroneous rationale eventually pulls the teacher away from its visual evidence. The teacher and student converge on the same hallucination, causing standard cross-model supervision to collapse precisely where correction is most needed. We find that the teacher's visual corrective preference is not lost under this misleading agreement. Comparing the predictions of the identical teacher given the real image and a visual null reveals that the privileged evidence still pushes the model toward the correct interpretation. We introduce OPD-Aha, which reconstructs the distillation target directly from this isolated visual preference rather than relying on the fragile teacher-student discrepancy. This reconstructed target aggressively suppresses continuations that contradict the image. Trained with this objective, students learn to naturally interrupt their own flawed reasoning with reflection tokens such as wait and actually. After reflection, subsequent generation relies less on the accumulated erroneous text and more on the visual evidence. Correcting these trajectories mid-generation fundamentally alters the reasoning process, yielding broad and consistent improvements across diverse fine-grained perception and complex multimodal reasoning benchmarks. Our code and models are available at https://github.com/Echochef/OPD-Aha.
