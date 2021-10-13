import React from 'react';
import { Button } from '../TilteProduct';
import { SubImageGridFirstFull } from './Popular.style';

export const CardItem = () => {
    return (
        <div className="grid grid-cols-1  bg-white">
            <SubImageGridFirstFull />
            <div className=" px-4 mb-2">
                <h1 className="">Paris</h1>
                <h1 className="">(990+ PLACES)</h1>
                <Button>Lets Go </Button>
            </div>
        </div>
    );
};
