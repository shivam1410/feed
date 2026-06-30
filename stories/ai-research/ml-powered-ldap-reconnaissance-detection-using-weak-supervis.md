---
title: "ML-Powered LDAP Reconnaissance Detection using Weak Supervision"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28917"
authors: ["Shaefer Drew, Edward Raff, Michael Brautbar, Yaron Zinar, Benjamin Malmberg, Dor Agron, Sagi Sheinfeld, Avraham Kama, Asaf Romano"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 47
guid: "oai:arXiv.org:2606.28917v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28917v1 Announce Type: new Abstract: Lightweight Directory Access Protocol (LDAP) is a protocol that allows users to query and modify Active Directory (AD) data. By default, all users have read access to all AD data through LDAP, making it a common initial tool for reconnaissance when a threat actor first compromises an identity. To capture threat actors early in the reconnaissance phase, we developed two machine learning frameworks to detect LDAP reconnaissance: an ML classifier to predict malicious LDAP queries and an ML-based data-mining method to extract malicious query signatures. By correlating LDAP queries with endpoint detections, the first framework uses weak supervision to label a massive dataset and classify LDAP queries as malicious or benign. For immediate deployment, a second technique was developed on top of this approach to employ a rigorous statistical hypothesis-testing framework for mining novel, malicious LDAP signatures. While this weakly supervised approach is limited compared with manual human labeling, it is more practical for this use case because it leverages large-scale automated corpus construction, reducing costs and time. Ultimately, both the LDAP classifier and the ML-based LDAP signature mining method achieved performance benchmarks, with the classifier achieving up to a 65\% True Positive Rate (TPR) on the holdout set while limiting false positives, and mined signatures demonstrating 81.48\% field precision with CrowdStrike's Managed Detection and Response team.
