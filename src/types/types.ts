export type DataType<D = { name: string; oguid: string }> = {
  id: number;
  oguid: string;
  status: string;
  // eslint-disable-next-line camelcase
  order_type: D;
  terminal: D;
  account: D;
  // eslint-disable-next-line camelcase
  created_user: CreatUserType;
  // eslint-disable-next-line camelcase
  created_date: number;
};
type CreatUserType = {
  surname: string;
  name: string;
  patronymic: string;
  oguid: string;
};
