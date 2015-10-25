var csvData;
d3.csv('/public/data/taw-photo_metal_subset.csv', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    csvData = data;
  }
});
