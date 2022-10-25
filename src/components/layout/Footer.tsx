import React from 'react';
import { styled } from '@stitches/react';
import Box from '../Box';
import Text from '../Text';

interface Props {}

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
    justifyContent: 'space-between'
});

const Footer: React.FC<Props> = () => {
    return (
        <BaseFooter>
            <FooterContainer>
                <Text css={{fontSize: 16, fontWeight: 500}}>Nermin Sehic</Text>
                <Text css={{fontSize: 13, color: '#A7A7A7'}}>Copyright &copy; Nermin Sehic 2022</Text>
            </FooterContainer>
        </BaseFooter>
    );
}

export default Footer;