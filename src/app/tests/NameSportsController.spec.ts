import request from 'supertest';
import { app } from '../../app'


describe('NameSportsController', () => {
    it('Testing Search API', async () => {
        const response = (await request(app).get('/api/users'))
        console.log(response)

        expect(response.statusCode).toBe(200);
        
    });
})