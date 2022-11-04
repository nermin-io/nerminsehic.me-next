import React from 'react';
import { styled } from '../stitches';

interface Props {
    title: string;
}

const Header = styled('header', {
    height: 200,
    borderBottom: '1px solid #242424',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& h1': {
        fontSize: 50,
        width: 700,
        fontWeight: 500,
        textAlign: 'center',
        '@large': {
            width: '100%',
            fontSize: 40
        }
    }
});


const PageHeader: React.FC<Props> = ({ title }) => {
    return (
        <Header>
            <h1>{ title }</h1>
        </Header>
    );
}

export default PageHeader;