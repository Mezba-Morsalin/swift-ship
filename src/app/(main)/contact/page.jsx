import ContactSupportSection from '@/components/shared/Contact/ContactSupportSection';
import RegionalHubStations from '@/components/shared/Contact/RegionalHubStations';
import SupportHeader from '@/components/shared/Contact/SupportHeader';
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