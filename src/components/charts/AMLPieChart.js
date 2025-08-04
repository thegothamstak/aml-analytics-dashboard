import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const AMLPieChart = ({ data }) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create(chartRef.current, am4charts.PieChart);

    chart.data = data.map(item => ({
      category: item.province,
      value: item.risk,
    }));

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.tooltipText = "{category}: {value}% risk";
    pieSeries.colors.step = 3;

    pieSeries.labels.template.text = "{category}";
    pieSeries.labels.template.radius = 28;
    pieSeries.labels.template.fill = am4core.color("#000");

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default AMLPieChart;
