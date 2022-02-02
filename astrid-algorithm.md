---
description: Documentation of Astrid algorithm development. Step by step.
---

# Astrid Algorithm

As we have previously said, estimating an NFT is extremely complicated. There are tons of events and data that make the NFT value an uncertain variable. We built our model on two concepts: flexibility and accuracy. Our target is to offer a model that can adapt to as many types of NFTs, with fast and precise outputs. To make this possible, we evaluated, analyzed and statistically demonstrated the influence of certain data, which were then integrated into our algorithm. They are the following:

* **Popularity of NFTs Creator** - Obviously, an NFT created by a person or an entity with a strong media relevance, tends to acquire a high value immediately. Often the most famous artists offer their NFTs on their social networks where they have millions of followers. This advertising obviously makes NFTs more in demand. In our algorithm we will consider the following data

1. **OpenSea Verified Badge**-The presence of the **verified badge** on the creator's OpenSea account&#x20;
2. **Popularity Score-**an algorithm that allows you to estimate the popularity of a person or entity on social networks.

* **Features of Collection** - We have never seen the 'collection' variables considered in previously developed algorithms. We think (and have statistically demonstrated) that some features of the collection, can increase the intrinsic value of the single NFT. So in our model we have inserted the following data:

1. **Number of items in the collection** - Obviously, the number of items in the collection influences the price of the single item. Assuming a collection capitalized at $ 10 million, if there were 10 pieces, each would be valued at $ 1 million. If there were 100, each piece would be valued at $ 100,000. Furthermore, a collection with a smaller number of pieces generates in the buyer a certain sense of FOMO that will make him act more impulsively. All of this positively affects the price of the single NFT.
2. **Distribution of the rarity of traits** - The above concept is also applicable to this concept. The presence of pieces with not very common features affects the deflation of the collection and therefore positively on its value.
3. **Collection sales statistics** - This dataset is a clear indication of the economy of the collection. Long and medium term statistics are introduced, on the average price and economic flow of the collection. The demand for the pieces from a collection strongly influences the demand for the single piece from that collection.

* **NFT Features** - This is probably the most important dataset. For this reason, we are not stopped to carry out a simple evaluation of the data relating to the history of the NFT, but we have introduced Computer Vision and SVM algorithms to be able to take into account the visual characteristics of the NFT. Currently, no algorithm except ours allows you to estimate the value of an NFT by combining economic characteristics with visual characteristics of the NFT. In summary, this was the dataset considered:

1. **Visual Features** - Through complex models of Computer Vision and Supported Vector Machines, our system is able to build two matrices that represent the shapes and the presence of colors within the NFT.
2. **Rarity Score of the single piece** - The concept of rarity of the collection, compared to the average rarity of the collection and considered in absolute terms.
3. **Economic History** - these data allow the model to evaluate the economic history of the piece, therefore how many times it has been exchanged and the value of these transitions.

* **Market History Data** - This is another variable that we have seen being unconsidered in the models developed so far. The value of the piece is influenced by the trend of the NFT market. Obviously, a thriving market increases the demand and therefore the price of digital collectibles. In our model, we take into account data on the short, long and medium term of the NFT market.

All these data allow us to obtain a robust dataset to analyze. For this reason, powerful algorithms for extracting and modeling the required data have been developed. Once the dataset was built with all the normalized data, we proceeded to the tests to choose the Machine Learning model to be applied.&#x20;

\*\*//HERE CONTINUE WITH ALGORITHM DEVELOPING\*\*

