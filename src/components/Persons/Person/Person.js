import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";
import Aux from '../../../hoc/Aux';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 600px) {
    width: 450px;
  }
`;
class Person extends Component {
  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        <StyledDiv>
          <p onClick={this.props.click}>
            I am {this.props.name} and I am {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          ></input>
        </StyledDiv>
        <StyledDiv>
          <p>Adjacent top level element</p>
        </StyledDiv>
      </Aux>
    );
  }
}

export default Person;
