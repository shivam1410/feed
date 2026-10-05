---
title: "From Mathematical to Executable Certificates for Machine Unlearning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02268"
authors: ["Ziyu Zhao, Xinyu Wang, Xiaowen Chang, Yixuan He"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.02268v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Machine unlearning is needed when data must be removed because of deletion requests, outdated records, or data-quality concerns, while retraining from scratch can be costly. Certified machine unlearning methods provide mathematical guarantees, while deployed systems release concrete finite-precision artifacts produced by software. To bridge the gap between mathematical guarantees and practical deployment, we introduce Executable Release Certification (ExecCert), a release-time layer that certifies the candidate artifact considered for release. ExecCert either closes a method's native certificate for the executed candidate or applies Retraining-Reference Release Verification (RRV) to certify fidelity to current retain-set retraining. Sequential deletion makes the latter nontrivial because the exact retain-set reference and the stored numerical state evolve separately. For frozen representations with a mutable ridge head, we develop an incremental realization of RRV that maintains certified evidence across deletion requests rather than reconstructing it at each release. On four published unlearning implementations, ExecCert preserves valid certificates, changes release decisions, tightens conservative bounds, and identifies the retraining-reference fidelity supported by concrete outputs. In sequential-service experiments, RRV eliminates false releases caused by stored-equation verification while closely tracking realized error, and incremental certification remains cheaper than both fresh and maintained verified-factor alternatives once release checks become sufficiently frequent.
