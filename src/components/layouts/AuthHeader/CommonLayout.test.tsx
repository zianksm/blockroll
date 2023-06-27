import { render, screen } from '@testing-library/react';

import getLayout, { AuthHeader } from '.';

describe('AuthHeader', () => {
  test.each([
    getLayout(<p>children</p>),
    <AuthHeader key="common" title={''} desc={''}>
      <p>children</p>
    </AuthHeader>,
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
