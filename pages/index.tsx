import Head from 'next/head';
import Chart from '@/components/Chart';

export default function Home() {
  return (
    <>
      <Head>
        <title>howdy highcharts</title>
        <meta name="description" content="howdy highcharts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <Chart />
        </div>
      </main>
    </>
  );
}
