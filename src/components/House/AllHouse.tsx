import React from 'react';
import HouseItem from '../HouseItem/HouseItem';
import { House } from './House';
import { TitleHostiles } from './Image';
import { Popular } from './Popular/Popular';

interface Props {}

export const AllHouse = (props: Props) => {
    return (
        <div className="bg-white">
            <div className="container  mx-auto">
                <TitleHostiles>Popular Hotels</TitleHostiles>
                <div className=" flex space-x-4">
                    {Array(4)
                        .fill(0)
                        .map((x) => (
                            <div className="w-1/4">
                                <House />
                            </div>
                        ))}
                </div>
            </div>

            <Popular />

            <HouseItem />
        </div>
    );
};
