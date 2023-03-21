import { Layout } from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <Layout title="Not found">
      <div style={{ textAlign: 'center' }}>
        {' '}
        <Image src="/404.png" alt="404" width={450} height={433} />
      </div>
    </Layout>
  );
};

export default ErrorPage;
