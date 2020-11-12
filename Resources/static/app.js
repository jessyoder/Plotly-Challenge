function buildMetadata(sample) {
    // Use the D3 library to read in `samples.json`
    d3.json("samples.json").then((data) => {

        // Collect metadata information from samples.json
        var metadata = data.metadata;
        // console.log(metadata)

        var metaFilter = metadata.filter(obj => obj.id == sample);
        var result = metaFilter[0];
        // console.log(metaFilter);

        // Select HTML where demographic information should go
        var demoInfo = d3.select("#sample-metadata");

        // Clear the value each time
        demoInfo.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
            demoInfo.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}


// Build function for plotting charts
function buildPlot(sample) {

    // Use the D3 library to read in `samples.json`
    d3.json("samples.json").then((data) => {
        // console.log(data);

        // Get metadata and filter by id
        var samples = data.samples;
        var metaFilter = samples.filter(obj => obj.id == sample);
        var result = metaFilter[0];

        var otuIds = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sampleValues = result.sample_values;

        // Create a bubble chart that displays each sample
        var bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30 }
        };

        var bubbleData = [
            {    
                x: otuIds,
                y: sampleValues,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sampleValues,
                    color: otuIds,
                    colorscale: "Earth"
                }
            }
        ];

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

        var yticks = otuIds.slice(0, 10).map(otuIds => `OTU ${otuIds}`).reverse();

        // Create a horizontal bar chart to display the top 10 OTUs found in that individual
        var barData = [
            {
                y: yticks,
                x: sampleValues.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];

        var barLayout = {
            title: "OTU IDs",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barData, barLayout);
    });
}


// Create a function to update all of the plots any time a new sample is selected
function init() {

    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {

        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append('option')
                .text(sample)
                .property("value", sample);
        });

        var firstSample = sampleNames[0];
        buildPlot(firstSample);
        buildMetadata(firstSample);
    });
}

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildPlot(newSample);
}

init();
