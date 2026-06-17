---
title: "CheckMIABench: Firm Foundations For Membership Inference Attacks on Language Models"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17464"
authors: ["Jeffrey G. Wang, Jason Wang, Marvin Li, Seth Neel"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.17464v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17464v1 Announce Type: new Abstract: Membership inference attacks (MIAs) are a canonical way to assess a machine learning model's privacy properties. Although several attempts have been made to evaluate MIAs on language models, the extant literature has suffered numerous difficulties in constructing clean evaluations to test new techniques. In particular, subtle distribution shifts between member and non-member sets can undermine the statistical validity of MIAs; recent work has underscored this by showing that "blind" methods with no access to the underlying model can perform far better than published methods on the same benchmarks. This paper constructs a benchmark for principled evaluation of MIAs against LLMs, by leveraging the insight that training data before and after a fixed point during training are drawn from the same distribution. Therefore, all open-source models with intermediate checkpoints and public training data can be converted into MIA testbeds. We apply our framework to a half-dozen published attacks on the Pythia and OLMo family of models, from 70M to 7B parameters. To facilitate further privacy research, we open-source a modular library for designing and implementing attacks in this setting: https://github.com/safr-ai-lab/pandora_llm.
