import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";
import Aux from "../../../hoc/Aux";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

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
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }


  componentDidMount() {
    //   this.inputElementRef.focus();
    this.inputElementRef.current.focus();
    //console.log('authenticated: ' + this.context.authenticated)
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        <StyledDiv>
          <AuthContext.Consumer>
            {(context) =>
              context.authenticated ? (
                <p>Authenticated</p>
              ) : (
                <p>Please log in</p>
              )
            }
          </AuthContext.Consumer>
          <p onClick={this.props.click}>
            I am {this.props.name} and I am {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            ref={this.inputElementRef}
            // ref={(inputElem) => {
            //   inputElem.focus();
            // }}
          ></input>
        </StyledDiv>
        <p>----------</p> {/* Extra spacing for adjacent top level element */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
