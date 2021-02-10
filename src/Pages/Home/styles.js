import styled from 'styled-components';

export const Container = styled.div `
  @media(min-width: 400px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    
    h1 {
      color: #fff;
      font-family: sans-serif;
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
       }
       input:last-child  {
         background: #ED254E;
         color: #fff;
         font-weight: bold;
         font-family: sans-serif;
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

  h3 {
    color: #777;
    font-family: sans-serif;
    font-weight: bold;
  }

  h4 {
    color: #777;
    font-family: sans-serif;
    font-weight: bold;
  }

  button {
    padding: 10px;
    border: 2px solid #ED254E;
    border-radius: 5px;
    background: #fff;

    &:hover{
      cursor: pointer;
    }
  }

}
`