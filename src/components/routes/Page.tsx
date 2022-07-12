import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { DataType } from '../../types/types';

type PagePropsType = {
  dataOut: DataType[];
};

function Page({ dataOut }: PagePropsType) {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      {dataOut.map(
        data =>
          params.id === data.id.toString() && (
            <div key={data.id}>
              <div>№{data.id}</div>
              <div>{data.order_type.name}</div>
              <div>№ {data.order_type.oguid}</div>
              <div>{data.account.name}</div>
              <div>№ {data.account.oguid}</div>
              <div>терминал:{data.terminal.name}</div>
              <div>№ {data.terminal.oguid}</div>
              <div>статус:{data.status}</div>
            </div>
          ),
      )}
      <button type="button" onClick={() => navigate('/')}>
        return
      </button>
    </div>
  );
}

export default Page;
