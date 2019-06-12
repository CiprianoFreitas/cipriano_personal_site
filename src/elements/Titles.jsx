import styled from 'styled-components';
import tw from 'tailwind.macro';
import { rotateAnimation } from '../styles/animations';
import triangle from '../images/triangle.svg';

export const Title = styled.h1`
    ${tw`text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block`};
    &:before {
        content: '';
        width: 40px;
        height: 40px;
        background: url(${triangle});
        position: absolute;
        background-size: 40px;
        ${rotateAnimation('4s')};
        left: -60px;
        top: 5px;
    }
`;

export const BigTitle = styled.h1`
    ${tw`leading-none text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide`};
`;

export const Subtitle = styled.p`
    ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
`;
