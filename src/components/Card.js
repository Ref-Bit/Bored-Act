import { useState, useEffect } from 'react';
import bored from '../api/bored';
import { Reload } from './Icons';
import SkeletonCard from './SkeletonCard';

export default function Card({ title, icon }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bored
      .get(`/activity?type=${title}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [title]);

  const handleClick = () => {
    const reload = document.getElementById(`reload-${title}`);
    reload.classList.add('animate-spin');
    bored
      .get(`/activity?type=${title}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        reload.classList.remove('animate-spin');
      })
      .catch(err => console.log(err));
  };

  if (loading || !data) return <SkeletonCard />;
  else
    return (
      <div className="p-4 md:w-1/3">
        <div className="flex border-b-4 border-gray-900 border-indigo-500 rounded-lg h-full bg-gray-100 transform hover:translate-y-2 dark:bg-gray-800 p-4 flex-col shadow hover:shadow-xl transition duration-300">
          <div className="flex justify-between">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                {icon}
              </div>
              <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium">
                {title !== 'diy'
                  ? title.charAt(0).toUpperCase() + title.slice(1)
                  : title.toUpperCase()}
              </h2>
            </div>
            <button
              id={`reload-${title}`}
              className="mb-8 focus:outline-none"
              type="button"
              title="Get a new random activity"
              onClick={handleClick}
            >
              <Reload />
            </button>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-gray-900 dark:text-gray-300">
              {data.activity}
            </p>
            {data.link !== '' && (
              <a
                href={data.link}
                className="mt-3 text-indigo-500 inline-flex items-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    );
}
