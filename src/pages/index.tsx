import React from 'react';
import Card from '../components/Card';

const Home: React.FC = () => {
    const userId = '123';

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Points System</h1>
            <Card userId={userId} />
        </div>
    );
};

export default Home;