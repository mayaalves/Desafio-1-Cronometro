import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Fast from "./Img/fast.png";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}
`;

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${Fast});
  background-repeat: no-repeat;
  background-position: center;
`;

const H1 = styled.h1``;
const H2 = styled.h2`
  margin-bottom: -16vh;
  font-size: 8vh;
`;
const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  padding: 2vh;
  margin: 2vh;
  cursor: pointer;
  border: none;
  border-radius: 50px;
`;

export default class App extends React.Component {
  state = {
    number: 0,
    msg: "Run, run..."
  };
  Start = () => {
    const Parar = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000);

    this.stop = () => {
      clearInterval(Parar);
    };
  };

  Restart = () => {
    this.setState((prevState) => ({ number: (prevState.number = 0) }));
  };

  componentDidMount() {
    document.title = this.state.msg;
    setInterval(() => {
      this.setState({
        msg:
          this.state.msg === "Run, run..."
            ? "your time is running out!!!"
            : "Run, run..."
      });
    }, 3000);
  }
  componentDidUpdate() {
    document.title = this.state.msg;
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <H1>{this.state.msg}</H1>
        <H2>{this.state.number}</H2>
        <BoxButtons>
          <Button
            onClick={() => {
              this.Start();
            }}
          >
            Start
          </Button>
          <Button
            onClick={() => {
              this.stop();
            }}
          >
            Stop
          </Button>
          <Button
            onClick={() => {
              this.Restart();
            }}
          >
            Restart
          </Button>
        </BoxButtons>
      </Container>
    );
  }
}
