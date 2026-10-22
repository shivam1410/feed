---
title: "Qwen-Audio-3.1-ASR Technical Report"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.28711"
authors: ["Chuanmeng Bian", "Daren Chen", "Peixin Chen", "Zhigao Chen", "Chong Deng", "Zhiyun Fan", "Zhifu Gao", "Bo Gong", "Qing Gu", "Jiajun He", "Yawei Hu", "Yunjie Ji", "Wei Ju", "Jingbei Li", "Xiangang Li", "Xu Li", "Zengxi Li", "Zheng Li", "Chengdong Liang", "Baiji Liu", "Yaming Liu", "Ying Liu", "Bin Ma", "Yiping Peng", "Yuezhang Peng", "Zhendong Peng", "Yu Pu", "Yang Shi", "Xin Shu", "Jian Tang", "Biao Tian", "Peiyao Wang", "Tianzi Wang", "Wen Wang", "Wupeng Wang", "Cheng Wen", "Yuzhong Wu", "Zijian Xia", "Yunchong Xiao", "Nan Yang", "Jianwei Yu", "Jixing Yu", "Binbin Zhang", "Lei Zhang", "Sitong Zhao", "Guangdong Zhou", "Yuan Zhou", "Jianheng Zhuo"]
date: "2026-10-19T20:00:00.000Z"
score: 30
guid: "2610.28711"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.28711.png"
generated: "2026-10-22T20:05:20+05:30"
---

We present Qwen-Audio-3.1-ASR, a family of audio-language models that builds upon its predecesor Qwen-Audio-3.0-ASR with improved speech recognition and expanded capabilities in speaker-diarized transcription and general audio understanding. The family retains support for 30 languages and 16 Chinese dialects, together with instruction-controlled capabilities including historical-context conditioning, hierarchical hotword customization, and native transcription polishing. Speaker-diarized ASR produces structured outputs containing speaker labels, timestamps, and recognized text, maintaining consistent speaker labels across turns and the representation of overlapping speech. The general audio understanding capabilities cover audio-, speech-, and music-captioning, temporal grounding and sound event detection, as well as audio question answering and multiple-choice reasoning. These tasks broaden the application scope from recognizing spoken words to interpreting speakers, acoustic events, and their temporal relations. To accommodate different deployment requirements, the family includes variants for asynchronous file transcription, low-latency streaming, interactive voice input, and non-streaming recognition, with speaker-diarized transcription and general audio understanding available in certain variants. Evaluations span conventional ASR, multilingual and dialectal speech, speaker-diarized transcription, and general audio understanding, demonstrating the capabilities of the Qwen-Audio-3.1-ASR family across transcription and broader audio analysis tasks.
