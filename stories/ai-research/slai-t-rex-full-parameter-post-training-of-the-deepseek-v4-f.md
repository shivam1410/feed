---
title: "SLAI T-Rex: Full-Parameter Post-training of the DeepSeek-V4 Family on Ascend SuperPOD"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20145"
authors: ["Dongfang Li", "Xiaodong Luo", "Ruoyu Sun", "Xuhui Chen", "Linyuan Qiu", "Jian Meng", "Zhengxuan Lu", "Yiting Wang", "Yucheng Xie", "Tao Guo", "Tianxiang Fang", "Jing Li", "Sihang Chen", "Shihao Hong", "Chang Liu", "Weihua Dai", "Zirong Zeng", "Ziwei Zhu", "Zhuohan Wang", "Zhengjun Yue", "Igor Vasilyev", "Min Liu", "Weijian Sun", "Xin Chen", "Yingmeng Gao", "Jinhua Zhou", "Taolue Chen", "Chenwei Wu", "Dong Zhang", "Wenlong Jin", "Jinmin Xiang", "Barkova Maria", "Ushakov Anton", "Xianfei Jin", "Tian Ding", "Zhihang Lin", "Qian Chen", "Linxin Yang", "Mingzhe Yang", "Bingwei Zhang", "Hongzhang Yang", "Fangxue Zhang", "Shijun Qin", "Jie Yu", "Cuihua Hu", "Tolstykh Vasiliy", "Nosov Ivan", "Abdullin Amir", "Zhichen Zhou", "Xin Zhang", "Zhixiong Ning", "Xutong Zhao", "Junjie Huang", "Jiajun Liu", "Weiyan Kong", "Zheng Zhang", "Wenhan Luo", "Lin Hu", "Yangbo Guo", "Li Zeng", "Shihao Zeng", "Baotian Hu", "Min Zhang", "Haizhou Li", "Zhiquan Luo"]
date: "2026-07-21T20:00:00.000Z"
score: 85
guid: "2607.20145"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20145.png"
generated: "2026-07-26T22:35:53+05:30"
---

SLAI T-Rex optimizes trillion-parameter MoE post-training on Ascend NPU hardware rather than GPUs, addressing memory pressure, communication overhead, and inefficient kernels through hierarchical optimization spanning model parallelism, computation-communication orchestration, and low-level kernels. Achieves 34.22% Model FLOPs Utilization with 2.93× improvement over open-source baselines while maintaining training stability. For Operations Research tasks, develops specialized CPT/SFT pipelines combining domain resources with solver-verified synthetic documents, creating 10K high-quality samples across four categories. The specialized DeepSeek-V4-Flash model reaches 71.81% zero-shot Pass@1, outperforming GPT-5.4-Mini by 3.98 points.
