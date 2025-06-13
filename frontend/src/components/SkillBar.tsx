import React, { useState } from "react";
import Chart from "react-apexcharts";

interface Skill {
  name: string;
  level: number;
  color: string; // Base color for the gradient
}

interface SkillBarChartProps {
  skills: Skill[];
  animate: boolean; // Control animation trigger
}

const SkillBar: React.FC<SkillBarChartProps> = ({ skills, animate }) => {
  const series = [
    {
      data: skills.map((skill) => (animate ? skill.level : 0)), // Animate only when triggered
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
      animations: {
        enabled: true,
        speed: 1500, // Slow down the animation (2 seconds)
        dynamicAnimation: {
          enabled: true,
          speed: 2000, // Slow down dynamic animations
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6, // Rounded edges for the bars
        columnWidth: "80%", // Increase column width to make bars wider
        distributed: true, // Enable distributed colors for individual bars
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -40, // Set a consistent offset from the bottom of the bar
      style: {
        colors: ["#ffffff"], // Set the text color for percentage values
        fontSize: "24px", // Increase font size
        fontWeight: "bold", // Make the font bold
      },
      formatter: (val: number) => `${val}%`, // Add percentage symbol to the value
    },
    xaxis: {
      categories: skills.map((skill) => skill.name),
      labels: {
        style: {
          fontSize: "14px", // Set font size
          fontWeight: 600, // Set font weight to semibold
          colors: "#757575", // Set dark gray color
        },
      },
    },
    yaxis: {
      min: 0, // Ensure the y-axis starts from 0
      tickAmount: 4, // Divide the y-axis into 4 sections (0, 25, 50, 75, 100)
      max: 100, // Set the maximum value to 100
      labels: {
        formatter: (val: number) => {
          switch (val) {
            case 0:
              return ""; // Show nothing for 0
            case 25:
              return "Curious Newbie";
            case 50:
              return "Skilled Assembler";
            case 75:
              return "Sharp Solver";
            case 100:
              return "Helpful Mentor";
            default:
              return ""; // Default to empty for other values
          }
        },
        style: {
          fontSize: "15px", // Set font size
          fontWeight: 600, // Set font weight to semibold
          colors: "#757575", // Set dark gray color
        },
      },
    },
    fill: {
      type: "gradient", // Use a gradient fill for the bars
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: skills.map((skill) => skill.color), // Gradient end colors
        stops: [0, 100], // Gradient stops
      },
    },
    colors: skills.map((skill) => skill.color), // Base colors for the gradient
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`, // Add percentage symbol to tooltip
      },
    },
    legend: {
      show: false, // Disable the legend
    },
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md"> {/* Full-width container */}
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default SkillBar;
