
async function renderChart(elementId, specPath) {
  const container = document.getElementById(elementId);

  try {
    const response = await fetch(specPath);

    if (!response.ok) {
      throw new Error(`Could not load ${specPath}: ${response.status}`);
    }

    const spec = await response.json();

    await vegaEmbed(container, spec, {
      actions: false,
      renderer: "svg",
      mode: "vega-lite"
    });
  } catch (error) {
    console.error(error);

    container.textContent =
      "Unable to load this chart. Check the JSON path and data source.";
    container.style.color = "#a33";
  }
}

renderChart(
  "chart1",
  "charts/chart1_released_date.json"
);

renderChart(
  "chart2",
  "charts/chart2_playingtime_distribution.json"
);

renderChart(
  "chart3",
  "charts/chart3_player_count_ranking.json"
);

renderChart(
  "chart4",
  "charts/chart4_minAge.json"
);