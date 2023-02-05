import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme['white-200']};
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme['brown-200']};
    }

    body, input, textarea, button{
        font: 400 1rem 'Baloo 2', sans-serif;
    }
`;