/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BooksCreateFormInputValues = {
    bookName?: string;
    bookDescription?: string;
    bookImage?: string;
};
export declare type BooksCreateFormValidationValues = {
    bookName?: ValidationFunction<string>;
    bookDescription?: ValidationFunction<string>;
    bookImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksCreateFormOverridesProps = {
    BooksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookName?: PrimitiveOverrideProps<TextFieldProps>;
    bookDescription?: PrimitiveOverrideProps<TextFieldProps>;
    bookImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BooksCreateFormProps = React.PropsWithChildren<{
    overrides?: BooksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BooksCreateFormInputValues) => BooksCreateFormInputValues;
    onSuccess?: (fields: BooksCreateFormInputValues) => void;
    onError?: (fields: BooksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BooksCreateFormInputValues) => BooksCreateFormInputValues;
    onValidate?: BooksCreateFormValidationValues;
} & React.CSSProperties>;
export default function BooksCreateForm(props: BooksCreateFormProps): React.ReactElement;
