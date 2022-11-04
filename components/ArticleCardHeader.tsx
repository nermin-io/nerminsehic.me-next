import React from 'react';
import { styled } from '../stitches';
import Box from './Box';
import TypescriptLogo from './logos/TypescriptLogo';
import JavaLogo from './logos/JavaLogo';
import ScalaLogo from './logos/ScalaLogo';
import * as PrismicType from '@prismicio/types';

interface Props {
    language: PrismicType.SelectField<"java" | "scala" | "typescript">;
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
    if(!language) return <div>Invalid Language Type</div>
    
    const Logo = logos[language];
    return (
        <CardHeader language={language}>
            <Logo />
        </CardHeader>
    );
}

export default ArticleCardHeader;