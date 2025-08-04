import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const AMLBarChart = ({ data }) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create(chartRef.current, am4charts.XYChart);

    chart.data = data;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "reason";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = "Flag Reason";
    categoryAxis.renderer.labels.template.rotation = -45;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Count";

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "count";
    series.dataFields.categoryX = "reason";
    series.columns.template.tooltipText = "{reason}: [bold]{count}[/]";
    series.columns.template.fill = am4core.color("#007bff");
    series.columns.template.strokeWidth = 0;

    chart.cursor = new am4charts.XYCursor();

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default AMLBarChart;
