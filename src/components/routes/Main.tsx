import React, {ChangeEvent, useState} from "react";
import Table from "../table/Table";
import TableHeader from "../table/TableHeader";
import style from "./Main.module.css"
import usePagination from "../../hooks/usePagination";
import {useNavigate} from "react-router-dom";
import {DataType} from "../../types/types";

type MainPropsType = {
    data: DataType[]
}

function Main({data}: MainPropsType) {
    const navigate = useNavigate()
    const [perPage, setPerPage] = useState(10)
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
        count: data.length,
    });
    const perPages = (e: ChangeEvent<HTMLSelectElement>) => {
        let v = e.currentTarget.value
        setPerPage(parseInt(v))
        setPage(1)

    }
    const runToCards = (id: number) => {
        navigate(`/${id}`)
    }
    return (
        <div className={style.main}>
            <div className={style.mainContainer}>
                <TableHeader/>
                {
                    data.slice(firstContentIndex, lastContentIndex).map((data, index) =>
                        <div key={index} onClick={() => runToCards(data.id)}><Table
                            data={data}/></div>)
                }
            </div>
            <div className={style.pagination}>
                <p className={style.text}>
                    записи {page}/{totalPages}
                </p>

                <button onClick={prevPage} className={style.page}>
                    &larr;
                </button>
                {/* @ts-ignore */}
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                        onClick={() => setPage(el + 1)}
                        key={el}
                        className={`${style.page} ${page === el + 1 ? style.active : ""}`}
                    >
                        {el + 1}
                    </button>
                ))}
                <button onClick={nextPage} className={style.page}>
                    &rarr;
                </button>
                <p className={style.text}>
                    по
                </p>
                <select className={style.select} onChange={perPages}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <p className={style.text}>
                    записей
                </p>
            </div>
        </div>
    )
}

export default Main;