/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FavoriteSites, Users, Sites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FavoriteSitesUpdateFormInputValues = {
    user?: Users;
    site?: Sites;
};
export declare type FavoriteSitesUpdateFormValidationValues = {
    user?: ValidationFunction<Users>;
    site?: ValidationFunction<Sites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteSitesUpdateFormOverridesProps = {
    FavoriteSitesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    site?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FavoriteSitesUpdateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteSitesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    favoriteSites?: FavoriteSites;
    onSubmit?: (fields: FavoriteSitesUpdateFormInputValues) => FavoriteSitesUpdateFormInputValues;
    onSuccess?: (fields: FavoriteSitesUpdateFormInputValues) => void;
    onError?: (fields: FavoriteSitesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteSitesUpdateFormInputValues) => FavoriteSitesUpdateFormInputValues;
    onValidate?: FavoriteSitesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteSitesUpdateForm(props: FavoriteSitesUpdateFormProps): React.ReactElement;
