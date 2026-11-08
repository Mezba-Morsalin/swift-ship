import DeliveryRateEstimator from '@/app/components/shared/Pricing/DeliveryRateEstimator';
import DistrictRateMatrix from '@/app/components/shared/Pricing/DistrictRateMatrix';
import DeliveryRateDetails from '@/app/components/shared/Pricing/DeliveryRateDetails';
import ShippingCalculatorHeader from '@/app/components/shared/Pricing/ShippingCalculatorHeader';
import React from 'react';

const PricingPage = () => {
    return (
        <div>
            <ShippingCalculatorHeader/>
            <DeliveryRateEstimator/>
            <DistrictRateMatrix/>
            <DeliveryRateDetails/>
        </div>
    );
};

export default PricingPage;