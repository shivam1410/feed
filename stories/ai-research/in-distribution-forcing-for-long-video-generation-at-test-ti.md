---
title: "In-Distribution Forcing for Long Video Generation at Test Time"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.03120"
authors: ["Jeongwoo Shin", "Youngyoon Choi", "Sangwoo Jo", "Hyunmog Kim", "Sungjoon Choi", "Joonseok Lee", "Jaewoong Choi", "Jaemoo Choi"]
date: "2026-10-01T20:00:00.000Z"
score: 40
guid: "2610.03120"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.03120.png"
generated: "2026-10-06T22:55:59+05:30"
---

Modern autoregressive (AR) video diffusion models excel at short-horizon video generation, yet generating long videos remains challenging due to drifting, where colors and textures shift, and motion dynamics decay. Existing works primarily rely on KV conditioning, which selects or modifies cached key-value (KV) entries to mitigate drifting. However, we observe that KV conditioning alone is insufficient as it assumes cached KV entries remain in-distribution. This assumption fails beyond the training horizon: nothing constrains the construction of KV entries during rollout, giving rise to the KV-provenance problem where cached entries themselves become out-of-distribution (OOD). To address this, we propose In-Distribution Forcing (ID-Forcing), a test-time framework that aligns both KV caching and KV conditioning with training configurations. Its key mechanism, self-caching, prevents OOD KV entries at their source. Each chunk is cached without attending to prior KV entry, keeping the rolling window exactly in-distribution. Consequently, ID-Forcing seamlessly extends short-horizon models to minute-scale video generation. Extensive evaluations show that our method remains competitive on standard video generation benchmark while substantially outperforming prior work in mitigating drifting, as validated by both our drift metrics and a user study.
