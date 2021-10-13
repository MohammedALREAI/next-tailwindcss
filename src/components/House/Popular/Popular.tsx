import React from 'react';
import { CardItem } from './CardItem';
import { HeaderPopular, SubHeaderPopular, SubImageGridFirstFull, WrapperPopular } from './Popular.style';

interface Props {}

export const Popular = (props: Props) => {
    return (
        <WrapperPopular className="w-full h-auto flex space-x-7  px-12">
            <div className="w-1/2 container mx-auto px-20 pt-4">
                <img
                    src="http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/12/couple.png"
                    alt="couple"
                />
            </div>
            <div className="w-1/2 container  mx-auto">
                <HeaderPopular>Popular Destinations for Honeymoon</HeaderPopular>
                <SubHeaderPopular>
                    Nunc cursus libero purusac congue arcu cursus utsed vitae pulvinar massa idporta neque purusac Etiam
                    elerisque mi id faucibus iaculis vitae pulvinar.
                </SubHeaderPopular>
                <div className="grid grid-cols-3 gap-x-5  container mx-auto h-1/2 ">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        </WrapperPopular>
    );
};
