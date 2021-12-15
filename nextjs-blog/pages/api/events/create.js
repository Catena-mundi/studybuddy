import { eventsRepo } from './../../../helpers/api/events-repo';

export default function handler(req, res) {
  console.log('create event', req.body)
  const { title, location, time, category } = req.body
  let event = { title, location, time, category };
  eventsRepo.create(event);
  return res.status(200).json(eventsRepo.getAll());
}
