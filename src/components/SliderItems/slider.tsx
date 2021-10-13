import Slider from 'react-slick';
import SliderGallery from 'scrolling-slider-gallery';
import React, { useState, CSSProperties } from 'react';

import SwipeableViews from 'react-swipeable-views';

import { useDataImag } from '../House/Image';
const CenterMode = () => {
    const images = useDataImag();

    const cssStyle: CSSProperties = {
        position: 'relative',
        width: 'auto',
        backgroundSize: '100% 100%',
        objectFit: 'contain',
        // minWidth: "1326px",
        transition:
            'transform 1000ms cubic-bezier(.190,1,.220,1),opacity 1000ms cubic-bezier(.190,1,.220,1),opacity 600ms linearo',
        transitionDelay: '200ms',
    };

    return (
        <div className="">
            <SwipeableViews enableMouseEvents>
                {images.map((x, ke) => (
                    <div className="w-full h-full flex relative">
                        <div
                            className="flex justify-center items-center absolute"
                            style={{
                                top: '45%',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 bg-yellow-500 "
                                fill="null"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                        <img src={x.src} className="w-full h-80" />
                        <div
                            className="flex justify-center items-center absolute "
                            style={{
                                top: '45%',
                                right: '-0%',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 transform bg-yellow-500  -rotate-180"
                                fill=""
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </SwipeableViews>
            <div className="flex space-x-3"></div>
        </div>
    );
};

export default CenterMode;
