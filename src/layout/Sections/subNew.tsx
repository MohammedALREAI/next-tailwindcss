import React from 'react';
import{ContainerWrapper, ImageWrapper, SubHeaderTitle} from'./subNewComponests'

interface Props {}

export const SubNew = (props: Props) => {
    return (<ContainerWrapper>

        <div className='container  mx-auto'>
            <div className='grid grid-cols-4 gap-y-6 '>
                <div className='w-full bg-white'>
                    <div className='relative w-full  px-4'>
                    <ImageWrapper src="http://www.soaptheme.net/wordpress/travelo/wp-content/uploads/2014/11/31.jpg"/>
                    <div className='px-4 mt-4'>

                    <SubHeaderTitle className=' hover:text-[#2a2a2b]'>Best Price Guarantee</SubHeaderTitle>
                    <h4>Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.</h4>
                    </div>

                    </div>
                </div>
                <div>4</div>
                <div>5</div>
                <div>1</div>
            </div>
        </div>
    </ContainerWrapper>)
};
