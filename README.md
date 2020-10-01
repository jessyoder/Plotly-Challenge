# Plotly-Challenge

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this project, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

I used the D3 library to read in `samples.json`. I created a dashboard that displayed these elements of the study:

1. I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

2. I also created a bubble chart that displays each sample.

3. I displayed the sample metadata, i.e., an individual's demographic information.

4. I displayed each key-value pair from the metadata JSON object somewhere on the page.

5. I included a dropdown button that displayed the sample study participant's id numbers, which a dashboard user can change to send a new sample's demographic and study information to all of the plots any time that a new sample is selected.

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)