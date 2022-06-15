import styled from 'styled-components';

export const TaskInfoDesign = styled.div`
    padding: 0.3rem;
    display: grid;
    grid-template-rows: 1.5rem 1fr 1rem;

    h3 {
        text-transform: uppercase;

        &.completed {
            text-decoration: line-through;
        }
    }

    p {
        font-size: 0.9rem;
    }

    span {
        font-size: 0.7rem;
        font-style: italic;
        text-align: end;
        color: black;
    }
`;
