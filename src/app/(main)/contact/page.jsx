import ContactSupportSection from '@/app/components/shared/Contact/ContactSupportSection';
import RegionalHubStations from '@/app/components/shared/Contact/RegionalHubStations';
import SupportHeader from '@/app/components/shared/Contact/SupportHeader';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <SupportHeader/>
            <ContactSupportSection/>
            <RegionalHubStations/>
        </div>
    );
};

export default ContactPage;