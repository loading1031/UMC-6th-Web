import styled from "styled-components";

export const Poster = styled.img`
  width: 100%;
  height: 70%;
`;

export const PosterContainer = styled.div`
  position: relative;
  overflow: auto;
  width: 250px;
  margin: 15px;
  background-color: #373b6a;
`;

export const ContentText = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.span`
  margin-left: 10px;
  color: white;
`;

export const VoteAverage = styled.span`
  margin-right: 10px;
  text-align: right;
  color: white;
`;

export const MovieOverview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  align-text: center;
  padding: 10px;
  box-sizing: border-box;
`;
