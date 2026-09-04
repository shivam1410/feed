---
title: "A Two-Stage Forecasting System for CPU Workload Prediction in Private Clouds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03457"
authors: ["Ashir Javeed, Anton Borg, H{\\aa}kan Grahn, Lars Lundberg, Dhyey Patel, Sogand Shirinbab"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.03457v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03457v1 Announce Type: new Abstract: Accurate cloud resource forecasting is essential for proactive resource provisioning, maintaining Quality of Service (QoS), and reducing operational costs in dynamic cloud environments. The existing forecasting approaches predominantly estimate future CPU workload directly from historical resource traces, which often overlook the relationship between customer service demand and subsequent resource consumption. This study proposes a two-stage integrated forecasting model that explicitly models this dependency by first forecasting customer service requests, expressed as Transactions Per Second (TPS), and subsequently estimating future CPU workload from the TPS forecast. Both the forecasting component and resource prediction component employed the XGBoost model within a cascaded learning architecture, complemented by adaptive online retraining using an expanding-window strategy to address concept drift in continuously evolving cloud workloads. The proposed work was evaluated using real-world traces collected from a private cloud environment comprising ten applications. Experimental results demonstrate robust forecasting performance by achieving Symmetric Mean Absolute Percentage Error (SMAPE) below $7\%$ for most applications, with the best-performing application achieving an MAE of $0.7372$, RMSE of $1.1866$, SMAPE of $3.57\%$, and an R2 of $0.9185$. Horizon-wise drift analysis confirmed stable recursive forecasting behavior with controlled error accumulation across a 60-step prediction horizon. Compared with the conventional direct CPU forecasting method, the proposed two-stage integrated model gives improved forecasting robustness, computational efficiency, and interpretability, making it well-suited for proactive resource management and intelligent auto-scaling in cloud computing environments.
