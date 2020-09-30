function buildDash() {
    var testID = d3.select("#sel1").node().value;
    console.log(testID);
    d3.select('#demog').text("");
    buildMetadata(testID);
    buildCharts(testID);
};

function buildMetadata(sample) {

    // Using d3.json to Fetch the Metadata for a Sample
    d3.json('data/samples.json').then((data) => {
        // Use d3 to Select the Panel with id of `#sample-metadata`
        console.log(data)
        var metadata = data.metadata.filter(function(d) { return d.id == sample; })[0];
        console.log(metadata)
        var P = d3.select("#demog");
        Object.entries(metadata).forEach(([key, value]) => {
            P.append("p").text(`${key}:${value}`);
        });

        // Building Gauge Chart
        buildGauge(metadata.wfreq);
    });
};

//   buildMetadata()

// function metaData(sample) {

//     // Use the D3 library to read in `samples.json`
//     d3.json("./samples.json").then(function(data) {
//         // console.log(data)

//         // var samples = data.samples;
//         // // console.log(samples)

//         var metadata = data.metadata.filter(function(d) { return d.id == sample; })[0];
//         console.log(metadata)

//         // Select the HTML with ID sample-metadata
//         var sampleMetadata = d3.select("#sample-metadata");

//         sampleMetadata.html("");

        // Object.defineProperties(samples).forEach(function([key,value]){
        //     var row = sampleMetadata.append("p");
        //     row.text(`${key}:${value}`)
        // })
        // var samples = data.samples;
        // console.log(samples)

        // var obj = samples.filter(s => s.samples.toString() == id)[0]

        // var sampleValues = samples.sample_values.slice(0,10).reverse();
        // console.log(sampleValues);

//     });
// }

// metaData()
        // var names = data.names;
        // // console.log(names)
        // var metadata = data.metadata;
        // // console.log(metadata)
        // var samples = data.samples;
        // // console.log(samples)
        

        // Somehow get sample_values, out_ids, and otu_labels
        // out of sample
        // Use map?
        // var otuIDs = samples.map(row => row.otu_ids)
        // // console.log(otuIDs)
        // var sampleValues = samples.map(row => row.sample_values)
        // // console.log(sampleValues)
        // var otuLabels = samples.map(row => row.otu_labels)
        // console.log(otuLabels)
        

        // Use `sample_values` as the values for the bar chart.

        // Use `otu_ids` as the labels for the bar chart.

        // Use `otu_labels` as the hovertext for the chart.
 

        // Create a horizontal bar chart with a dropdown menu 
        // to display the top 10 OTUs found in that individual.
        // var data = {
        //     x: otuIDs,
        //     y: names,
        //     values: sampleValues,
        //     labels: otuIDs,
        //     type: "bar",
        //     orientation: "h"
        // };
        // data = [data]
        // var layout = {
        //     height: 800,
        //     width: 800
        // };

        // Plotly.newPlot("bar", data, layout);

