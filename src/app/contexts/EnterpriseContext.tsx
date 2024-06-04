import { ReactNode, createContext, useEffect, useState } from 'react';

import { EnterpriseItemProps } from '@molecules/EnterpriseItem';

interface IContextData {
  enterprises: EnterpriseItemProps[];
  getLimitedEnterprises(limit: number): EnterpriseItemProps[];
}

export const EnterpriseContext = createContext<IContextData>(
  {} as IContextData
);

type Props = {
  children: ReactNode;
};

export default function EnterpriseContextProvider({ children }: Props) {
  const [enterprises, setEnterprises] = useState<EnterpriseItemProps[]>([]);
  useEffect(() => {
    async function getEnterprises() {
      const res = await fetch(origin + '/api/enterprises');

      const data = await res.json();
      setEnterprises(data);
    }

    getEnterprises();
  }, []);

  function getLimitedEnterprises(limit: number) {
    return enterprises.slice(0, limit);
  }

  return (
    <EnterpriseContext.Provider
      value={{
        enterprises,
        getLimitedEnterprises,
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
}
