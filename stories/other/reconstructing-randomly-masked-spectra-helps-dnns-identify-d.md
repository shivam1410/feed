---
title: "Reconstructing Randomly Masked Spectra Helps DNNs Identify Discriminant Wavenumbers"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21289"
authors: ["Yingying Wu, Jinchao Liu, Yan Wang, Stuart Gibson, Margarita Osadchy, Yongchun Fang"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21289v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21289v1 Announce Type: new Abstract: Nondestructive detection methods, based on vibrational spectroscopy, are vitally important in a wide range of applications including industrial chemistry, pharmacy and national defense. Recently, deep learning has been introduced into vibrational spectroscopy showing great potential. Different from images, text, etc. that offer large labeled data sets, vibrational spectroscopic data is very limited, which requires novel concepts beyond transfer and meta learning. To tackle this, we propose a task-enhanced augmentation network (TeaNet). The key component of TeaNet is a reconstruction module that inputs randomly masked spectra and outputs reconstructed samples that are similar to the original ones, but include additional variations learned from the domain. These augmented samples are used to train the classification model. The reconstruction and prediction parts are trained simultaneously, end-to-end with back-propagation. Results on both synthetic and real-world datasets verified the superiority of the proposed method. In the most difficult synthetic scenarios TeaNet outperformed CNN by 17%. We visualized and analysed the neuron responses of TeaNet and CNN, and found that TeaNet's ability to identify discriminant wavenumbers was excellent compared to CNN. Our approach is general and can be easily adapted to other domains, offering a solution to more accurate and interpretable few-shot learning.
