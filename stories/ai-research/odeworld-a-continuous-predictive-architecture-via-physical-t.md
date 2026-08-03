---
title: "ODEWorld: A Continuous Predictive Architecture via Physical-Time Flow"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27924"
authors: ["Dongxiu Liu", "Haoyi Niu", "Peng Cheng", "Yuan Gao", "Xirui Kang", "Sangli Teng", "Koushil Sreenath", "Xianyuan Zhan"]
date: "2026-07-29T20:00:00.000Z"
score: 75
guid: "2607.27924"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27924.png"
generated: "2026-08-03T19:06:42+05:30"
---

In the physical world we inhabit, space and time are fundamentally continuous. However, existing machine learning paradigms for world modeling are largely confined to discrete-time prediction, thereby exhibiting significant inefficiency in capturing the dynamics of physical world. We introduce Physical-Time Flow (PT-Flow), a novel approach that learns a continuous latent velocity field operating in physical time. Crucially, the underlying dynamics of sequential data are parameterized by an ordinary differential equation (ODE) embedded in a well-structured representation space. Under this paradigm, the prediction of future can be recast as temporal integration via an ODE solver in the compressed latent space. Building upon PT-Flow, we construct ODEWorld, a continuous-time latent world model that is both efficient and versatile. By extracting time-variant features and enforcing ODE properties on both the dynamical representation space and the latent velocity field, ODEWorld effectively addresses the long-standing representation collapse issue in latent world model literature. This also enables high-quality image reconstruction even after long-horizon prediction. Moreover, its continuous nature allows for arbitrary temporal resolution and even backward prediction, which is impossible for most discrete-time models. Lastly, ODEWorld can provide rich planning-oriented information to facilitate downstream policy learning. Comprehensive experiments demonstrate that ODEWorld successfully reconciles planning-conducive dynamics abstraction with visual realism, excelling in both video generation and robotic control. https://dstate.github.io/odeworld_website/{Project Website}.
