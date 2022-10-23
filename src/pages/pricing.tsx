import React from 'react';
import TechnologyCard from '../components/Card';

const Pricing = () => {
    return (
        <div>
            Pricing
            <div className='flex justify-center'>
            <div className='grid grid-cols-2 gap-4'>
                <div><TechnologyCard name="Farmer" description='20$' documentation='hi'/></div>
                <div><TechnologyCard name="Customer" description='20$' documentation='hi'/></div>
            </div>
            </div>
        </div>
    );
};

export default Pricing;