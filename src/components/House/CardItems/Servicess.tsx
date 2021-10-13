import React from 'react';
import { HireTitle, SubHireTitle } from 'src/components/Text/Header';
import { Button } from '../TilteProduct';

interface Props {
    title: string;
    subTitle: string;
    actionName: string;
    eventAction: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Services = ({ title, subTitle, actionName, eventAction }: Props) => {
    return (
        <div className="bg-[fff]">
            <div className="grid  grid-cols-3">
                <div className="">
                    <img
                        className="w-full h-full cursor-pointer object-fill"
                        src="http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/11/offers01.jpg"
                    />
                </div>
                <div className=" col-span-2 px-4 py-8">
                    <HireTitle>{title}</HireTitle>
                    <SubHireTitle className="max-w-[85%]">{subTitle}</SubHireTitle>
                    <Button className="mt-12 uppercase" onClick={eventAction}>
                        {actionName}{' '}
                    </Button>
                </div>
            </div>
        </div>
    );
};
