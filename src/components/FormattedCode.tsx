import React from 'react';
import { styled } from '@stitches/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
    language: string;
    children: string | undefined;
}

const renderChildren = (children: JSX.Element[]) => {
    return children.map(child => child.props);
}

const FormattedCode: React.FC<Props> = ({ language, children }) => {
    return (
        <SyntaxHighlighter language={language}> 
            { children || '' }
        </SyntaxHighlighter>        
    );
}

export default FormattedCode;