import CtaAbout from '@/components/shared/About/CtaAbout';
import LeadershipSection from '@/components/shared/About/LeadershipSection';
import MilestonesSection from '@/components/shared/About/MilestonesSection';
import MissionVisionSection from '@/components/shared/About/MissionVisionSection';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <MilestonesSection/>
            <MissionVisionSection/>
            <LeadershipSection/>
            <CtaAbout/>
        </div>
    );
};

export default AboutPage;