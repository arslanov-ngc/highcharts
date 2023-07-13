import Head from 'next/head';
import Chart from '@/components/Chart';
import { GetServerSideProps } from 'next';

const host: string = 'https://api-portal.gov.uz';

const routes = {
  authority: (url: string) => [host, `authority/${url}`].join('/'),
  activity: (url: string) => [host, `activity/${url}`].join('/'),
  mainPage: (url: string) => [host, `main-page/${url}`].join('/'),
  advice: (url: string) => [host, `advice/${url}`].join('/'),
  myGov: (url: string) => [host, `my-gov/${url}`].join('/'),
  lists: (url: string) => [host, `lists/${url}`].join('/'),
  news: (url: string) => [host, `news/${url}`].join('/'),
  simple: (url: string) => [host, `simple/${url}`].join('/'),
  authoritiesMain: (url: string) => [host, `authorities/main/${url}`].join('/'),
  authoritiesNews: (url: string) => [host, `authorities/news/${url}`].join('/'),
  authoritiesActivity: (url: string) => [host, `authorities/activity/${url}`].join('/'),
  authoritiesLists: (url: string) => [host, `authorities/lists/${url}`].join('/'),
  authoritiesVote: (url: string) => [host, `authorities/vote/${url}`].join('/'),
};

export default function Home({ data }: any) {
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
          <Chart data={data} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(routes.authoritiesLists('structure'), {
      headers: {
        language: 'oz',
        code: 'digital',
      },
    });

    const { data } = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: `/${context.locale}/${context.query.ministry_id}/contacts/404`,
      },
    };
  }
};
