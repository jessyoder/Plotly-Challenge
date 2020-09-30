// Build function for plotting charts
function buildPlot(id) {

    // Use the D3 library to read in `samples.json`
    d3.json("./samples.json").then((data) => {
    // console.log(data);

    // Get metadata and filter by id
    var sample = data.samples
    // console.log(sample);

    var id = sample.filter(function(d) { return d.sample == id; })
    // console.log(id);

    var sampleValue = id.map(id => id.sample_values);
    // console.log(sampleValues);

    var sampleValues = sampleValue.slice(0,10).reverse();
    // console.log(sampleValues);

    var otuID = id.map(id => id.otu_ids);
    // console.log(otuID);

    var otuIDs = otuID.slice(0,10).reverse();
    // console.log(otuIDs);

    var chartLabels = otuIDs.map(function(d) { return "OTU " + d });
    // console.log(chartLabels)

    var hoverText = otuIDs;

    // Create a horizontal bar chart to display 
    // the top 10 OTUs found in that individual
    var trace = {
        x: sampleValue,
        y: chartLabels
    };

    var data = [trace];

    var layout = {
        title: 'Top 10 OTUs',
        xaxis: {title: 'Sample Values'},
        yaxis: {
            title: 'OTU ID'},
    };

    Plotly.newPlot("bar", data, layout);

    });

    // Create a bubble chart that displays each sample
    var trace1 = {
        x: otuID,
        y: sampleValue,
        mode: 'markers',
        marker: {
            size: sampleValue,
            color: otuID
        }
    };

    var data1 = [trace1];

    layout1 = {
        title: 'Total OTU Values',
        xaxis: 'OTU ID',
        yaxis: 'Sample Values'
    };

    Plotly.newPlot("bubble", data1, layout1);

};

buildPlot()

