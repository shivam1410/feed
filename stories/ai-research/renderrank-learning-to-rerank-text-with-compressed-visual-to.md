---
title: "RenderRank: Learning to Rerank Text with Compressed Visual Tokens"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35069"
authors: ["Seongtae Hong", "Youngjoon Jang", "Jungseob Lee", "Hyeonseok Moon", "Heuiseok Lim"]
date: "2026-09-27T20:00:00.000Z"
score: 58
guid: "2609.35069"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35069.png"
generated: "2026-09-29T19:09:35+05:30"
---

Rendering document text as images allows vision-language models to encode documents as visual tokens, which can reduce input sequence length compared with text input. This reduction in input length is particularly useful for reranking, where each query involves scoring multiple candidate documents and token savings apply to each candidate evaluation. We introduce RenderRank, a reranker that learns query-dependent relevance scoring from compressed visual document representations instead of the text token sequences used by conventional text-based rerankers. Training first aligns relevance scores from visual inputs with those of a text-based teacher, then refines the relative scores of positive and negative documents for the same query. Across 11 datasets from BEIR, RenderRank uses 16.5-35.5% fewer input tokens while achieving an average NDCG@10 of 55.96, outperforming all evaluated text-based baselines below 4B parameters and some larger models. Across four long-document datasets, it achieves an average NDCG@10 of 88.27 with approximately half the average input token count of the evaluated text-based rerankers. In this setting, RenderRank delivers 1.70x the highest average throughput of the evaluated baselines. These results demonstrate that compressed visual representations can support accurate document relevance scoring, providing an alternative to text token representations for reranking.
