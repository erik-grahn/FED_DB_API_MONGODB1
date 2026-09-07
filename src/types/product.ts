import { RowDataPacket } from "mysql2";

export interface Product extends RowDataPacket {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  img: string | null;
}
