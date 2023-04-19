function GetLastEvent(events) {
  if (!events) return undefined;
  
  // sort events in descending order of date, so the last event is always the most recent
  events.sort((evtA, evtB) =>
  new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  
  // return the last event
  return events[0];
}
export default GetLastEvent