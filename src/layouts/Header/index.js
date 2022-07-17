import React from 'react';
import {HeaderContainer,ContentDay, ContentTaskLeft, MainTitle} from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <MainTitle>2022년 7월 15일</MainTitle>
            <ContentDay>금요일</ContentDay>
            <ContentTaskLeft>할 일 2개 남음</ContentTaskLeft>
        </HeaderContainer>
    );
};

export default Header;