import { render, screen } from '@testing-library/react';

import Register from './AuthOTP.scene';

describe('Register', () => {
  it('renders a heading', () => {
    render(<Register />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
