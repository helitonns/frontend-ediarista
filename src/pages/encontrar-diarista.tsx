import React from 'react';
import { GetStaticProps } from 'next';

 import { Component } from '@styles/pages/encontrar-diarista.styled';
import VerificarProfissionais from '@partials/encontrar-diarista/_verificar-profissionais';

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: 'Encontrar Diarista',
        },
    };
};

const EncontrarDiarista: React.FC = () => {
    return (
        <div>
            <VerificarProfissionais />
        </div>
    );
};

export default EncontrarDiarista;