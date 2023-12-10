import styled from "styled-components";

import { PrimaryButton } from "../atomes/button/PrimaryButton";
import { Input } from "../atomes/input/input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: cener;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
