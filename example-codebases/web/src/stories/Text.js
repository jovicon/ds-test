import React from 'react';

import { Typograph, Typography, DesignLanguage, Diez } from 'diez-design-system';
const diezDs = new Diez(DesignLanguage);

export const Text = () => {
    console.log(diezDs);

    // Listen to changes in the design language
    diezDs.attach((ds) => {
        // The ds has been updated!
        console.log("attach",ds.typography.capi.typography.displayTablet);

    });
    const ds_text = new Typography();
    // console.log(ds_text.capi.typography.displayTablet.applyStyle);
    const text = ds_text.capi.typography.displayTablet;
    return (
        <>
            {/* {/* <p style={ds_text.capi.typography.displayTablet}>
            </p> */}

            {/* {text} */}
            <p style={ds_text.capi.typography.displayTablet}>
                hola
            </p>
        </>
    );
}