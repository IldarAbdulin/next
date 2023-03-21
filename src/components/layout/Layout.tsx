import dynamic from 'next/dynamic';
import React from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Footer from './footer/Footer';
import { Header } from './header/Header';

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
  ssr: false,
});

export const Layout: React.FC<React.PropsWithChildren<IMeta>> = ({
  children,
  title,
  desc,
}) => {
  return (
    <Meta title={title} desc={desc}>
      <Header />
      <main>{children}</main>
      <DynamicFooter />
    </Meta>
  );
};
