import { render, screen } from '@testing-library/react';

import Schedule from './Schedule.scene';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Schedule />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
