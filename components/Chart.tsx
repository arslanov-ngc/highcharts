import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsOrganization from 'highcharts/modules/organization';
import { useEffect, useState } from 'react';

if (typeof Highcharts === 'object') {
  HighchartsSankey(Highcharts);
  HighchartsOrganization(Highcharts);
}

type Structure = {
  id: number;
  title: string;
  parent_id?: number;
  guide_id: number;
  level: number;
  children: Structure[];
};

type Props = {
  data: Structure[];
};

const OrganizationChart = ({ data }: Props) => {
  const [maxCount, setMaxCount] = useState(0);
  const [width, setWidth] = useState(75);

  const modifiedData = data
    .filter((item) => item?.parent_id)
    .map((item) => {
      return { from: item?.parent_id && item?.parent_id.toString(), to: item?.id.toString() };
    });

  const dataNodes = data.map((item) => {
    return {
      id: item?.id.toString(),
      name: item?.title,
      // column: item?.level,
      dataLabels: {
        useHTML: true,
      },
    };
  });

  const levels = data.reduce((acc: any, current: any) => {
    const { level } = current;
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});

  for (const level in levels) {
    if (levels[level] > maxCount) {
      setMaxCount(() => levels[level]);
    }
  }

  function call(id: string) {
    alert(id);
  }

  function getWidth() {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth < 1300) {
      setWidth(() => 50);
    } else if (windowWidth < 1400) {
      setWidth(() => 50);
    } else if (windowWidth < 1600) {
      setWidth(() => 60);
    } else {
      setWidth(() => 75);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', getWidth);

    getWidth();

    return () => document.removeEventListener('resize', getWidth);
  }, []);

  const options: Options = {
    chart: {
      // zooming: {
      //   type: 'xy',
      //   pinchType: 'xy',
      //   // mouseWheel: false,
      //   // singleTouch: true,
      // },
      type: 'organization',
      panning: {
        enabled: true,
      },
      panKey: 'shift',
      // inverted: true,
      spacing: [20, 20, 20, 20],
      // width: (Object.keys(levels).length + 1) * width * Object.keys(levels).length,
      height: `${maxCount * 120}px`,
    },
    xAxis: {
      panningEnabled: true,
    },
    yAxis: {
      enabled: true,
      panningEnabled: true,
    },
    title: {
      text: '',
    },
    // accessibility: {
    //   point: {
    //     descriptionFormat:
    //       '{add index 1}. {toNode.name}' +
    //       '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' +
    //       'reports to {fromNode.id}',
    //   },
    // },
    tooltip: {
      enabled: false,
    },
    exporting: {
      allowHTML: true,
      // sourceWidth: 800,
      // sourceHeight: 1000,
    },

    series: [
      {
        type: 'organization',
        // name: '',
        keys: ['from', 'to'],
        cursor: 'pointer',
        point: {
          events: {
            click: function () {
              // @ts-ignore
              call(this.options.id as string);
            },
          },
        },
        // @ts-ignore
        data: modifiedData,
        nodes: dataNodes,
        levels: [
          {
            level: 0,
            color: '#375289',
            borderColor: '#375289',
            borderWidth: 2,
            dataLabels: {
              style: {
                // fontSize: '12px',
                color: '#fff',
              },
            },
          },
          {
            level: 1,
            color: '#fff',
            borderColor: '#375289',
            borderWidth: 2,
            dataLabels: {
              style: {
                color: '#000',
              },
            },
          },
          {
            level: 2,
            color: '#fff',
            borderColor: '#aaa',
            borderWidth: 2,
            dataLabels: {
              style: {
                color: '#333',
              },
            },
          },
          {
            level: 3,
            color: '#fff',
            borderColor: '#aaa',
            dataLabels: {
              style: {
                color: '#666',
              },
            },
          },
          {
            level: 4,
            color: '#fff',
            borderColor: '#aaa',
            dataLabels: {
              style: {
                color: '#666',
              },
            },
          },
        ],
        colorByPoint: false,
        borderRadius: 0,
        nodeWidth: Object.keys(levels).length * width,
      },
    ],
  };

  return (
    <div className="organization-chart">
      <HighchartsReact containerProps={{ id: 'highcharts-container' }} highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrganizationChart;
