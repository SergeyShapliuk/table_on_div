import React from 'react';

import style from './TableHeader.module.css';

function TableHeader() {
  return (
    <div className={style.table_header}>
      <div>
        <span className={style.tableHeader__item}>Номер/Дата</span>
      </div>
      <div>
        <span className={style.tableHeader__item}>Тип задания/Автор</span>
      </div>
      <div>
        <span className={style.tableHeader__item}>Аккаунт/Терминал</span>
      </div>
      <div>
        <span className={style.tableHeader__item}>Статус</span>
      </div>
    </div>
  );
}

export default TableHeader;
