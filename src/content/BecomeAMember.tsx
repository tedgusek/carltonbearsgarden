import React from 'react';

interface BAMPageProps {
    content: string;
}



const BAMPage: React.FC<BAMPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full overflow-auto text-black flex flex-col items-center'>
            <h5 style={{ fontSize: '1.5rem' }} className='font-bold'>Become a Member</h5>
            <p> If you&apos;re interested in becoming a member, please fill out our application form <a href='https://docs.google.com/forms/d/1H_3FfZ0LvSMaRMyXcskXin1zFIOrRUpC9b_I77_bx7o/edit' target= '_blank' rel='noopener noreferrer' className='font-bold'>Here</a> </p>
            <p >Members are encouraged to be active participants in the garden. Opportunities include managing the compost, participating in workdays, joining an open hour team, shoveling snow, picking up supplies, or volunteering for another role (digital, grant/fundraiser, planning events, sign making). Taking an active role in the garden is required to be eligible for plots when they become available. If members plan to host any event in the garden, members agree to email and alert the garden group to inform the members, and an open-door policy is expected. May not take produce or plants from another gardener&apos;s plot without permission. May not replicate and distribute the garden key to non-members. Must read the Garden Bylaws for further guidance regarding garden operations and rules.</p>
        </div>
    );
}

export default BAMPage;