---
title: "Comparison of multi-modal deep learning models on medical data"
category: "Health & Medicine"
source: "Semantic Scholar"
url: "https://www.semanticscholar.org/paper/a4cfb88fda00ffbffbe6567152a2a505bac80544"
authors: ["Syamsul Dahlan", "Oktafian Dyah", "Pangesti", "Devytha Nur", "Rajnaparamitha Alfi", "Kusumastuti"]
date: "2026-07-31"
score: 62
guid: "a4cfb88fda00ffbffbe6567152a2a505bac80544"
image: ""
generated: "2026-06-04T14:49:21+05:30"
---

Artificial intelligence-based respiratory disease diagnosis faces challenges in selecting a model training strategy that suits the characteristics of multi-modal data. This study aims to evaluate the effectiveness of fine-tuning compared to baseline models in respiratory disease classification using chest X-ray images, respiratory sound recordings, and clinical tabular data. Four public datasets were used: the COVID-19 Radiography Database (21,165 images, 4 classes), Chest X-Ray Images Pneumonia (5,863 images, binary classification), Respiratory Sound Database (920 recordings, 4 classes), and Lung Cancer Survey Data (309 tabular samples). The baseline models applied to each modality included a simple CNN and frozen ResNet50 for images, a feedforward neural network for audio, and a Random Forest for tabular data. The fine-tuning strategy was carried out by opening the last 10 layers of ResNet50 and VGG16, deepening the neural network architecture for audio, but not applying Random Forest. The evaluation used accuracy, precision, recall, F1-score, and AUC-ROC metrics with 5-fold stratified cross-validation. The results show that fine-tuning improved the accuracy of COVID-19 Radiography from 55% to 66%, with a reduction in false positives from 18% to 9%. The Chest X-Ray Pneumonia and Respiratory Sound datasets showed stable performance at 82% without any improvement from fine-tuning. In contrast, the Lung Cancer Survey dataset experienced a drastic drop from 97% to 65% due to overfitting of the neural network on a limited sample. These findings confirm that fine-tuning is effective for large, complex medical images, while conventional models are more optimal for small tabular data and simple classification tasks.
