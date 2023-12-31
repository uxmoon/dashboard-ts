import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Remove default margin in favour of better control in authored CSS */
  body, h1, h2, h3, h4, p,
  figure, blockquote, dl, dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.body};
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.bodyPattern} 0%,
      ${({ theme }) => theme.colors.bodyPattern} 30%,
      ${({ theme }) => theme.colors.body} 30%,
      ${({ theme }) => theme.colors.body} 100%
    );
    padding: 2rem 1rem 1rem;
  }

  /* Set shorter line heights on headings and interactive elements */
  h1, h2, h3, h4,
  button, input, label {
    line-height: 1.1;
  }

  /* Balance text wrapping on headings */
  h1, h2,
  h3, h4 {
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input, button,
  textarea, select {
    font: inherit;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }

  /* react-toggle override styles */
  .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.toggle.default};
  }
  .react-toggle-thumb {
    border: 1px solid ${({ theme }) => theme.colors.toggle.default};
  }
  .react-toggle.react-toggle--checked {
    .react-toggle-track {
      background: ${({ theme }) => theme.colors.toggle.active};
    }
    .react-toggle-thumb {
      border: 1px solid ${({ theme }) => theme.colors.bodyPattern};
      background-color: ${({ theme }) => theme.colors.bodyPattern};
    }
  }
`
