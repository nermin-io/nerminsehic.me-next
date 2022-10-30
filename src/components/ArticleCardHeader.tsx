import React from 'react';
import { styled } from '@stitches/react';
import Box from './Box';
import TypescriptLogo from './logos/TypescriptLogo';
import JavaLogo from './logos/JavaLogo';
import ScalaLogo from './logos/ScalaLogo';
import type { Language } from '../types/Article';

interface Props {
    language: Language;
}

const languageVariants = {
    typescript: {
        backgroundColor: '#007ACC80'
    },
    java: {
        backgroundColor: '#F5821980'
    },
    scala: {
        backgroundColor: '#D4202380'
    }
};

const logos = {
    typescript: TypescriptLogo,
    java: JavaLogo,
    scala: ScalaLogo
}

const CardHeader = styled(Box, {
    height: 145,
    width: '100%',
    borderRadius: 3,
    backgroundBlendMode: 'overlay',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
        language: languageVariants
    }
});

const ArticleCardHeader: React.FC<Props> = ({ language }) => {
    const Logo = logos[language as Language];
    return (
        <CardHeader language={language}>
            <Logo />
        </CardHeader>
    );
}

export default ArticleCardHeader;