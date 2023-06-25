import { FC } from 'react';

import Card, { CardProps } from '@/components/common/Card';

import styles from './Cards.module.css';

interface CardsProps {
  items: ReadonlyArray<CardProps>;
}

const Cards: FC<CardsProps> = ({ items }) => (
  <div className={styles.wrapper} data-testid="cards">
    {items.map(({ title, excerpt, href, desc, author }) => (
      <Card
        key={title}
        title={title}
        excerpt={excerpt}
        href={href}
        desc={desc}
        author={author}
        icon={''}
      />
    ))}
  </div>
);

export default Cards;
