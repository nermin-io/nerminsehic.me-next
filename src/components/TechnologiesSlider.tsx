import React from 'react';
import { styled } from '@stitches/react';
import Box from './Box';
import Link from 'next/link';

interface Props {}
type TechnologyItem = {
    label: string;
    link: string;
}

const ScrollableTechnologyList = styled(Box, {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 0'
});

const TechnologyItem = styled(Box, {
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    color: '#2F2F2F',

    '&:hover': {
        color: '#3F3F3F'
    }
});

const TECHNOLOGIES: Array<TechnologyItem> = [
     {
        label: 'Java',
        link: '#'
     },
     {
        label: 'Scala',
        link: '#'
     },
     {
        label: 'Typescript',
        link: '#'
     },
     {
        label: 'Node.js',
        link: '#'
     },
     {
        label: 'React',
        link: '#'
     }
];



const TechnologiesSlider: React.FC<Props> = () => {
    return (
        <ScrollableTechnologyList>
            { TECHNOLOGIES.map((item, idx) => (
                <TechnologyItem key={`${item.label}-${idx}`}>
                    <Link href={item.link}>
                        <a className="no-highlight">
                            {item.label}
                        </a>
                    </Link>
                </TechnologyItem>
            ))}
        </ScrollableTechnologyList>
    );
}

export default TechnologiesSlider;