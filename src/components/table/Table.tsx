import React from 'react';

import { DataType } from '../../types/types';

import style from './Table.module.css';

type TablePropsType = {
  data: DataType;
};

function Table({ data }: TablePropsType) {
  const date = new Date(data.created_date).toLocaleString().slice(0, 17);
  const colors: { [key: string]: string } = {
    new: 'red',
    started: 'blue',
    assigned_to: 'orange',
    completed: 'green',
    declined: 'black',
  };
  const words: { [key: string]: string } = {
    new: 'новое',
    started: 'начато',
    assigned_to: 'назначено',
    completed: 'выполнено',
    declined: 'отменено',
  };
  return (
    <div className={style.table}>
      <div className={style.tableItem}>
        №{data.id}
        <div className={style.tableItem_under}>{date}</div>
      </div>
      <div className={style.tableItem}>
        {data.order_type.name}
        <div className={style.tableItem_under}>
          {`${data.created_user.surname} ${data.created_user.name[0]}. ${data.created_user.patronymic[0]}.`}
        </div>
      </div>
      <div className={style.tableItem}>
        {data.account.name}
        <div className={style.tableItem_under}>{data.terminal.name}</div>
      </div>
      <div className={style.tableItem}>
        <button
          type="button"
          className={style.status}
          style={{ backgroundColor: colors[data.status] }}
        >
          {words[data.status]}
        </button>
      </div>
    </div>
  );
}

export default Table;
