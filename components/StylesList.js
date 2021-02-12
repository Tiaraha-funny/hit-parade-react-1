import React, { useContext } from "react";
import { Context } from "../main-components/Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const StylesContainer = styled.div`
  display: grid;
  gap: 20px;
  a {
    text-decoration: none;
    color: #272343;
    font-size: 2rem;
  }
  a:hover {
    color: #ffd803;
  }
`;

function StylesList({ styles }) {
  // const { styles } = useContext(Context);
  return (
    <div>
      <h1>Styles list</h1>
      <StylesContainer>
        {styles.map((style) => (
          <Link to={`/styles/${style}`} key={style}>
            🎧 {style}
          </Link>
        ))}
      </StylesContainer>
    </div>
  );
}

export default connect((state) => ({
  styles: state.stylesReducers,
}))(StylesList);
