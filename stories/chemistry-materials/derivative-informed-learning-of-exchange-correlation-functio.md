---
title: "Derivative Informed Learning of Exchange-Correlation Functionals"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04279"
authors: ["Eike S. Eberhard, Luca A. Thiede, Abdul Aldossary, Andreas Burger, Nicholas Gao, Vignesh Bhethanabotla, Al\\'an Aspuru-Guzik, Stephan G\\\"unnemann"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.04279v1"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

arXiv:2606.04279v1 Announce Type: new Abstract: Machine-learned (ML) exchange-correlation (XC) functionals aim to replace human-designed density functional approximations by learning directly from reference data, but they still do not consistently outperform traditional $\mathcal{O}(N^4)$-scaling hybrid functionals. We study a hybrid-distillation setting in which $\mathcal{O}(N^3)$-scaling ML-XC functionals are trained to reproduce B3LYP/def2-SVP targets. We introduce Derivative Informed XC-Loss (DI-Loss), a loss that incorporates additional information from the reference hybrid functional by supervising first and second derivatives of the energy on the Grassmannian of admissible density matrices. Rather than only matching the self-consistent fixed point, DI-Loss aligns the local first- and second-order response of the learned functional with that of the target functional. Across four evaluated architectures, DI-Loss consistently improves the main energy metrics. Averaged uniformly across architectures, the total-energy MAE decreases by 66% relative to energy and density supervision alone. The density-sensitive mean-field energy metric $E_\rho$ improves from $1.2$ to $0.8$ mEh on average, while dipole and $\mathcal{L}_2$ density errors do not improve uniformly. We further show that densities from the distilled functionals reduce hybrid-functional SCF iterations by up to 50%. In downstream TDDFT calculations, Hessian supervision improves excited-state predictions, with XCdiff reducing the mean excitation-energy MAE by 19 - 35%.
