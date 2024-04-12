import React from 'react';

interface BAMPageProps {
  content: string;
}

const BAMPage: React.FC<BAMPageProps> = ({ content }) => {
  return (
    <div className='h-96 w-full overflow-y-auto text-black flex flex-col items-stretch'>
      <h5 style={{ fontSize: '1.5rem' }} className='font-bold'>
        Become a Member
      </h5>
      {/* <p> If you&apos;re interested in becoming a member, please fill out our application form <a href='https://docs.google.com/forms/d/1H_3FfZ0LvSMaRMyXcskXin1zFIOrRUpC9b_I77_bx7o/edit' target= '_blank' rel='noopener noreferrer' className='font-bold'>Here</a> </p> */}
      <br></br>
      <p>
        Anyone is welcome to join our community garden. If you&apos;re
        interested, here&apos;s how:
      </p>
      <br></br>
      <p>
        <b>STEP 1:</b> Use the{' '}
        <a
          href='https://docs.google.com/forms/d/1H_3FfZ0LvSMaRMyXcskXin1zFIOrRUpC9b_I77_bx7o/edit'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold'
        >
          google form
        </a>{' '}
        to submit your membership form and sign our membership agreement. After
        receiving your form, our Membership Coordinators will add you to our
        google group email list.
      </p>
      <br></br>
      <p>
        <b>STEP 2:</b> Attend an orientation. Our Team captains will lead an
        orientation whenever they have open hours, approximately once a month,
        during our growing season (April 1 - October 31). Orientations will be
        announced via our google group email list.
      </p>
      <br></br>
      <p>
        <b>STEP 3:</b> Receive key to garden gate and enjoy the paradise that
        awaits.
      </p>
      <br></br>
      <p>
        Members are encouraged to be active participants in the garden.
        Opportunities include managing the compost, participating in workdays,
        joining an open hour team, shoveling snow, picking up supplies, or
        volunteering for another role (digital, grant/fundraiser, planning
        events, sign making). Taking an active role in the garden is required to
        be eligible for plots when they become available. If members plan to
        host any event in the garden, members agree to email and alert the
        garden group to inform the members, and an open-door policy is expected.
        Members may not take produce or plants from another gardener&apos;s plot
        without permission. And do not replicate and distribute the garden key
        to non-members. All new members must read the Garden Bylaws for further
        guidance regarding garden operations and rules.
      </p>
    </div>
  );
};

export default BAMPage;
