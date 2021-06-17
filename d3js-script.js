var url = 'https://raw.githubusercontent.com/ivan-abreu/evd-selectors-svg/master/infografia.svg';
// d3.svg(url).then(data => {
//   d3.select('#wrapperdv').node().append(data.documentElement);
// });

d3.svg(url).then( function(data) {
  d3.select('#wrapperdv').node().append(data.documentElement);

  d3.selectAll('.rectangulos')
    .attr('data-value', '181')
    .append('text')
    .text("hola")
    .attr('y','200')
    .attr('x',200)


});
