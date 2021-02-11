import styled from 'styled-components';
import {shade} from 'polished'
import Background from '../../assets/background.jpg'


export const Container = styled.div `
  background-image: url(${Background}) ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(145, 151, 174,0.3);
 


  @media(min-width: 400px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    
    h1 {
      color: #fff;
      
      font-weight: 700;
      letter-spacing: 2px;
      margin-top: 20px;
      
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90vw;
      margin: 10px;

       input {
         border-radius: 5px;
         border: 0;
         padding: 15px;
         margin: 10px 0;
         font-family: 'Poppins';
         font-weight: 500;
       }
       input:last-child  {
         background: #ED254E;
         color: #fff;
         font-weight: 700;
         font-family: "Poppins";
         font-size: 18px;
         letter-spacing: 1px;
         transition: 0.5s;

        &:hover {
          background: ${shade(0.15,'#ED254E' )};
          cursor: pointer;
        }
      }
    }
  }
`

export const Content = styled.div`
@media(min-width: 400px) {
  width: 90vw;
  background: #fff;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;


  h3 {
    color: #777;
    
    font-weight: 700;
    width: 80%;
  }

  h4 {
    color: #777;
    /* font-family: sans-serif; */
    font-weight: bold;
  }
  p {
    color: #777;
  }

}
`

export const ContentButton = styled.div`
@media(min-width: 400px) {
  display: flex;
  padding:  5px 0;

  .blue {
    background: #1B98E0;
  }

  .green {
    background: #32E875;
  }

  .red {
    background: #ED254E;
  }
  

  button {
    padding: 5px;
    border: 0.5px solid transparent;
    border-radius: 5px;
    background: #fff;
    margin: 2px;

    &:hover{
      cursor: pointer;
    }
  }
`
