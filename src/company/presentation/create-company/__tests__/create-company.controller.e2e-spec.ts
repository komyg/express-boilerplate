import { request } from '../../../../setup-e2e-tests';
import { CreateCompanyRequestDto } from '../dto/create-company.dto';

describe('Create Company Controller', () => {
  it('should successfully create a company', async () => {
    const input: CreateCompanyRequestDto = {
      name: 'Test Company',
      startDate: new Date('2022-08-02'),
      endDate: new Date('2022-08-31'),
    };

    const result = await request.post('/api/company').send(input);
    expect(result.status).toBe(201);
    expect(result.body.id).toBeTruthy();
  });
});
