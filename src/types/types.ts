export type DataType<D = {name: string; oguid: string}> = {
    id: number
    oguid: string
    status: string
    order_type:D
    terminal:D
    account:D
    created_user:CreatUserType
    created_date:number
}
type CreatUserType={
    surname:string
    name:string
    patronymic:string
    oguid:string
}
