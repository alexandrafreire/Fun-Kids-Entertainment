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
export declare type MoviesCreateFormInputValues = {
    movieName?: string;
    moviesDescription?: string;
    movieImage?: string;
};
export declare type MoviesCreateFormValidationValues = {
    movieName?: ValidationFunction<string>;
    moviesDescription?: ValidationFunction<string>;
    movieImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MoviesCreateFormOverridesProps = {
    MoviesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    movieName?: PrimitiveOverrideProps<TextFieldProps>;
    moviesDescription?: PrimitiveOverrideProps<TextFieldProps>;
    movieImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MoviesCreateFormProps = React.PropsWithChildren<{
    overrides?: MoviesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MoviesCreateFormInputValues) => MoviesCreateFormInputValues;
    onSuccess?: (fields: MoviesCreateFormInputValues) => void;
    onError?: (fields: MoviesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MoviesCreateFormInputValues) => MoviesCreateFormInputValues;
    onValidate?: MoviesCreateFormValidationValues;
} & React.CSSProperties>;
export default function MoviesCreateForm(props: MoviesCreateFormProps): React.ReactElement;
