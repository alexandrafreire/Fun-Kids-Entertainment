/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users, Sites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FavoriteSitesCreateFormInputValues = {
    user?: Users;
    site?: Sites;
};
export declare type FavoriteSitesCreateFormValidationValues = {
    user?: ValidationFunction<Users>;
    site?: ValidationFunction<Sites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteSitesCreateFormOverridesProps = {
    FavoriteSitesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    site?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FavoriteSitesCreateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteSitesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FavoriteSitesCreateFormInputValues) => FavoriteSitesCreateFormInputValues;
    onSuccess?: (fields: FavoriteSitesCreateFormInputValues) => void;
    onError?: (fields: FavoriteSitesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteSitesCreateFormInputValues) => FavoriteSitesCreateFormInputValues;
    onValidate?: FavoriteSitesCreateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteSitesCreateForm(props: FavoriteSitesCreateFormProps): React.ReactElement;
