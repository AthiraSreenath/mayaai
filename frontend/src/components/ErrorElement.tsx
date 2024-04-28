import React from 'react';

import styled from '@emotion/styled';

import { Alert, AlertTitle } from '@mui/material';
import { useRouteError } from "react-router-dom";

const Container = styled.div`
    border-bottom: 1px solid rgba(127, 127, 127, 0.5);
`;

function ErrorElement(): JSX.Element {
    let {error} = useRouteError() as {error: Error};
    console.error(error);

    return (
        <Container>
            <Alert severity="error">
                <AlertTitle>Oops! An unexpected error occurred!</AlertTitle>
                <div>Message: {error.message}</div>
            </Alert>
        </Container>
    );
}

export default ErrorElement;
