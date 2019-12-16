import * as express from "express";
import * as eventsDB from "../services/events.services";

export const eventsController = express.Router();

eventsController.post('/', (req, res) => {
  eventsDB.getEvents(req.body.patientId, req.body.filters, req.body.startDate, req.body.endDate)
  .then((events : Array<{payload : any[]}>) => {
    res.status(200).json(events.map(e => e.payload));
  })
  .catch((err : any) => {
    res.sendStatus(404);
  })
});

eventsController.get('/types', (req, res) => {
  eventsDB.getTypes()
  .then((types : Array<{event_type : string}>) => {
    res.status(200).json(types.map((obj : {event_type : string}) => obj.event_type));
  })
  .catch((err : any) => {
    res.sendStatus(404);
  })
})

eventsController.get('/patients', (req, res) => {
  eventsDB.getPatients()
  .then((patients : Array<{care_recipient_id : string}>) => {
    res.status(200).json(patients.map((obj: { care_recipient_id: string; }) => obj.care_recipient_id));
  })
  .catch((err : any) => {
    res.sendStatus(404);
  })
});

eventsController.get('*', (_, res) => {
  res.sendStatus(404);
});
