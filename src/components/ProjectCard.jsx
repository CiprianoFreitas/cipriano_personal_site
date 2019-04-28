import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
    width: 100%;
    ${tw`shadow-lg relative no-underline rounded-sm px-8 pb-4 text-white`};
    background: ${props => props.bg};
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
        transform: translateY(-5px);
    }
`;

const Text = styled.div`
    ${tw`opacity-75 font-sans text-sm md:text-base`};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
    ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-serif font-bold pt-8`};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ title, link, children, bg }) => (
    <Wrapper to={link} target="_blank" rel="noopener noreferrer" bg={bg}>
        <Title>{title}</Title>
        <Text>{children}</Text>
    </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    bg: PropTypes.string.isRequired,
};
