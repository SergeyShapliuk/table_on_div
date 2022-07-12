import React, { ChangeEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import usePagination from '../../hooks/usePagination';
import { DataType } from '../../types/types';
import Table from '../table/Table';
import TableHeader from '../table/TableHeader';

import style from './Main.module.css';

type MainPropsType = {
  dataOut: DataType[];
};

function Main({ dataOut }: MainPropsType) {
  const [perPage, setPerPage] = useState(10);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: perPage,
    count: dataOut.length,
  });
  const perPages = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.currentTarget.value;
    setPerPage(parseInt(v, 10));
    setPage(1);
  };
  return (
    <div className={style.main}>
      <div className={style.mainContainer}>
        <TableHeader />
        {dataOut.slice(firstContentIndex, lastContentIndex).map(data => (
          <Link to={`/${data.id}`} className={style.link} key={data.id}>
            <Table data={data} />
          </Link>
        ))}
      </div>
      <div className={style.pagination}>
        <p className={style.text}>
          записи {page}/{totalPages}
        </p>

        <button type="button" onClick={prevPage} className={style.page}>
          &larr;
        </button>
        {/* @ts-ignore */}
        {[...Array(totalPages).keys()].map(el => (
          <button
            type="button"
            onClick={() => setPage(el + 1)}
            key={el}
            className={`${style.page} ${page === el + 1 ? style.active : ''}`}
          >
            {el + 1}
          </button>
        ))}
        <button type="button" onClick={nextPage} className={style.page}>
          &rarr;
        </button>
        <p className={style.text}>по</p>
        <select className={style.select} onChange={perPages}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p className={style.text}>записей</p>
      </div>
    </div>
  );
}

export default Main;
