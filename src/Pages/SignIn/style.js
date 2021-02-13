import styled from 'styled-components';
import {shade} from 'polished'
import Background from '../../assets/background_signin.jpg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

`;

export const Image = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background}) ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(145, 151, 174,0.3);

  }
`;

export const Card = styled.div`
  width: 40%;
  height: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 10%;
  padding: 15px;
  border-radius: 15px;

  button {
      background: #ED254E;
      border-radius: 5px;
      border: 0;
      padding: 10px;
      padding: 15px;
      font-family: 'Poppins';
      font-weight: 700;
      color: #fff;
      width: 35vw;
      margin: 10px 0;
    }

  h1 {
    color: #ED254E;
    font-family: "Poppins";
  }

  form {
    display: flex;
    flex-direction: column;
    width: 35vw;
    margin: 10px;

    input {
      border-radius: 5px;
      border: 0;
      padding: 15px;
      margin: 10px 0;
      font-family: 'Poppins';
      font-weight: 500;
      background-color: #eee;
    }

  }
`


