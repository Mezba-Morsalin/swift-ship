import CtaAbout from '@/app/components/shared/About/CtaAbout';
import LeadershipSection from '@/app/components/shared/About/LeadershipSection';
import MilestonesSection from '@/app/components/shared/About/MilestonesSection';
import MissionVisionSection from '@/app/components/shared/About/MissionVisionSection';
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