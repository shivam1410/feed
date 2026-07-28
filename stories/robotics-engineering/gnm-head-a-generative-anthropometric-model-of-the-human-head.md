---
title: "GNM Head: A Generative aNthropometric Model of the human head"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.23687"
authors: ["Stylianos Ploumpis", "Jan Bednarik", "Gaspard Zoss", "Ruslan Guseinov", "Luca Prasso", "Prashanth Chandran", "Oliver Boyne", "Vasileios Choutas", "Timo Bolkart", "Daoye Wang", "Menglei Chai", "Di Qiu", "Sebastian Winberg", "Gilles Rainer", "Lewis Bridgeman", "Delio Vicini", "Jérémy Riviere", "Yannick Boetzel", "Alexander Koumis", "Jay Busch", "Cynthia Herrera", "Jacob Still", "Scott Ysebert", "Peter Lincoln", "Sergio Orts Escolano", "Christoph Rhemann", "Erroll Wood", "Thabo Beeler", "Stefanos Zafeiriou"]
date: "2026-07-25T20:00:00.000Z"
score: 65
guid: "2607.23687"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.23687.png"
generated: "2026-07-28T19:07:22+05:30"
---

Parametric models of the human head are essential tools traditionally used in computer vision and graphics for animation, rendering, and reconstruction. More recently, they serve as crucial conditioning signals within generative large vision models, allowing for tight spatial control of generated imagery. However, existing publicly available models are typically limited in anatomical scope, modeling only outer geometry while ignoring intra-oral and ocular structures, and frequently suffer from reduced geometric quality stemming from low-fidelity input datasets. In this report we introduce a new parametric model dubbed Generative aNthropometric Model (GNM), named as a homophone of the human genome. GNM encompasses the head, face, neck, eyeballs, teeth, and tongue, and it is built on an extensive database of high-resolution 3D scans combined with high-quality anatomy specific artist-made samples. This report details the data provenance, the model architecture including the specialized sub-models for the ocular and intra-oral structures, and shows its SotA performance on fitting target 3D face scans. To foster community innovation, the complete GNM framework is made publicly available.
