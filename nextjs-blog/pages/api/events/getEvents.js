import { eventsRepo } from './../../../helpers/api/events-repo';

export default function handler(req, res) {
  eventsRepo.getAll()
  res.status(200).json(eventsRepo.getAll());
}
