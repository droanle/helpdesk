import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Donutchart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      theme: {
        mode: 'dark', 
        palette: 'palette10', 
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
    },
      chart: {
        type: 'donut',
        width: '500px',
        height: '100%',
        background: 'transparent',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 3,
        }
      },
      series: [44, 55, 13, 43, 22],
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="chart" ref={chartRef} />;
};

export default Donutchart;
