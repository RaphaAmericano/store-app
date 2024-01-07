export interface FormProps<S, F> {
    successCallback: (value?:S) => void;
    failCallback: (value?:F) => void
}