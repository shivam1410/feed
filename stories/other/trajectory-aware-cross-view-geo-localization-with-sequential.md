---
title: "Trajectory-aware Cross-view Geo-localization with Sequential Observations"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15491"
authors: ["Tianyi Gao", "Jiayu Lin", "Danielle Beaulieu", "Nathan Jacobs"]
date: "2026-07-15T20:00:00.000Z"
score: ""
guid: "2607.15491"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15491.png"
generated: "2026-07-23T04:03:36+05:30"
---

Cross-view geo-localization matches ground-level observations against geo-tagged satellite imagery. Recent methods show that sequential queries such as video clips yield richer spatiotemporal cues than single images, yet they overlook a complementary sequential modality: route descriptions -- which capture the same trajectory at a higher level of abstraction and are often the only input available (e.g., a user directing an autonomous vehicle to a pickup point). To bridge this gap, we introduce SeqGeo-VL, a dataset of sim39K video-text-satellite triplets, and TrajLoc, a unified framework capable of processing both video clips and route descriptions. By leveraging both dense visual and abstract linguistic semantics, TrajLoc enables these modalities to mutually reinforce cross-view matching. We further propose TrajMod, a lightweight module that conditions query embeddings on trajectory geometry, yielding spatially-aware representations. Experiments show that TrajLoc achieves substantial gains over state-of-the-art methods on both video and text geo-localization. The project page is available at https://humblegamer.github.io/trajloc/.
