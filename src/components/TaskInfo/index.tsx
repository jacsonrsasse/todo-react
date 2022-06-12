import React from 'react';
import styled from 'styled-components';

export interface TaskInfoProps {
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
}

const TaskInfoDesign = styled.div`
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
    color: ${(props) => props.theme.corSistemaBase2};
  }
`;

export function TaskInfo({ title, description, createdAt, updatedAt }: TaskInfoProps) {
  return (
    <TaskInfoDesign>
      <h3 className={updatedAt ? 'completed' : ''}>{title}</h3>
      <p>{description}</p>
      <span>{updatedAt ? 'Atualizado em: ' + updatedAt : 'Criado em: ' + createdAt}</span>
    </TaskInfoDesign>
  );
}
