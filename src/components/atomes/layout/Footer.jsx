import { styled } from "styled-components";

export const Fooer = () => {
  return <SFooer>&copy; 2022 Systex Inc.</SFooer>;
};

const SFooer = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
