import React from "react";
import {DataType} from "../../types/types";
import {useNavigate, useParams} from "react-router-dom";

type PagePropsType = {
    data: DataType[]
}

function Page({data}: PagePropsType) {
    const params = useParams()
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <div>
            {data.map((data, index) =>
                params.id === data.id.toString() && <div key={index}>
                    <div>№{data.id}</div>
                    <div>{data.order_type.name}</div>
                    <div>№ {data.order_type.oguid}</div>
                    <div>{data.account.name}</div>
                    <div>№ {data.account.oguid}</div>
                    <div>терминал:{data.terminal.name}</div>
                    <div>№ {data.terminal.oguid}</div>
                    <div>статус:{data.status}</div>
                </div>)}
            <button onClick={() => navigate("/")}>return</button>
        </div>
    )
}

export default Page;