import React from 'react';
import Swal from 'sweetalert2';

export const Alert = (title,text,icon) => {
    return (
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showClass: {
                popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__fastest
                          `
            },
            hideClass: {
                popup: `
                            animate__animated
                            animate__fadeOutRight
                            animate__fastest                          `
            }
        }) 
    );
};
