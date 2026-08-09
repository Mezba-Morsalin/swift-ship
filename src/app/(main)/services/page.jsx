import DeliverySolutionsHeader from '@/components/shared/Services/DeliverySolutionsHeader';
import HighlightsSection from '@/components/shared/Services/HighlightsSection';
import LogisticsServicesSection from '@/components/shared/Services/LogisticsServicesSection';
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