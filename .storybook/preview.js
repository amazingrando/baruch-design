import '../src/app/globals.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Home', 'Templates', 'Layout', 'Components', 'Deprecated'],
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <link rel="stylesheet" href="https://use.typekit.net/sbs3zlh.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap" rel="stylesheet" />
        <Story />
      </>
    ),
  ],
};

export default preview;