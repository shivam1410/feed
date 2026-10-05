---
title: "Validated Data Onboarding for AI Demand Forecasting on U.S. Building Meter Data: Design, Controlled Evaluation, and a Corrected Negative Result"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02397"
authors: ["Yixuan Liang"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.02397v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Electric utilities and grid operators increasingly rely on machine-learning models to forecast next-day demand, and those models learn from meter data that is routinely defective: readings go missing, sensors freeze, buildings read zero for hours, and units change by a factor of 100. This report presents a data-onboarding pipeline that detects and repairs such defects before a model is trained, using only information available at forecast time, and a controlled experiment that measures whether the pipeline protects a 24-hour-ahead forecast. On hourly electricity data for twelve U.S. buildings from the public Building Data Genome 2 dataset (210,528 rows, 2016-2017), seeded, hash-logged defects touching 0.10% of the training period raised the error of a gradient-boosting forecaster by 86%; after detection and past-only repair the error returned to the clean-data level (mean absolute scaled error 0.760 clean, 1.415 corrupted, 0.729 repaired) while 93% of training targets were retained. At a defect prevalence calibrated to published field studies (1.6% of training rows) the unprotected forecaster's error reached 4.4 times that of a seasonal-naive rule, and the repaired forecaster again matched the clean baseline. The same pattern held for ridge regression and a random forest and across horizons of 1 to 24 hours. A first version of the pipeline over-cleaned natural data and made forecasts 25% worse; that result is retained, its cause is traced in the published artifacts, and the per-building calibration that corrects it is documented as a dated amendment. Every number is reproducible from pinned public inputs with SHA-256 verification, 84 automated tests and continuous integration.
