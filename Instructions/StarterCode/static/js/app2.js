function metaData(sample) {
    // Use the D3 library to read in `samples.json`
    d3.json("./samples.json").then((data) => {
        
        // Collect metadata information from samples.json
        var metadata = data.metadata;
        // console.log(metadata)

        // var metaFilter = metadata.filter(obj => obj.id == sample)
        // console.log(metaFilter);

        // Select HTML where demographic information should go
        var demoInfo = d3.select("#sample-metadata");

        // Clear the value each time
        demoInfo.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(metadata).forEach(([key, value]) => {
            demoInfo.append("p").text(`${key}: ${value}`)
        });
    });
};

metaData()

// Build function for plotting charts
function buildPlot(sample) {

// Use the D3 library to read in `samples.json`
    d3.json("./samples.json").then((data) => {
        // console.log(data);

        // Get metadata and filter by id
        var sample = data.samples;
        // console.log(sample);

        var id = sample.filter(function(d) { return d.sample == id; })[0]
        // console.log(id);

        // var sampleValue = id.map(id => id.sample_values);
        // // console.log(sampleValues);

        var sampleValues = sample.slice(0,10).reverse();
        // console.log(sampleValues);

        var otuID = sample.map(id => id.otu_ids);
        // console.log(otuID);

        var otuIDs = otuID.slice(0,10).reverse();
        // console.log(otuIDs);

        var chartLabels = otuIDs.map(function(d) { return "OTU " + d });
        // console.log(chartLabels)

        var hoverText = chartLabels;

        // Create a horizontal bar chart to display 
        // the top 10 OTUs found in that individual
        var trace = {
            x: sampleValues,
            y: chartLabels,
        };

        var data = [trace];

        var layout = {
            title: 'Top 10 OTUs',
            xaxis: {title: 'OTU Values'},
            yaxis: {
                title: 'OTU IDs'},
        };

        Plotly.newPlot("bar", data, layout);

        // Create a bubble chart that displays each sample
        var trace1 = {
            x: otuIDs,
            y: sampleValues,
            mode: 'markers',
            marker: {
                size: sampleValues,
                color: otuIDs
            }
        };

        var data1 = [trace1];

        layout1 = {
            title: 'Total OTU Values',
            // xaxis: 'OTU ID',
            // yaxis: 'Sample Values'
        };

        Plotly.newPlot("bubble", data1, layout1)
    });

};

buildPlot();

// Create a function to update all of the plots any time 
// a new sample is selected
function init() {

    var dropDown = d3.select("#selDataset");

    d3.json("./samples.json").then((data) => {
        
        var names = data.names;
        dropDown.selectAll('option')
            .data(names)
            .enter()
            .append('option')
            .text(function(d) {
                return d;
            });
    });

    // function optionChanged(newExample) {
    //     metaData(newExample)
    //     buildPlot(newExample)
    // }
};

function optionChanged(newSample) {
    metaData(newSample)
    buildPlot(newSample)
}

init()
