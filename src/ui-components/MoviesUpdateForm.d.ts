/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Movies } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MoviesUpdateFormInputValues = {
    movieName?: string;
    moviesDescription?: string;
    movieImage?: string;
};
export declare type MoviesUpdateFormValidationValues = {
    movieName?: ValidationFunction<string>;
    moviesDescription?: ValidationFunction<string>;
    movieImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MoviesUpdateFormOverridesProps = {
    MoviesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    movieName?: PrimitiveOverrideProps<TextFieldProps>;
    moviesDescription?: PrimitiveOverrideProps<TextFieldProps>;
    movieImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MoviesUpdateFormProps = React.PropsWithChildren<{
    overrides?: MoviesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    movies?: Movies;
    onSubmit?: (fields: MoviesUpdateFormInputValues) => MoviesUpdateFormInputValues;
    onSuccess?: (fields: MoviesUpdateFormInputValues) => void;
    onError?: (fields: MoviesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MoviesUpdateFormInputValues) => MoviesUpdateFormInputValues;
    onValidate?: MoviesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MoviesUpdateForm(props: MoviesUpdateFormProps): React.ReactElement;
