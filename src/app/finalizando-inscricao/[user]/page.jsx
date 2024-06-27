import React from 'react';

import SectionCheckout from '../../../components/SectionCheckout';
import { createOrUpdateUser } from '../../../services/memberkitServices'

async function FinalizandoInscricao ({ params }) {

    const { user } = params;

    const decodedUser = decodeURIComponent(user);
    const queryParams = new URLSearchParams(decodedUser);       

    const email = queryParams.get('email') || '';
    const fullName = queryParams.get('fullName') || '';
    const mobile = queryParams.get('mobile') || '';
    const classroomIds = (queryParams.get('classroomIds') || '').split(',');

    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    //const response = await createOrUpdateUser(fullName, email, mobile, classroomIds, expiresAt);

    return (
        <SectionCheckout title="FINALIZAR INSCRIÇÃO">          
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Nome Completo:</strong> {fullName}</p>
            <p><strong>Telefone:</strong> {mobile}</p>   
            <p><strong>Classroom Ids:</strong> {classroomIds}</p>               
        </SectionCheckout>
    );
};

export default FinalizandoInscricao;