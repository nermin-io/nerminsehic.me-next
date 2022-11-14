import { styled } from '../stitches.config';

const Button = styled('button', {
    all: 'unset',
    width: '100%',
    borderRadius: 3,
    display: 'inline-flex',
    lineHeight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    boxSizing: 'border-box',
    cursor: 'pointer',
    variants: {
        theme: {
            brand: {
                backgroundColor: '#DFF962',
                color: '#222',
                fontWeight: 500,
                '&:disabled': {
                    backgroundColor: '#DFF96275',
                    cursor: 'not-allowed'
                },
                '&:hover': {
                    backgroundColor: '#D7F447'
                },
                '&:active': {
                    backgroundColor: '#CBEB31'
                },
                '&:focus': {
                    boxShadow: `0 0 0 2px #A1BD19` 
                }
            }
        }
    },
    defaultVariants: {
        theme: 'brand'
    }
});

export default Button;