import styled from "styled-components";

export const SigninContainer = styled.div`
  background: #01bf71;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const SigninWrapper = styled.div`
  width: 300px;
  background: #000;
  padding: 30px 20px;
  border-radius: 10px;
`;

export const SigninForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  padding: 15px 0px;
  font-weight: bold;
`;
export const Label = styled.div`
  align-self: flex-start;
  padding: 5px 6px;
  font-size: 0.9rem;
`;
export const Email = styled.input`
  outline: none;
  padding: 10px;
  width: 250px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
`;
export const Password = styled.input`
  outline: none;
  border: none;
  width: 250px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
export const Button = styled.button`
  background: #01bf71;
  border-radius: 5px;
  display: flex;
  width: 255px;
  cursor: pointer;
  justify-content: center;
  padding: 10px 0;
  color: #fff;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: #000;
  }
`;
export const ForgotPswd = styled.div`
  font-size: 0.9rem;
  padding: 20px 0;
  cursor: pointer;
`;
