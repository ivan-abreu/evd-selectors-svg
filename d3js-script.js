d3.svg(
  'https://raw.githubusercontent.com/ivan-abreu/evd-selectors-svg/master/infografia.svg'
).then(data => {
  d3.select('#wrapperdv')
    .node()
    .append(data.documentElement);
});
