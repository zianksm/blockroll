import { render, screen } from '@testing-library/react';

import VerificationChoices from './VerificationChoices';

describe('Card', () => {
  test('must render properly', () => {
    const CONTENT = {
      title: 'Email ke',
      desc: 'johmdoe@gmail.com',
      isWhatsapp: false,
    };

    render(<VerificationChoices {...CONTENT} />);

    const link = screen.getByRole('link');
    const heading = screen.getByRole('heading');
    // const excerpt = screen.getByText(CONTENT.excerpt);

    expect(heading).toHaveTextContent(CONTENT.title);
    // expect(excerpt).toBeInTheDocument();
    expect(link).toHaveTextContent(CONTENT.title);
    // expect(link).toHaveTextContent(CONTENT.excerpt);
    // expect(link).toHaveProperty('href', `${CONTENT.href}/`);
  });
});
