import React from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsOrganization from 'highcharts/modules/organization';

// Initialize the 'organization' module

if (typeof Highcharts === 'object') {
  HighchartsSankey(Highcharts);
  HighchartsOrganization(Highcharts);
}

const OrgChart = () => {
  const options: Options = {
    chart: {
      type: 'organization',
      height: 1000,
      inverted: true,
      spacing: [20, 20, 20, 20],
    },
    title: {
      text: 'Raqamli texnologiyalar vazirligi markaziy apparatining tuzilmasi',
    },
    accessibility: {
      point: {
        descriptionFormat:
          '{add index 1}. {toNode.name}' +
          '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' +
          'reports to {fromNode.id}',
      },
    },
    tooltip: {
      enabled: false,
    },
    exporting: {
      allowHTML: true,
      sourceWidth: 800,
      sourceHeight: 600,
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
              // location.href = this?.options?.custom?.src;
              console.log(this.options);
            },
          },
        },
        data: [
          {
            from: 'vazir',
            to: 'Strategik rivojlantirish boshqarmasi',
          },
          {
            from: 'vazir',
            to: "Inson resurslarini rivojlantirish va boshqarish bo'limi",
          },
          {
            from: 'vazir',
            to: "Ichki audit va korrupsiyaga qarshi kurashish bo'limi",
          },
          {
            from: 'vazir',
            to: 'Axborot xizmati',
          },
          {
            from: 'vazir',
            to: 'Vazir yordamchisi',
          },
          {
            from: 'vazir',
            to: 'Iqtisodiyot boshqarmasi',
          },
          {
            from: 'vazir',
            to: "Buxgalteriya hisobi bo'limi",
          },
          {
            from: 'vazir',
            to: "Vazir kotibiyati boshlig'i",
          },
          {
            from: 'vazir',
            to: "Vazirning birinchi o'rinbosari",
          },
          // -------------------------------
          {
            from: "Vazir kotibiyati boshlig'i",
            to: 'Axborot-tahlil va ijro intizomi boshqarmasi',
          },
          {
            from: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            to: "Nazorat va ijro intizomi bo'limi",
          },
          {
            from: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            to: "Murojaatlar bo'limi",
          },
          {
            from: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            to: "Yuridik ta'minlash bo'limi",
          },
          {
            from: "Vazir kotibiyati boshlig'i",
            to: "Xalqaro hamkorlik bo'limi",
          },
          // -------------------------------------------
          {
            from: "Vazirning birinchi o'rinbosari",
            to: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
          },
          {
            from: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
            to: "Davlat organlarini raqamlashtirish bo'limi",
          },
          {
            from: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
            to: "Elektron davlat xizmatlarini joriy etish va idoralararo elektron hamkorlik bo'limi",
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
          },
          {
            from: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
            to: "Iqtisodiyot tarmoqlarini raqamlashtirish bo'limi",
          },
          {
            from: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
            to: "Raqamli industriya va IT-eksportni rivojlantirish bo'limi",
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: "Sun'iy intellekt texnologiyalarini joriy qilish va rivojlantirish bo'limi",
          },
          // -------------------------------------------------
          {
            from: 'vazir',
            to: "Vazir o'rinbosari",
          },
          {
            from: "Vazir o'rinbosari",
            to: 'Telekommunikatsiya infratuzilmasini rivojlantirish boshqarmasi',
          },
          {
            from: 'Telekommunikatsiya infratuzilmasini rivojlantirish boshqarmasi',
            to: "Mobil a'loqa va teleradioeshittirish tarmoqlari bo'limi",
          },
          {
            from: 'Telekommunikatsiya infratuzilmasini rivojlantirish boshqarmasi',
            to: "Kommutatsiya va uzatish tarmoqlari bo'limi",
          },
          {
            from: "Vazir o'rinbosari",
            to: "Hududiy bo'linmalar faoliyatini muvofiqlashtirish bo'limi",
          },
          {
            from: "Hududiy bo'linmalar faoliyatini muvofiqlashtirish bo'limi",
            to: "Hududiy bo'linmalar",
          },
        ],
        nodes: [
          {
            id: 'vazir',
            name: '<a href="https://google.com">Vazir <br/> Sh.Shermatov</a>',
            dataLabels: {
              useHTML: true,
            },
          },
          {
            id: "Vazir kotibiyati boshlig'i",
            name: "Vazir kotibiyati boshlig'i",
            column: 2,
          },
          {
            id: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            name: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            column: 2,
          },
          {
            id: "Nazorat va ijro intizomi bo'limi",
            name: "Nazorat va ijro intizomi bo'limi",
            column: 3,
          },
          {
            id: "Murojaatlar bo'limi",
            name: "Murojaatlar bo'limi",
            column: 3,
          },
          {
            id: "Yuridik ta'minlash bo'limi",
            name: "Yuridik ta'minlash bo'limi",
            column: 3,
          },
          {
            id: "Xalqaro hamkorlik bo'limi",
            name: "Xalqaro hamkorlik bo'limi",
            column: 2,
          },
          {
            id: "Vazirning birinchi o'rinbosari",
            name: "Vazirning birinchi o'rinbosari",
            column: 4,
          },
          {
            id: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
            name: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
            column: 4,
          },
          {
            id: "Davlat organlarini raqamlashtirish bo'limi",
            name: "Davlat organlarini raqamlashtirish bo'limi",
            column: 5,
          },
          {
            id: "Elektron davlat xizmatlarini joriy etish va idoralararo elektron hamkorlik bo'limi",
            name: "Elektron davlat xizmatlarini joriy etish va idoralararo elektron hamkorlik bo'limi",
            column: 5,
          },
          {
            id: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
            name: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
            column: 4,
          },
          {
            id: "Iqtisodiyot tarmoqlarini raqamlashtirish bo'limi",
            name: "Iqtisodiyot tarmoqlarini raqamlashtirish bo'limi",
            column: 5,
          },
          {
            id: "Raqamli industriya va IT-eksportni rivojlantirish bo'limi",
            name: "Raqamli industriya va IT-eksportni rivojlantirish bo'limi",
            column: 5,
          },
          {
            id: "Sun'iy intellekt texnologiyalarini joriy qilish va rivojlantirish bo'limi",
            name: "Sun'iy intellekt texnologiyalarini joriy qilish va rivojlantirish bo'limi",
            column: 4,
          },
          {
            id: "Vazir o'rinbosari",
            column: 6,
          },
          {
            id: 'Telekommunikatsiya infratuzilmasini rivojlantirish boshqarmasi',
            column: 6,
          },
          {
            id: "Hududiy bo'linmalar faoliyatini muvofiqlashtirish bo'limi",
            column: 6,
          },
        ],
        levels: [
          {
            level: 0,
            color: '#375289',
            borderColor: '#375289',
            borderWidth: 2,
            dataLabels: {
              style: {
                color: '#fff',
              },
            },
          },
          {
            level: 1,
            color: '#375289',
            borderColor: '#375289',
            borderWidth: 2,
            dataLabels: {
              style: {
                color: '#fff',
              },
            },
          },
          {
            level: 2,
            color: '#fff',
            borderColor: '#375289',
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
        ],
        colorByPoint: false,
        borderRadius: 0,
        nodeWidth: 70,
      },
    ],
  };

  return (
    <div className="org-chart-wrapper">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrgChart;
