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
      height: 600,
      inverted: true,
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
            to: "Vazir kotibiyati boshlig'i",
            color: 'red',
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
            from: "Vazir kotibiyati boshlig'i",
            to: "Nazorat va ijro intizomi bo'limi",
          },
          {
            from: "Vazir kotibiyati boshlig'i",
            to: "Murojaatlar bo'limi",
          },
          {
            from: "Vazir kotibiyati boshlig'i",
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
            from: "Vazirning birinchi o'rinbosari",
            to: "Davlat organlarini raqamlashtirish bo'limi",
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: "Elektron davlat xizmatlarini joriy etish va idoralararo elektron hamkorlik bo'limi",
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: "Iqtisodiyot tarmoqlarini raqamlashtirish bo'limi",
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: "Raqamli industriya va IT-eksportni rivojlantirish bo'limi",
          },
          {
            from: "Vazirning birinchi o'rinbosari",
            to: "Sun'iy intellekt texnologiyalarini joriy qilish va rivojlantirish bo'limi",
          },
          // ----------------------------------------
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
        ],
        // data: [
        //   ['vazir Sh.Shermatov', "Hay'at"],
        //   ["Hay'at", 'CEO'],
        //   ['CEO', 'CTO'],
        //   ['CEO', 'CPO'],
        //   ['CEO', 'CSO'],
        //   ['CEO', 'HR'],
        //   ['CPO', 'Product'],
        //   ['CTO', 'Web'],
        //   ['CSO', 'Sales'],
        //   ['HR', 'Market'],
        //   ['CSO', 'Market'],
        //   ['CTO', 'Market'],
        // ],
        levels: [
          {
            level: 0,
            color: '#aaa',
            // states: {
            //   hover: {
            //     color: '#aad',
            //   },
            // },
          },
          {
            level: 1,
            color: '#bbb',
          },
          {
            level: 2,
            color: '#ccc',
            borderColor: 'blue',
          },
          {
            level: 3,
            color: 'rgba(0,0,0,0.2)',
          },
        ],
        nodes: [
          {
            id: "Vazir kotibiyati boshlig'i",
            name: "Vazir kotibiyati boshlig'i",
            column: 2,
            level: 2,
          },
          {
            id: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            name: 'Axborot-tahlil va ijro intizomi boshqarmasi',
            column: 2,
          },
          {
            id: "Nazorat va ijro intizomi bo'limi",
            name: "Nazorat va ijro intizomi bo'limi",
            column: 2,
          },
          {
            id: "Murojaatlar bo'limi",
            name: "Murojaatlar bo'limi",
            column: 2,
          },
          {
            id: "Yuridik ta'minlash bo'limi",
            name: "Yuridik ta'minlash bo'limi",
            column: 2,
          },
          {
            id: "Xalqaro hamkorlik bo'limi",
            name: "Xalqaro hamkorlik bo'limi",
            column: 2,
          },
          {
            id: "Vazirning birinchi o'rinbosari",
            name: "Vazirning birinchi o'rinbosari",
            column: 3,
            level: 1
          },
          {
            id: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
            name: 'Elektron hukumat tizimini rivojlantirish boshqarmasi',
            column: 3,
            level: 3,
          },
          {
            id: "Davlat organlarini raqamlashtirish bo'limi",
            name: "Davlat organlarini raqamlashtirish bo'limi",
            column: 3,
            level: 3,
          },
          {
            id: "Elektron davlat xizmatlarini joriy etish va idoralararo elektron hamkorlik bo'limi",
            name: "Elektron davlat xizmatlarini joriy etish va idoralararo elektron hamkorlik bo'limi",
            column: 3,
            level: 3,
          },
          {
            id: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
            name: 'Raqamli iqtisodiyotni rivojlantirish boshqarmasi',
            column: 3,
            level: 3,
          },
          {
            id: "Iqtisodiyot tarmoqlarini raqamlashtirish bo'limi",
            name: "Iqtisodiyot tarmoqlarini raqamlashtirish bo'limi",
            column: 3,
            level: 3,
          },
          {
            id: "Raqamli industriya va IT-eksportni rivojlantirish bo'limi",
            name: "Raqamli industriya va IT-eksportni rivojlantirish bo'limi",
            column: 3,
            level: 3,
          },
          {
            id: "Sun'iy intellekt texnologiyalarini joriy qilish va rivojlantirish bo'limi",
            name: "Sun'iy intellekt texnologiyalarini joriy qilish va rivojlantirish bo'limi",
            column: 3,
            level: 3,
          },
          {
            id: 'vazir',
            name: 'Sh.Shermatov',
            title: 'Vazir',
          },
          // {
          //   id: 'CEO',
          //   title: 'CEO',
          //   name: 'Atle Sivertsen',
          //   image:
          //     'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg',
          // },
          // {
          //   id: 'HR',
          //   title: 'HR',
          //   name: 'Anne Jorunn Fjærestad',
          //   color: '#007ad0',
          //   image:
          //     'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg',
          // },
          // {
          //   id: 'CTO',
          //   title: 'CTO',
          //   name: 'Christer Vasseng',
          //   image:
          //     'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131120/Highsoft_04074_.jpg',
          // },
          // {
          //   id: 'CPO',
          //   title: 'CPO',
          //   name: 'Torstein Hønsi',
          //   image:
          //     'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg',
          // },
          // {
          //   id: 'CSO',
          //   title: 'CSO',
          //   name: 'Anita Nesse',
          //   image:
          //     'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131156/Highsoft_03834_.jpg',
          // },
          // {
          //   id: 'Product',
          //   name: 'Product developers',
          // },
          // {
          //   id: 'Web',
          //   name: 'Web devs, sys admin',
          // },
          // {
          //   id: 'Sales',
          //   name: 'Sales team',
          // },
          // {
          //   id: 'Market',
          //   name: 'Marketing team',
          //   column: 5,
          // },
        ],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
          color: 'white',
        },
        borderColor: 'white',
        nodeWidth: 65,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrgChart;
