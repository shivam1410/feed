---
title: "Schrödinger's Code Repository: Have LLMs Learned SWE-bench or Memorized It?"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.27891"
authors: ["Silin Chen", "Yufei Yang", "Xiaodong Gu", "Yuling Shi", "Chengcheng Wan", "Haibing Guan"]
date: "2026-08-20T20:00:00.000Z"
score: 71
guid: "2609.27891"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.27891.png"
generated: "2026-09-25T22:38:54+05:30"
---

Repository-level coding benchmarks have become the standard for evaluating coding agents, yet they inherently suffer from data leakage because they are built upon popular open-source repositories repeatedly used for training. Consequently, strong performance may reflect memorization of canonical repository cues rather than robust repository reasoning. We propose SchrodingerRepo (Schrödinger's Repository), an evaluation framework for testing coding agents under dynamically instantiated repository representations. Instead of repeatedly using a static representation of the test repository, SchrodingerRepo treats the test repository as an evaluation-time latent variable that is dynamically instantiated only when the agent enters the evaluation environment. The instantiated repository preserves the original executable behavior while eroding familiar cues such as naming conventions, file layouts, and implementation patterns through four transformation levels: problem statement reconstruction, namespace remapping, intra-file layout reordering, and functionality-preserving code rewriting. We evaluate popular LLMs on SWE-bench Verified and SWE-QA. Results show that removing familiar repository cues consistently degrades agent performance and substantially increases interaction costs across models. Further analysis reveals that the additional cost is primarily caused by increased difficulty in repository exploration and localization. These findings suggest that current coding agents may partially rely on memorized repository-side cues, highlighting the need for evaluation under dynamically instantiated repository representations.
