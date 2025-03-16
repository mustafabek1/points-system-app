import React, { useEffect, useState } from 'react';
import { fetchPoints, usePoints } from '../utils/api';

const Card: React.FC<{ userId: string }> = ({ userId }) => {
    const [points, setPoints] = useState<number>(0);
    const [inputVisible, setInputVisible] = useState<boolean>(false);
    const [pointsToUse, setPointsToUse] = useState<number | string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getPoints = async () => {
            const data = await fetchPoints(userId);
            setPoints(data.points);
        };
        getPoints();
    }, [userId]);

    const handleUsePoints = async () => {
        const pointsToUseNumber = Number(pointsToUse);
        if (pointsToUseNumber <= 0 || pointsToUseNumber > points) {
            setError('Invalid points amount');
            return;
        }
        setError('');
        const data = await usePoints(userId, pointsToUseNumber);
        setPoints(data.updatedPoints);
        setPointsToUse('');
        setInputVisible(false);
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-sm mx-auto">
            <h2 className="text-lg font-bold">Cart</h2>
            <p className="mt-2">Available Points: {points}</p>
            <button
                onClick={() => setInputVisible(!inputVisible)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Use Points
            </button>
            {inputVisible && (
                <div className="mt-2">
                    <input
                        type="number"
                        value={pointsToUse}
                        onChange={(e) => setPointsToUse(e.target.value)}
                        className="border rounded p-2"
                        placeholder="Enter points to use"
                    />
                    <button
                        onClick={handleUsePoints}
                        className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            )}
        </div>
    );
};

export default Card;