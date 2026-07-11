import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='container w-11/12 mx-auto flex flex-col justify-center items-center h-[80vh]'>
            <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
            </div>
        </div>
    );
};

export default LoadingSpinner;