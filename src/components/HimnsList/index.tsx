import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

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
  author?: string;
}

const HimnsList: React.FC<Props> = ({
  hymns,
  author = 'Autor Desconhecido',
}) => {
  // const { number, title, author, link }
  // const { theme, themeTitle } = useTheme();
  return (
    <Container>
      {hymns &&
        hymns.map((hymn: Hymn) => (
          <Link key={hymn.id} to={`/hino/${hymn.num_hymn}/${hymn.slug}`}>
            <div>
              <span>{String(hymn.num_hymn).padStart(3, '0')}</span>
              <span>
                <strong>{hymn.title}</strong>
                {hymn.authors && hymn.authors.length > 0
                  ? hymn.authors[0].name
                  : author}
              </span>
            </div>
          </Link>
        ))}
    </Container>
  );
};

export default HimnsList;
