import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

import { PrimaryText } from "../Text";

const Detail = ({
  title,
  background,
  onBackArrowPress,
  children
}) => {
  const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background: ${background};
  `;

  const IconContainer = styled.div`
    display: flex;

    ${onBackArrowPress && `
      cursor: pointer;
    `}

    &:hover {
      opacity: 0.6;
    }
  `;

  return (
    <Fragment>
      <Header>
        <IconContainer onClick={() => onBackArrowPress ? onBackArrowPress() : null}>
          <FontAwesome
            name='chevron-left'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white", marginRight: 5 }}
          />
        </IconContainer>
        <PrimaryText>{title}</PrimaryText>
      </Header>
      {
        children
      }
    </Fragment>
  )
}

Detail.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  onBackArrowPress: PropTypes.func
}

Detail.defaultProps = {
  title: "Stack",
  background: "rgb(85, 26, 139)",
  onBackArrowPress: null
}

export default Detail;
