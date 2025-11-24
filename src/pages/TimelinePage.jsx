import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { eventService } from '../services/eventService';
import { Plus } from 'lucide-react';

export default function TimelinePage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventService.getEvents());
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Your Timeline</h1>
                <Link
                    to="/add-event"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Event
                </Link>
            </div>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                <div className="space-y-12">
                    {events.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <p className="text-gray-500 text-lg">No events logged yet. Start your journey!</p>
                        </div>
                    ) : (
                        events.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).map((event, index) => (
                            <div key={event.id} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                <div className="w-5/12"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide text-indigo-800 bg-indigo-100 rounded-full mb-2">
                                        {event.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{new Date(event.startDate).toLocaleDateString()} {event.endDate && `- ${new Date(event.endDate).toLocaleDateString()}`}</p>
                                    <p className="text-gray-600">{event.description}</p>
                                    {event.location && (
                                        <p className="mt-2 text-sm text-gray-500 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
