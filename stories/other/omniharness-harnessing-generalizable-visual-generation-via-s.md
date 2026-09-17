---
title: "OmniHarness: Harnessing Generalizable Visual Generation via Symbolic Policy Learning"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.16057"
authors: ["Xu Xu", "Jinxiu Liu", "Zhangbo Qiao", "Jiaxing Lu", "Xiangyu Zhang", "Yubin Gu", "Fangwei Ning", "Yan Shi"]
date: "2026-09-12T20:00:00.000Z"
score: ""
guid: "2609.16057"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.16057.png"
generated: "2026-09-17T19:00:24+05:30"
---

Unified multimodal large language models (MLLMs) and multi-agent systems have advanced visual generation. However, three limitations remain. (1) Existing methods often distill task-specific experience with limited generalizability. (2) Reflection is often deferred until task completion. (3) Knowledge is often acquired only in response to downstream task demands. To address these limitations, we introduce OmniHarness, a framework for generalizable visual generation via symbolic policy learning. OmniHarness abstracts verified executions into symbolic policies for visual generation task families, capturing shared procedures and applicability conditions while removing instance-specific inputs. The harness instantiates, adapts, and composes these policies for new tasks. Intermediate verification guides refinement and failure recovery during execution. Through self-directed inquiry, OmniHarness autonomously generates and executes practice tasks near its capability limits before downstream objectives are specified. Execution feedback continually refines the policies while model parameters remain fixed. Experiments across six benchmarks, three MLLM backbones, and three visual agent frameworks demonstrate strong performance and continual capability expansion. On ComfyBench's Creative tasks, OmniHarness achieves a 95.0% resolve rate, exceeding the strongest baseline by 27.5 percentage points. Frozen policy snapshots improve existing visual agent systems through plug-and-play reuse.
