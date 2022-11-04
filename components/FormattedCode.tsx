import React from 'react';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
    language: string;
    children: string | undefined;
}

const FormattedCode: React.FC<Props> = ({ language, children }) => {
    return (
        <SyntaxHighlighter language={language} style={nord}> 
            { children || '' }
        </SyntaxHighlighter>        
    );
}

export default FormattedCode;