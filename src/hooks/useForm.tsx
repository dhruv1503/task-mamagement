import React, { createContext, useState, ReactNode, FC, useContext } from 'react';

type FormContextProps = {
    formState?: object;
    setFormState?: React.Dispatch<React.SetStateAction<object>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

type FormProviderProps = {
    children?: ReactNode;
    initialState?: object;
}

export const FormProvider: FC<FormProviderProps> = ({ children, initialState }) => {
    const [formState, setFormState] = useState(initialState);

    return (
        <FormContext.Provider value={{ formState, setFormState }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};