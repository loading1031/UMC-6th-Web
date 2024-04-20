import React from 'react';
import styled from 'styled-components';

const Styled_h1 = styled.h1`
    color: white;
`;

function MainPage(){

    console.log('메인페이지')
    return (
        <Styled_h1>환영합니다</Styled_h1>
    );
}

export default MainPage;