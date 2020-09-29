function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

function buildPlot() {

    // Use the D3 library to read in `samples.json`
    d3.json("../data/samples.json").then(function(data) {
        console.log(data)
        var names = data.names;
        console.log(names)
        var sample = data.samples;
        console.log(sample)
    }); 
}

buildPlot()

