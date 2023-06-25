import { render, screen } from '@testing-library/react';

import Dashboard from './Dashboard.scene';

describe('Dashboard', () => {
  it('renders a heading', () => {
    render(<Dashboard />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
