import React from 'react';

interface HistoryPageProps {
    content: string;
}



const HistoryPage: React.FC<HistoryPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full overflow-auto text-black'>
            {/* <h5 className='text-5xl font-bold'>History</h5> */}
            <h5 style={{ fontSize: '1.5rem' }} className='font-bold'>History</h5>

            <h3 style={{ fontSize: '.75rem' }} className='font-bold py-4'>By Jon Crow</h3>
            <p> Back in 1982, some folks living on Pacific Street were tired of all the prostitution and drug traffic on their block, so they got hold of BAM (which leased the entire block from the City for one of their parking lots), and worked to create the Pacific Street garden. Then came a bad drought and nothing really happened for a few years. In 1985, a few of us started digging around in there, found an abandoned teddy bear, and well, the Bear’s Garden was born. </p>
            <p className='py-4'>By 1988, we started getting wind of a development project about to hit and started organizing to make ourselves a permanent part of Flatbush Avenue. Sure enough, by 1990, our work paid off. We were going to be saved, but they’d have to tear us out to build their project first.</p>
            <p>In order that the group not have to disband, they offered us another property to use while the Pacific Street site was being constructed. That was Carlton. Then the recession hit and that project never happened. We didn’t care though, ’cause now we had 2 gardens!</p>
            <p className='py-4'>At that time, the Bear’s were a pretty large group. We had about 40-some active gardeners, and I’d say about 10 of us used to come over and work at Carlton in those early days about as much as we worked at Pacific.</p>
            <p>Soon after that, the group tending the Garden at Flatbush and Lafayette moved away, and GreenThumb called us to see if we’d care for that spot too. Well, being greedy land-grabbers, we said “sure!” Then we were 3 Bear’s Gardens!</p>
            <p className='py-4'>Not too many years later, HPD ( then an evil city agency) tried to sell the Carlton property out from under us. The Borough President’s office came to the rescue and worked out a deal whereby Carlton got a rare 10 year lease (most gardens at the time were on a year to year interim use lease).</p>
            <p>Not long after that, GreenThumb was able to work out a deal with the City to transfer around 35 gardens (out of 700) into permanent Park’s Department status. Both Carlton and Rockwell got in on that deal. Then came the battle with RATner for Pacific Street, and well, the rest is history. Best part is that all 3 gardens are now permanent! Carlton and Rockwell in NYC Parks and Pacific in the newly formed Brooklyn Alliance of Neighborhood Gardens (BANG) Land Trust.</p>
            <p className='py-4'>As the year’s have gone by, our memberships have come and gone. A few of us have stuck it out, but the reality is that memberships change, neighborhoods change, our own priorities change. We, as a group, don’t cross pollinate like we used to… in fact, all three gardens have so many new members, we mostly don’t know each other anymore. But the good news is that our keys still works in all 3 Bear’s Gardens!</p>
            <p>(not) The End</p>
        </div>
    );
}

export default HistoryPage;