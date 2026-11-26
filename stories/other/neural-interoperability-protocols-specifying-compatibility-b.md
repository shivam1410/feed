---
title: "Neural Interoperability Protocols: Specifying Compatibility Before Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31670"
authors: ["Alireza Bagheri"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31670v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Neural networks are increasingly developed as reusable components, yet their intermediate representations remain difficult to exchange across independently trained models. Existing approaches can align representations or encourage compatible features, but successful transfer between particular models does not by itself define what future implementations must satisfy to interoperate. We introduce Neural Interoperability Protocols (NIPs), a specification-first framework that treats neural compatibility as a set of public interface obligations rather than a property inferred solely from model-pair performance. A NIP specifies an exchange boundary, the semantics and admissibility conditions of exchanged packets, and the downstream computations that recipients must support, independently of the architectures and training procedures implementing it. We investigate this distinction through controlled retrieval, vision, and continuous-memory experiments involving independently trained models, differing architectures and objectives, and later training cohorts. Matched-competence controls demonstrate that native task success does not ensure interoperability, while shared semantic supervision enables substantial direct transfer in the evaluated settings. Withheld-information experiments show that recipient models can continue computations requiring information unavailable to donors at exchange time. Partial-contract experiments and packet interventions further establish that observed compatibility is conditional on the semantics, packet populations, and recipient continuations being evaluated. Together, these results support public neural interface specifications as a framework for designing prospective component exchange and distinguishing demonstrated interoperability from stronger conformance claims.
