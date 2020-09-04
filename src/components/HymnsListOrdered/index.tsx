import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Hymn } from './styles';

interface Authors {
  initials: string;
  name: string;
}
interface Hymn {
  id: number;
  num_hymn: number;
  title: string;
  slug: string;
  authors?: Authors[];
}

interface Props {
  hymns: Hymn[];
}

const HymnsListOrdered: React.FC<Props> = ({ hymns }) => {
  return (
    <Container>
      {hymns &&
        hymns.map((hymn: Hymn, index: number) => (
          <Hymn key={hymn.id}>
            <Link to={`/hino/${hymn.num_hymn}/${hymn.slug}`}>
              <p>
                <em>{index + 1}</em>
                <div>
                  <strong>{hymn.title}</strong>
                </div>
              </p>
            </Link>
          </Hymn>
        ))}
    </Container>
  );
};

export default HymnsListOrdered;
