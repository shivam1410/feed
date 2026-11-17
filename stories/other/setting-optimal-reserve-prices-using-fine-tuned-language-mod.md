---
title: "Setting Optimal Reserve Prices using Fine-Tuned Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18785"
authors: ["Joshua Foster, Fredrik Odegaard"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18785v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Online auction houses must set reserve prices for highly differentiated products whose unstructured descriptions contain valuable demand information. Existing approaches generally require managers to specify product attributes in advance. We ask whether a language model can instead learn from listing descriptions and historical bids to set item-specific reserve prices before bidding begins. We fine-tune a pretrained text embedding language model using the structural likelihood of auction bids as its training objective. This directs representation learning toward the valuation distribution that determines the reserve decision. We show that consecutive upper bids identify the tail information needed to set an optimal reserve without observing or modeling the number of potential bidders. A split-sample estimator learns the representation on one half of the data and conducts structural estimation and inference conditional on that representation on the other. We apply the method to approximately 65,800 online used-vehicle auctions. With seller values calibrated to match the sale rate among listings, the model implies a counterfactual net increase of $165.8 million, representing a 14.6% increase above the incumbent reserve policy. The framework translates a listing description and a seller's value into an item-specific reserve recommendation without constructing a product taxonomy or requiring a bid history for the item being priced. It provides an approach to adapting language models for operational decisions in marketplaces where products are heterogeneous and demand-relevant information is recorded in text.
