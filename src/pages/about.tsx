import { Layout } from '@/components/layout/Layout';
import { NextPageAuth } from '@/interfaces/page.interface';
import React from 'react';

const AboutPage: NextPageAuth = () => {
  return (
    <Layout title="About">
      <h1 style={{ color: '#fff' }}>About</h1>
    </Layout>
  );
};

AboutPage.isOnlyUser = true;

export default AboutPage;
