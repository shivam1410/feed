---
title: "cAPM: Continual AI-Assisted Pace-Mapping with Active Learning"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19373"
authors: ["Dylan O'Hara, Pradeep Bajracharya, Casey Meisenzahl, Karli Gillette, Anton J. Prassl, Gernot Plank, Saman Nazarian, Roderick Tung, John L Sapp, Linwei Wang"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19373v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19373v1 Announce Type: new Abstract: Ventricular tachycardia is a life-threatening rhythm disorder and a major cause of sudden cardiac death. Pace-mapping is a clinical procedure for identifying the intervention target during catheter ablation of VT. It requires clinicians to pace different sites in the ventricles and rapidly interpret the resulting electrocardiograms to determine where to pace next or whether a target site has been identified. Active learning AI models have been proposed to guide clinicians to the next pacing site, showing promise in reducing the number of pacing sites and improving the efficiency of pace-mapping. Existing methods require retraining each target without the ability to transfer knowledge across multiple VTs within the same patient or across patients. We introduce cAPM for continuous AI-assisted pace-mapping to capture and transfer knowledge accumulated from past pace-mapping data to reduce the number of pace-mapping data needed for future target VTs. This is made possible by a task-agnostic surrogate neural network that learns the mapping from pacing sites to 12-lead ECG morphology, an active-learning strategy that refines this surrogate model by selecting the most informative pacing site for each target, and a continual learning strategy to do so sequentially while retaining knowledge from prior targets. Evaluated on an in-silico testbed consisting of sequentially-presented localization tasks across different physiological conditions and ventricular geometries, cAPM with and without replay of past data samples achieved an 81% probability of localizing within clinical tolerance (5 mm accuracy) using 4.5 pace-mapping sites, compared to the state-of-the-art active-learning method achieving 38% probability using 13.7 pacing sites. These results provide a strong basis for preparing cAPM towards in-vivo preclinical and clinical studies where it can be used to guide pace-mapping.
