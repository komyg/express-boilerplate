// This interface is here to simulate a database table through an ORM.
export interface CompanyEntity {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
