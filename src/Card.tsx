import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    redirectUrl: string;
    date?: string;
    finished?: boolean;
    currentProject?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, redirectUrl, date, finished, currentProject }) => (
    <a href={redirectUrl} target='_blank' className="h-fill">
        <div className="relative border border-gray-300 rounded-lg overflow-hidden w-64 h-96">
        <img src={imageUrl} alt={title} className="w-full h-5/6 object-cover" />
        <div className="bg-red-300 h-full p-2 text-center">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-2xl">
            <p className="text-red-300 font-bold">{description}</p>
            {date && <p><span className="text-red-300 font-bold">Date:</span> {date}</p>}
            {finished !== undefined && <p><span className="text-red-300 font-bold">Finished:</span> {finished ? 'Yes' : 'No'}</p>}
            {currentProject !== undefined && <p><span className="text-red-300 font-bold">Current Project:</span> {currentProject ? 'Yes' : 'No'}</p>}
        </div>
        </div>
    </a>
);

export default Card;