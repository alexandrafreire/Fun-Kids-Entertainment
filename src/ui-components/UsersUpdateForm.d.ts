/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users, City, FavoriteSites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersUpdateFormInputValues = {
    name?: string;
    email?: string;
    username?: string;
    profilePic?: string;
    preferredLocation?: City;
    preferredAgeRanges?: string;
    preferredAmusementTypes?: string;
    favoriteSites?: FavoriteSites[];
};
export declare type UsersUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    profilePic?: ValidationFunction<string>;
    preferredLocation?: ValidationFunction<City>;
    preferredAgeRanges?: ValidationFunction<string>;
    preferredAmusementTypes?: ValidationFunction<string>;
    favoriteSites?: ValidationFunction<FavoriteSites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
    UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
    preferredLocation?: PrimitiveOverrideProps<AutocompleteProps>;
    preferredAgeRanges?: PrimitiveOverrideProps<SelectFieldProps>;
    preferredAmusementTypes?: PrimitiveOverrideProps<SelectFieldProps>;
    favoriteSites?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    users?: Users;
    onSubmit?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onSuccess?: (fields: UsersUpdateFormInputValues) => void;
    onError?: (fields: UsersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onValidate?: UsersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersUpdateForm(props: UsersUpdateFormProps): React.ReactElement;
