export interface ClienteEntity {
  id: string;
  identification: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}
export type clientCreate = Omit<ClienteEntity, "id">;
