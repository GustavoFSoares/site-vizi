'use client';

import { ReactNode } from 'react';

import EnterpriseContextProvider from './EnterpriseContext';

type Props = {
  children: ReactNode;
};

export default function AppContexts({ children }: Props) {
  return <EnterpriseContextProvider>{children}</EnterpriseContextProvider>;
}
