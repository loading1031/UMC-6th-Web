import styled from "styled-components";

export const CastContainer = styled.div`
  position: relative;
  overflow: auto;
  width: 250px;
  margin: 15px;
`;

export const Profile = styled.img`
  width: 30%;
  height: auto; /* 유지하여 이미지 비율을 유지 */
  border-radius: 50%;
  object-fit: cover; /* 이미지가 원 안에 잘 맞도록 */
`;

export const Name = styled.h3`
  color: white;
`;
