import { render, screen } from '@testing-library/react';

import LoginForm from './RegisterForm';

describe('Card', () => {
  test('must render properly', () => {
    const CONTENT = {
      titleEmail: 'Email',
      titlePassword: 'Password',
      placeholderEmail: 'Masukan email anda disini',
      placeholderPassword: 'Masukan kata sandi anda',
      required: false,
    };

    render(<LoginForm {...CONTENT} />);

    const link = screen.getByRole('link');
    const heading = screen.getByRole('heading');
    // const excerpt = screen.getByText(CONTENT.excerpt);

    expect(heading).toHaveTextContent(CONTENT.titleEmail);
    expect(heading).toHaveTextContent(CONTENT.titlePassword);
    // expect(excerpt).toBeInTheDocument();
    expect(link).toHaveTextContent(CONTENT.titleEmail);
    expect(link).toHaveTextContent(CONTENT.titlePassword);
    // expect(link).toHaveTextContent(CONTENT.excerpt);
    // expect(link).toHaveProperty('href', `${CONTENT.href}/`);
  });
});
