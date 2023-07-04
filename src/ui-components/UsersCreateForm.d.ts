/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FavoriteSites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersCreateFormInputValues = {
    name?: string;
    email?: string;
    username?: string;
    profilePic?: string;
    preferredLocation?: string;
    preferredAgeRanges?: string;
    preferredAmusementTypes?: string;
    favoriteSites?: FavoriteSites[];
};
export declare type UsersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    profilePic?: ValidationFunction<string>;
    preferredLocation?: ValidationFunction<string>;
    preferredAgeRanges?: ValidationFunction<string>;
    preferredAmusementTypes?: ValidationFunction<string>;
    favoriteSites?: ValidationFunction<FavoriteSites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersCreateFormOverridesProps = {
    UsersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
    preferredLocation?: PrimitiveOverrideProps<TextFieldProps>;
    preferredAgeRanges?: PrimitiveOverrideProps<SelectFieldProps>;
    preferredAmusementTypes?: PrimitiveOverrideProps<SelectFieldProps>;
    favoriteSites?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UsersCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onSuccess?: (fields: UsersCreateFormInputValues) => void;
    onError?: (fields: UsersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onValidate?: UsersCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersCreateForm(props: UsersCreateFormProps): React.ReactElement;
