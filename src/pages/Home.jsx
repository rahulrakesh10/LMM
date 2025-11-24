import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Map Your Life's</span>
                <span className="block text-indigo-600">Greatest Moments</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Chronicle your journey, visualize your timeline, and connect with others who share your path.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                    <Link to="/timeline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
