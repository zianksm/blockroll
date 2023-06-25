import { render, screen } from '@testing-library/react';

import getLayout, { HomepageFooter } from '.';

describe('HomepageFooter', () => {
  test.each([
    getLayout(<p>children</p>),
    <HomepageFooter key="common">
      <p>children</p>
    </HomepageFooter>,
  ])('should render properly', (comp) => {
    render(comp);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('Powered by');

    const logo = screen.getByAltText('Vercel Logo');
    expect(logo).toBeInTheDocument();

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
  });
});
