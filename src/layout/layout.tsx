import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import Header from 'src/components/NavBar/Header';
import { Footer } from 'src/components/Footer/Footer';
import { AllHouse } from 'src/components/House/AllHouse';
import { HireTitle, SubDidKnow, SubHireTitle, WhyDidKnow } from 'src/components/Text/Header';
import Image from 'next/image';
import { Button } from 'src/components/House/TilteProduct';
import { Services } from 'src/components/House/CardItems/Servicess';
import { KnowSections } from './Sections/know';
import { SubNew } from './Sections/subNew';


interface IProps {
    main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
    return (
        <div className="bg-white" onMouseEnter={() => {}}>
            {/* <Header /> */}
            {/* <main>{main}</main> */}
            <div className="bg-[#f5f5f5]">
                <AllHouse />
                <KnowSections />
                <SubNew/>
                
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
