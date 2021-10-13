import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import { Image, useDataImag, WrapperContainer } from './Image';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { StarIcon } from '@heroicons/react/outline';
import { Button, Price, TitleProduct, WrapperHiddenDiv } from './TilteProduct';
import { theme } from './theme';
interface Props {
    image?: Array<string>;
}

function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ');
}

export const House = ({ image }: Props) => {
    const [currImg, setCurrImg] = useState(0);
    const [open, setOpen] = useState(false);
    const [openGelery, setOpenGelery] = useState(false);

    let images = useDataImag();
    const gotoPrevious = () => setCurrImg(currImg < 1 ? 0 : currImg - 1);
    const gotoNext = () => setCurrImg(currImg < images.length ? currImg + 1 : 0);
    const handelCloseGeleary = () => setOpenGelery(false);

    return (
        <WrapperContainer className="w-full h-auto my-40 bg-white">
            <div
                className="w-full h-full relative z-40"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <Image
                    onClick={() => setOpenGelery(true)}
                    className="w-full h-full inset-0 z-0"
                    src="http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/11/4-500x300.jpg"
                    alt="logo"
                />
                {open ? (
                    <WrapperHiddenDiv onClick={() => setOpenGelery(true)}>
                        <AiOutlinePlusCircle fill="white" />
                    </WrapperHiddenDiv>
                ) : (
                    ''
                )}
                {openGelery ? (
                    <ImgsViewer
                        theme={theme}
                        showThumbnails={true}
                        imgs={images}
                        currImg={currImg}
                        isOpen={openGelery}
                        onClickPrev={gotoPrevious}
                        onClickNext={gotoNext}
                        onClose={handelCloseGeleary}
                        onClickThumbnail={(index: number) => setCurrImg(index)}
                        spinnerDisabled={true}
                        backdropCloseable
                        preloadNextImg={true}
                        leftArrowTitle="Previous"
                        rightArrowTitle="Next"
                        closeBtnTitle="Close"
                        showCloseBtn={true}
                    />
                ) : (
                    ''
                )}
            </div>

            <div className="mt-2 flex justify-between items-center px-2">
                <TitleProduct>Hilton Hotel </TitleProduct>
                <div className="mx-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                            fill="yellow"
                            key={rating}
                            className={classNames('text-yellow-400 h-4 w-4 flex-shrink-0')}
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>
            <div className="mt-2 flex justify-between items-center px-2">
                <Price>$120.00AVG/NIGHT </Price>
                <Button>Lets Go </Button>
            </div>
        </WrapperContainer>
    );
};

{
    /* 
            <ImgsViewer
        imgs={[
          { src: "http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/11/4-500x300.jpg" },
          { src: "http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/11/4-500x300.jpg" },
          { src: "http://example.com/img2.png" },
        ]}
        currImg={currImg}
        isOpen={open}
        onClickPrev={gotoPrevious}
        onClickNext={gotoNext}
        onClose={false}
      /> */
}
