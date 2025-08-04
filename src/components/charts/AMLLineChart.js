import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const AMLLineChart = ({ data }) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create(chartRef.current, am4charts.XYChart);
    chart.paddingRight = 20;

    chart.data = data.map(item => ({
      date: new Date(item.date),
      count: item.count,
    }));

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.title.text = "Date";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Flagged Transactions";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "count";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.tooltipText = "{count} flagged transactions on {date.formatDate('MMM dd')}";
    series.fillOpacity = 0.3;
    series.fill = am4core.color("#4caf50");
    series.stroke = am4core.color("#388e3c");

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    chart.scrollbarX = new am4core.Scrollbar();

    chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default AMLLineChart;
