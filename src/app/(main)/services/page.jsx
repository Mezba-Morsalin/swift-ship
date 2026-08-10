import DeliverySolutionsHeader from '@/app/components/shared/Services/DeliverySolutionsHeader';
import HighlightsSection from '@/app/components/shared/Services/HighlightsSection';
import LogisticsServicesSection from '@/app/components/shared/Services/LogisticsServicesSection';
import React from 'react';

const ServicePage = () => {
    return (
        <div>
            <DeliverySolutionsHeader/>
            <LogisticsServicesSection/>
            <HighlightsSection/>
        </div>
    );
};

export default ServicePage;