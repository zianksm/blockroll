import { render, screen } from '@testing-library/react';

import CardChat from './Card';
import Card from './Card';

describe('Card', () => {
  test('must render properly', () => {
    const CONTENT = {
      desc: 'Ujian Teknik Bedah ',
      lecturer: 'dr. John Doe, S.Ked., Sp.G.',
      examTime: '14:25 - 15:25 AM',
      date: 'Selasa 12 juni 2023',
      time: '08:00:00',
    };

    render(<CardChat author={''} icon={''} due={''} {...CONTENT} />);

    const link = screen.getByRole('link');
    const heading = screen.getByRole('heading');
    const excerpt = screen.getByText(CONTENT.desc);

    expect(heading).toHaveTextContent(CONTENT.lecturer);
    expect(excerpt).toBeInTheDocument();
    // expect(link).toHaveTextContent(CONTENT.title);
    // expect(link).toHaveTextContent(CONTENT.excerpt);
    // expect(link).toHaveProperty('href', `${CONTENT.href}/`);
  });
});
