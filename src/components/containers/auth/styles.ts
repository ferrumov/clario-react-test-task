import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 94px 30px 16px 30px;
  overflow-y: auto;
  background: linear-gradient(167.96deg, #f4f9ff 0%, #e0edfb 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  z-index: 1;
`;

export const StarsContainer = styled.div`
  width: 250px;
  height: 719px;
  position: fixed;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;
