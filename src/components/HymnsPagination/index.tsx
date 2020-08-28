import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  page: number;
  styles: object;
}

const HymnsPagination: React.FC<Props> = ({ page = 1, styles = {} }) => {
  return (
    <Container style={styles}>
      <ul>
        {[1, 101, 201, 301, 401, 501, 601].map((value, index) => {
          const loopPage = index + 1;

          return (
            <li key={value}>
              <Link
                to={`/hinos/${loopPage}`}
                className={page === loopPage ? 'activeMenu' : ''}
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default HymnsPagination;
