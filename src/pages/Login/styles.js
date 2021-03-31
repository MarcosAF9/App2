import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #5e92f8;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .logo img {
    margin-top: 30px;
  }

  .boxBranco {
    width: 422px;
    height: 252px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0px 8px 10px #4a7cdf;
    padding: 12px 1px 5px 1px;
  }

  .rodape {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 425px;
    height: 80px;

  }


  h1 {
    color: white;
    font-size: 22px;
    font-weight: normal;
    margin-top: 10px;
  }

  a {
    font-size: 14px;
    color: white;
    font-weight: normal;
    text-decoration: none;
    margin-top: -20px;
  }



`;
