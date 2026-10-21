---
title: "Do Knowledge and Reasoning Oriented Benchmarks Induce Stable Representation Signatures in LLMs?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24029"
authors: ["Parsa Rahimi, Azim Dehghani Amirabad"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.24029v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Internal signatures could support monitoring, adaptive computation, and mechanistic analysis, but benchmark prompts can be separable without any shared computational distinction. We test whether a prespecified knowledge/reasoning label defines a reusable internal signature in five contemporary 7B to 31B models. We treat the \textbf{task} as the unit of inference probes hold out complete tasks, labels are permuted across tasks, and the best layer and stream are reselected for every permutation. Raw probes recover an eight-versus-eight-subject MMLU partition in all five models (macro-F1 $0.78$--$0.81$), but prompt text predicts it nearly as well: under an identical probe configuration, the activation advantage is only $0.017$--$0.070$ macro-F1 and is not significant. At the prespecified $0.01$ level, lexical adjustment removes significance while the adjusted states still identify individual subjects, and the selected site changes across task panels and selection rules. Additionally, two released base-training trajectories show no common direction. These pooled layerwise measures recover the task label but identify no transferable knowledge/reasoning signature at the tested sensitivity, which cannot exclude moderate effects. The resulting protocol gives future internal monitors and intervention studies a sequence of tests to pass. Project page: \url{https://parsa-ra.github.io/lmbehave/}.
