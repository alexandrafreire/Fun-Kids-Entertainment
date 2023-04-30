/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersProfileUpdateFormInputValues = {
    name?: string;
    email?: string;
    username?: string;
    profilePic?: string;
    preferredLocation?: string;
    preferredAgeRanges?: string;
    preferredAmusementTypes?: string;
};
export declare type UsersProfileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    profilePic?: ValidationFunction<string>;
    preferredLocation?: ValidationFunction<string>;
    preferredAgeRanges?: ValidationFunction<string>;
    preferredAmusementTypes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersProfileUpdateFormOverridesProps = {
    UsersProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
    preferredLocation?: PrimitiveOverrideProps<SelectFieldProps>;
    preferredAgeRanges?: PrimitiveOverrideProps<SelectFieldProps>;
    preferredAmusementTypes?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type UsersProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    users?: Users;
    onSubmit?: (fields: UsersProfileUpdateFormInputValues) => UsersProfileUpdateFormInputValues;
    onSuccess?: (fields: UsersProfileUpdateFormInputValues) => void;
    onError?: (fields: UsersProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersProfileUpdateFormInputValues) => UsersProfileUpdateFormInputValues;
    onValidate?: UsersProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersProfileUpdateForm(props: UsersProfileUpdateFormProps): React.ReactElement;
