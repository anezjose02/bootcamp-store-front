import * as Yup from 'yup';

const isUpdate = false;

export const registerValidations = Yup.object({

    name: Yup.string()
        .required('El nombre es requerido')
        .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, 'El nombre no debe contener números ni caracteres especiales')
        .matches(/^(?! )[a-zA-Z]+(?: [a-zA-Z]+)*(?<! )$/, 'El nombre no puede comenzar ni terminar con un espacio'),


    email: Yup.string()
        .email('El correo debe tener un formato válido')
        .trim()
        .matches(/^\S+$/, 'No puede comenzar ni terminar con un espacio')
        //.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'El correo debe contener letras, números y caracteres especiales')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+(?<![\W_])$/, 'El correo no puede terminar con un caracter especial')
        .required('El correo es requerido'),

    password: Yup.string()
        .trim()
        .matches(/^\S+$/, 'No puede estar vacío')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('La contraseña es requerida'),
})

export const companyValidations = Yup.object({

    name: Yup.string()
        .required('El nombre es requerido')
        .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, 'El nombre no debe contener números ni caracteres especiales')
        .matches(/^(?! )[a-zA-Z]+(?: [a-zA-Z]+)*(?<! )$/, 'El nombre no puede comenzar ni terminar con un espacio'),

})

export const gamesValidations = Yup.object({

    name: Yup.string()
        .required('El nombre es requerido')
        .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, 'El nombre no debe contener números ni caracteres especiales')
        .matches(/^(?! )[a-zA-Z]+(?: [a-zA-Z]+)*(?<! )$/, 'El nombre no puede comenzar ni terminar con un espacio'),

    price: Yup.number()
        .typeError('El precio debe ser un número')
        .required('El precio es requerido')
        .positive('El precio debe ser un número positivo'),

    stock: Yup.number()
        .typeError('El stock debe ser un número')
        .required('El stock es requerido')
        .positive('El stock debe ser un número positivo'),

    company_id: Yup.string().required('Compañia es requerida'),
})
