---
title: "Environment-free Synthetic Data Generation for API-Calling Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16900"
authors: ["Seanie Lee", "Sanjoy Chowdhury", "Chao Jiang", "Cheng-Yu Hsieh", "Ting-Yao Hu", "Alexander T Toshev", "Oncel Tuzel", "Raviteja Vemulapalli"]
date: "2026-07-17T20:00:00.000Z"
score: 65
guid: "2607.16900"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16900.png"
generated: "2026-07-21T19:05:01+05:30"
---

Training API-calling large language model (LLM) agents demands massive amounts of high-quality trajectories. However, collecting such data at scale typically requires fully implemented environments with executable APIs and realistic, pre-populated backend databases, creating a major bottleneck for scalability. To overcome this, we propose an environment-free synthetic data generation approach that leverages LLMs as on-the-fly digital world models. Given only API specifications, our method generates trajectories mimicking interactions between an agent and a stateful environment. Specifically, an LLM first generates diverse tasks solvable with the provided APIs. A teacher agent then iteratively solves each task while an LLM simulator generates coherent synthetic API responses conditioned on the task context and simulation history. Finally, an LLM judge filters the trajectories to ensure the quality of the resulting dataset. We evaluate our approach on the challenging AppWorld and OfficeBench benchmarks, which include both information-retrieval and state-changing tasks. Fine-tuning models on our synthetic data yields significant performance gains, demonstrating that effective supervision for API-calling agents can be generated without any executable environment. Our results establish LLM-based API simulation as a practical, scalable solution for training agents across diverse API ecosystems.
