export interface IConnection {
  query(query: string, values: any): any;
  end(): void;
  deleteAll(): void;
}
