export interface CreateCompanyRequestDto {
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface CreateCompanyResponseDto {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}
