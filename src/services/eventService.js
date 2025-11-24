const EVENTS_KEY = 'life_events';

export const eventService = {
    getEvents: () => {
        const events = localStorage.getItem(EVENTS_KEY);
        return events ? JSON.parse(events) : [];
    },

    addEvent: (event) => {
        const events = eventService.getEvents();
        const newEvent = {
            ...event,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
        };
        events.push(newEvent);
        localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
        return newEvent;
    },

    deleteEvent: (id) => {
        const events = eventService.getEvents();
        const filteredEvents = events.filter(e => e.id !== id);
        localStorage.setItem(EVENTS_KEY, JSON.stringify(filteredEvents));
    }
};
