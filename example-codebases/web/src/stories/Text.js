import React from 'react';
import styled from "styled-components";

import { Typograph, Typography, DesignLanguage, Diez } from 'diez-design-system';


const ds_text = new Typography();
const text = ds_text.capi.typography.displayTablet;
console.log(ds_text.capi.typography.displayTablet.fontFamily);

const TextStyled = styled.p`
    line-height: ${ds_text.capi.typography.displayTablet.lineHeight}px;
    font-size: ${ds_text.capi.typography.displayTablet.fontSize}px;
    letter-spacing: ${ds_text.capi.typography.displayTablet.letterSpacing}px;
    font-family: ${ds_text.capi.typography.displayTablet.fontFamily};
`;

export const Text = () => {
    

    return (
        <>
            <TextStyled>
                hola
            </TextStyled>
        </>
    );
}