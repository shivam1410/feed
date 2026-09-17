---
title: "StepAudio 3 Realtime Technical Report"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.14005"
authors: ["Bin Lin", "Bo Zhao", "Boyang Zhang", "Boyong Wu", "Chao Yan", "Chen Geng", "Chen Wu", "Cheng Yi", "Chengli Feng", "Chenglin Zhu", "Chengting Feng", "Chengyuan Yao", "Daijiao Liu", "DanNi Wan", "Daxin Jiang", "Dongjian Li", "Dongqing Pang", "Fei Tian", "Feng Tian", "Future Li", "Gang Yu", "Guanglong Yang", "Haoyang Zhang", "Hongyuan Wang", "Jia Peng", "Jiahao Song", "Jialong Xue", "Jiamin Fan", "Jiangjie Zhen", "Jianzheng Gao", "Jincheng Wen", "Jinghua Liang", "Jinglan Gong", "Jun Chen", "Li Xie", "Liang Zhao", "Lifang Zhang", "Lingli Ji", "Lun Cai", "Min Xu", "Peilin Li", "Peng Yang", "Pengfei Tan", "Qingjian Lin", "Qinxin Du", "Ruijie Xiong", "Runze Li", "Shenghua Hu", "Shengqian Qin", "Shi Qiu", "Siqi Tu", "Siyi Zhou", "Tianjiao Deng", "Wanying Lu", "Weiming Niu", "Wen Sun", "WenWen Qu", "Xiangyu Zhang", "Xianwei Zhang", "Xiaosu Su", "Xing Chen", "Xinyu Liu", "Xuerui Yang", "Yan Wu", "Yang Li", "Yang Yang", "Yechang Huang", "Yibo Zhu", "Yifan Zhang", "Yinuo Yan", "Youjun Chen", "Yu Fu", "Yu Luo", "Yu Zhou", "Yujie Chen", "Yumang Wang", "Yunzhou Ju", "Yuxiang Yang", "Yuxin Li", "Yuxin Zhang", "Zekai Liu", "Zengwei Yao", "Zhaoxin Yuan", "Zhenwei Mou", "Zhiquan Zhang", "Zhiyue Wu", "Zichao Li", "Zichao Zhou", "Ziqi Ren", "Zixuan Wang"]
date: "2026-09-11T20:00:00.000Z"
score: ""
guid: "2609.14005"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.14005.png"
generated: "2026-09-17T19:00:24+05:30"
---

Realtime spoken interaction demands deep reasoning, prompt responses, and fluid turn-taking. We present StepAudio 3 Realtime, an audio-language foundation model organized around a continuous listen-converse-think-act loop. Deep Perception captures rich acoustic cues to interpret user intent, while Seamless Duplex models synchronized audio streams to handle pauses, backchannels, and interruptions naturally. Crucially, we resolve the tension between deep deliberation and latency via Think-While-Speaking, executing private reasoning in parallel with spoken delivery. In reasoning mode, StepAudio 3 reaches a 73.0 macro average on StepAudioChat. With Think-While-Speaking, it achieves dialogue and reasoning performance comparable to dedicated reasoning models while speaking in real time. Furthermore, an integrated Voice Agent handles asynchronous tool execution without disrupting the dialogue flow. StepAudio 3 Realtime achieves top-tier performance across key dimensions: an exceptional 90.6 on the MMSU benchmark, 98.9 Overall on the Artificial Analysis Full-Duplex Bench, and a 56.0% macro task-success rate on τ-Voice.
