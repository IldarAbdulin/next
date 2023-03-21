import { NextPage } from 'next';

export type TypeRols = {
  isOnlyUser?: boolean;
};
export type NextPageAuth<P = {}> = NextPage<P> & TypeRols;
export type TypeComponentAuthFields = { Component: TypeRols };
