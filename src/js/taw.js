var csvData;
d3.csv('https://s3.amazonaws.com/mith-taw/taw-photo_metal_subset.csv', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    csvData = data;
  }
});
