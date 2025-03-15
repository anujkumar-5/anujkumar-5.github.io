import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'Aug 2022 – Present',
            title: 'SenseHawk – Abu Dhabi, UAE',
            subtitle: 'Senior Software Engineer',
            type: typeWork,
        },
        {
            id: 1,
            date: 'Oct 2021 – Aug 2022',
            title: 'SenseHawk – Bangalore, India',
            subtitle: 'Senior Software Engineer',
            type: typeWork,
        },
        {
            id: 2,
            date: 'Aug 2020 – Oct 2021',
            title: 'SenseHawk – Bangalore, India',
            subtitle: 'Software Engineer',
            type: typeWork,
        },
        {
            id: 3,
            date: 'Nov 2018 – Aug 2020',
            title: 'Vymo – Bangalore, India',
            subtitle: 'Software Developer',
            type: typeWork,
        },
        {
            id: 4,
            date: 'Aug 2018 – Nov 2018',
            title: 'Mountblue Technologies – Bangalore, India',
            subtitle: 'Full Stack Developer Intern',
            type: typeWork,
        },
        {
            id: 5,
            date: 'Aug 2014 - July 2018',
            title: 'Dr. APJ Abdul Kalam University – Lucknow, India',
            subtitle: 'Bachelor of Technology, Information Technology',
            type: typeSchool,
        },
        {
            id: 6,
            date: 'Apr 2013',
            title: 'Sheerwood College – Jhansi, India',
            subtitle: 'Higher Secondary School',
            type: typeSchool,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                    <VerticalTimelineElement
                        id={item.id}
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#aaa', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                        date={item.date}
                        iconStyle={{ background: '#aaa', border: '#000' }}
                        icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VerticalTimelineElement>
                ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
