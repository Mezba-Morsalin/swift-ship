import DeliveryRateEstimator from '@/app/components/shared/Pricing/DeliveryRateEstimator';
import DistrictRateMatrix from '@/app/components/shared/Pricing/DistrictRateMatrix';
import MerchantVolumePlans from '@/app/components/shared/Pricing/MerchantVolumePlans';
import ShippingCalculatorHeader from '@/app/components/shared/Pricing/ShippingCalculatorHeader';
import React from 'react';

const PricingPage = () => {
    return (
        <div>
            <ShippingCalculatorHeader/>
            <DeliveryRateEstimator/>
            <DistrictRateMatrix/>
            <MerchantVolumePlans/>
        </div>
    );
};

export default PricingPage;