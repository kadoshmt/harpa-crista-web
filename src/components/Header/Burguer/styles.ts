import styled from 'styled-components';

export const StyledBurger = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    /* position: absolute;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 14px; */
    position: relative;
    width: 30px;
    height: 28px;
    top: 20px;
    left: 0px;

    @media (max-width: 425px) {
      left: 16px;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${props => props.theme.colors.textSecondary};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${props => props.theme.colors.primary};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${props => props.theme.colors.textSecondary};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    margin-left: -14px; /* Fix always visible partial on side */
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${props => props.theme.colors.backgroundSecondary};
    padding: 1.5em 0.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: ${props => props.theme.colors.primary};
    padding: 1.8rem;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: ${props => props.theme.colors.textSecondary};
    padding: 1.5rem 0;
    text-decoration: none;
    font-size: ${props => props.theme.font.sizes.xl};

    > svg {
      margin-right: 2rem;
    }
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
