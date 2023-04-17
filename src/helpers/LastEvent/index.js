function GetLastEvent(events) {
    const lastEvent = events[events.length - 1]

    if (!events) return undefined;
    // if there's no date, return last event of the array
    if (!lastEvent?.date) return lastEvent;

    // sort events in descending order of date, so the last event is always the most recent
    events.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  // return the last event
  return events[0];
}
export default GetLastEvent