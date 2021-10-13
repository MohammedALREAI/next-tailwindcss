import React from 'react';
import { Services } from 'src/components/House/CardItems/Servicess';
import { WhyDidKnow, SubDidKnow } from 'src/components/Text/Header';

interface Props {}

export const KnowSections = () => {
    return (
        <div className="container mx-auto flex flex-col  justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
                <WhyDidKnow>Did you know?</WhyDidKnow>
                <SubDidKnow className="mt-4">
                    Mauris ullamcorper nibh quis leo ultrices in hendrerit velit tristiqueut augue in nulla lacinia
                    bibendum liberoras rutrum ac purus ut tristique.
                </SubDidKnow>
                <SubDidKnow className="-mt-2">
                    Nullam placerat lacinia dolor quis pretium. Phasellus vitae lacinia quam, at pellentesque lorem. Sed
                    euismod turpis quis mattis fringilla.
                </SubDidKnow>
            </div>
            <div className=" container mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-y-6">
                {Array(4)
                    .fill(0)
                    .map((x) => (
                        <Services
                            title={'Hire Cars'}
                            subTitle={
                                'Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pulvinar massa idend porta nequetiam elerisque mi id.'
                            }
                            actionName={'SEE  ALL'}
                            eventAction={function (e: any): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};
