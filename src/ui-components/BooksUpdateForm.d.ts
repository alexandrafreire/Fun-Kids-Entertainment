/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Books } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BooksUpdateFormInputValues = {
    bookName?: string;
    bookDescription?: string;
    bookImage?: string;
};
export declare type BooksUpdateFormValidationValues = {
    bookName?: ValidationFunction<string>;
    bookDescription?: ValidationFunction<string>;
    bookImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksUpdateFormOverridesProps = {
    BooksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bookName?: PrimitiveOverrideProps<TextFieldProps>;
    bookDescription?: PrimitiveOverrideProps<TextFieldProps>;
    bookImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BooksUpdateFormProps = React.PropsWithChildren<{
    overrides?: BooksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    books?: Books;
    onSubmit?: (fields: BooksUpdateFormInputValues) => BooksUpdateFormInputValues;
    onSuccess?: (fields: BooksUpdateFormInputValues) => void;
    onError?: (fields: BooksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BooksUpdateFormInputValues) => BooksUpdateFormInputValues;
    onValidate?: BooksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BooksUpdateForm(props: BooksUpdateFormProps): React.ReactElement;
