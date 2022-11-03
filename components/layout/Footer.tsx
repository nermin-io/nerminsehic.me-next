import React from 'react';
import { styled } from '@stitches/react';
import Box from '../Box';
import { FooterDocument } from '../../.slicemachine/prismicio';
import { PrismicRichText } from "@prismicio/react";

interface Props {
    data: FooterDocument<string>;
}

const BaseFooter = styled('footer', {
    height: 46,
    backgroundColor: 'rgba(255, 255, 255, 0.02)'
});

const FooterContainer = styled(Box, {
    width: 1195,
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& p:first-child': {
        fontSize: 16,
        fontWeight: 500
    },

    '& p:last-child': {
        fontSize: 13,
        color: '#A7A7A7'
    }
});

const Footer: React.FC<Props> = ({ data: footer }) => {
    if(!footer) return <div></div>;
    return (
        <BaseFooter>
            <FooterContainer>
                <PrismicRichText field={footer.data.title} />
                <PrismicRichText field={footer.data.copyright} />
            </FooterContainer>
        </BaseFooter>
    );
}

export default Footer;