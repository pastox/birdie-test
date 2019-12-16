import app from '../src/application'
import * as request from 'supertest';

describe('Test if the db query for getting patients works and returns an array of length > 0', () => {
  it('fetches patients data correctly', async (done) => {
    await request(app)
      .get('/events/patients')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(1);
        done();
      });
  })
});

describe('Test if the db query for getting event types works and returns an array of length > 0', () => {
  it('fetches event_types data correctly', async (done) => {
    await request(app)
      .get('/events/types')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(1);
        done();
      });
  })
});

describe('Test if the db query for getting events works and returns an array of length > 0', () => {
  it('fetches data correctly', async (done) => {
    await request(app)
      .post('/events')
      .send({
        patientId : "df50cac5-293c-490d-a06c-ee26796f850d",
        filters : ["fluid_intake_observation", "check_in"],
        startDate : "2019-04-29T00:01:50.774Z",
        endDate : "2019-05-07T08:01:43.226Z"
      })
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(1);
        done();
      });
  })
});

