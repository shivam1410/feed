---
title: "Visual prompt engineering for video models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25537"
authors: ["Robert Geirhos", "Yuxuan Li", "Thaddäus Wiedemer", "Neha Kalibhat", "Zi Wang", "Mani Malek", "Oyvind Tafjord", "Kevin Swersky", "Been Kim", "Priyank Jaini"]
date: "2026-07-27T20:00:00.000Z"
score: 58
guid: "2607.25537"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25537.png"
generated: "2026-07-30T19:07:10+05:30"
---

In the age of foundation models, a model is only as good as its prompt. For this reason, prompt engineering has become an essential technique for improving language model performance. Since video models are currently becoming foundation models for visual tasks (e.g., visual reasoning), we here ask whether they similarly benefit from visual prompt engineering: automatically modifying the task image to improve model performance. For example, for a visual physics reasoning task ("Where does the ball land, after passing a set of obstacles?"), an abstract sketch-like scene can be turned into a photorealistic version with a simple call to an image editing model. We find that visual prompt engineering, or VIPE for short, improves video reasoning performance across tasks. In fact, for video models, visual prompt engineering can be even more effective than classic text-based prompt engineering or test-time scaling. Ultimately, just as text-based prompt engineering systematically improves language model performance, visual prompt engineering can serve as a simple, compute-efficient approach to elicit better visual reasoning performance from video models. Example videos on our project page at https://visual-prompt-engineering.github.io/.
