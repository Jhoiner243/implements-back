export interface ClienteEntity {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}
export type clientCreate = Omit<ClienteEntity, "id">;
