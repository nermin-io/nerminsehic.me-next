import { styled } from '@stitches/react';

const BaseButton = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    boxSizing: 'border-box',
    fontSize: 14,
    lineHeight: 1,
    fontWeight: 400,
    width: '100%',
    cursor: 'pointer',
    variants: {
      variant: {
        primary: {
          backgroundColor: '#EF271B',
          color: 'white',
          '&:hover': { backgroundColor: '#E51104' },
          '&:focus': { 
            boxShadow: `0 0 0 3px rgba(229, 17, 4, .45)`          
          },
          '&.disabled': {
            backgroundColor: 'rgba(229, 17, 4, .45)', 
            cursor: 'not-allowed'
          }
        },
        inline: {
          height: 'auto',
          border: '1px solid #E7E7E7',
          color: '#333',
          padding: '4px 12px',
          '&:hover': {
            backgroundColor: '#F7F7F7'
          },
          '&.disabled': {
            cursor: 'not-allowed',
            color: '#888',
            backgroundColor: '#F1F1F1'
          }
        }
      },
      size: {
        small: {
          height: 35
        },
        regular: {
          height: 45
        }
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular'
    }
  });

const Button = styled('button', {
    all: 'unset',
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