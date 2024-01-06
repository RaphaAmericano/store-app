export interface FormProps {
    successCallback: () => void;
    failCallback: () => void
}

export interface User {
    email: string;
    passaword: string;
}