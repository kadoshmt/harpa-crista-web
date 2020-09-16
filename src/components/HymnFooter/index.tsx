import React from 'react';
import {
  BsPlus,
  BsDash,
  BsCaretLeftFill,
  BsCaretRightFill,
  BsHeart,
  BsFillHeartFill,
} from 'react-icons/bs';
import { FaShareAlt, FaFont } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  hymnNumber: number | undefined;
  isFavorited: boolean;
  handleFavorite: () => void;
  increaseText: () => void;
  decreaseText: () => void;
  goToNextHymn: () => void;
  goToPrevHymn: () => void;
  handleShare: () => void;
}

const HymnFooter: React.FC<Props> = ({
  hymnNumber,
  isFavorited,
  handleFavorite,
  increaseText,
  decreaseText,
  goToPrevHymn,
  goToNextHymn,
  handleShare,
}) => {
  return (
    <Container>
      <ul>
        <li>
          <button type="button" onClick={decreaseText}>
            <FaFont size={18} />
            <BsDash size={14} style={{ marginLeft: '-4px' }} />
          </button>

          <button type="button" onClick={increaseText}>
            <FaFont size={18} />
            <BsPlus size={14} style={{ marginLeft: '-4px' }} />
          </button>
        </li>
        <li className="navigation">
          <div>
            <button type="button" onClick={goToPrevHymn}>
              <BsCaretLeftFill size={20} />
            </button>
            <span>{hymnNumber} de 640</span>
            <button type="button" onClick={goToNextHymn}>
              <BsCaretRightFill size={20} />
            </button>
          </div>
        </li>
        <li>
          {!isFavorited && (
            <button type="button" onClick={handleFavorite}>
              <BsHeart size={20} />
            </button>
          )}

          {isFavorited && (
            <button type="button" onClick={handleFavorite}>
              <BsFillHeartFill size={20} />
            </button>
          )}

          <button type="button" onClick={handleShare}>
            <FaShareAlt size={20} />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default HymnFooter;
