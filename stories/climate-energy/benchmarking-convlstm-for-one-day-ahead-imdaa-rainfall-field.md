---
title: "Benchmarking ConvLSTM for One-Day-Ahead IMDAA Rainfall-Field Prediction across Four Indian Cities"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26581"
authors: ["Tanmay Ghosh, Shaurabh Anand, Rakesh Gomaji Nannewar, Nithin Nagaraj"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2607.26581v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26581v1 Announce Type: new Abstract: Convolutional long short-term memory networks (ConvLSTMs) are widely used for precipitation forecasting, but most evidence for their performance comes from dense, high-frequency radar sequences. This study tests whether convolutional recurrence improves one-day-ahead rainfall-field prediction on small daily reanalysis grids. Indian Monsoon Data Assimilation and Analysis (IMDAA) fields for June-September 1998-2020 were analysed for Bengaluru, Delhi, Kolkata and Mumbai. Ten naive, statistical, tree-based and neural approaches were compared using atmospheric-only and rainfall-history-plus-atmospheric inputs. Performance was assessed for complete fields, domain-mean rainfall, spatial anomalies and high-rainfall days. ConvLSTM did not consistently outperform simpler alternatives. FC-LSTM produced the numerically lowest domain-mean rainfall error in Bengaluru, Kolkata and Mumbai, whereas persistence performed best in Delhi. ConvLSTM produced the numerically lowest spatial-anomaly error only in Mumbai, where rainfall fields showed greater short-term spatial continuity and rainfall-history inputs improved all three neural architectures. The difference between ConvLSTM and FC-LSTM was nevertheless small. Neural models underestimated rainfall magnitude and predicted too few threshold exceedances on high-rainfall days, while persistence achieved the highest detection performance in every city. Post-hoc analyses showed that the selected models were most sensitive to the latest input day, with broader recent-lag sensitivity in Mumbai. These findings show that gridded inputs alone do not justify ConvLSTM and that architecture choice should follow strong benchmarking across average, spatial and high-rainfall performance.
