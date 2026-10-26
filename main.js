
var chart1 = "charts/chart1_released_date.json";
vegaEmbed("#chart1", chart1, {
    actions: false,
    renderer: "svg",
    mode: "vega-lite"
}).catch(console.error);


var chart2 = "charts/chart2_playingtime_distribution.json";
vegaEmbed("#chart2", chart2, {
    actions: false,
    renderer: "svg",
    mode: "vega-lite"
}).catch(console.error);


var chart3 = "charts/chart3_player_count_ranking.json";
vegaEmbed("#chart3", chart3, {
    actions: false,
    renderer: "svg",
    mode: "vega-lite"
}).catch(console.error);


var chart4 = "charts/chart4_minAge.json";
vegaEmbed("#chart4", chart4, {
    actions: false,
    renderer: "svg",
    mode: "vega-lite"
}).catch(console.error);

var chart5 = "charts/chart5_mechanics_by_era.json";
vegaEmbed("#chart5", chart5, {
    actions: false,
    renderer: "svg",
    mode: "vega-lite"
}).catch(console.error);


var chart6 = "charts/chart6_mechanics_network.json";
vegaEmbed("#chart6", chart6, {
    actions: false,
    renderer: "svg",
    mode: "vega-lite"
}).catch(console.error);

vegaEmbed("#chart7", "charts/chart7_mechanics_dna.json", {
  actions: false,
  renderer: "svg"
}).catch(console.error);

vegaEmbed("#chart8", "charts/chart8_rating.json", {
  actions: false,
  renderer: "svg"
}).catch(console.error);

vegaEmbed("#chart9", "charts/chart9_boardgames_cafes.json", {
  actions: false,
  renderer: "svg"
}).catch(console.error);

vegaEmbed("#chart10", "charts/chart10_funding.json", {
  actions: false,
  renderer: "svg"
}).catch(console.error);

vegaEmbed("#chart11", "charts/chart11_campaign.json", {
  actions: false,
  renderer: "svg"
}).catch(console.error);
