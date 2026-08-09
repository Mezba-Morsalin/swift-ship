import DeliveryRateEstimator from '@/components/shared/Pricing/DeliveryRateEstimator';
import DistrictRateMatrix from '@/components/shared/Pricing/DistrictRateMatrix';
import MerchantVolumePlans from '@/components/shared/Pricing/MerchantVolumePlans';
import ShippingCalculatorHeader from '@/components/shared/Pricing/ShippingCalculatorHeader';
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