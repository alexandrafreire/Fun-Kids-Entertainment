/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sites, City, FavoriteSites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SitesUpdateFormInputValues = {
    siteName?: string;
    siteDescription?: string;
    siteTotalRating?: number;
    siteNumberOfRatings?: number;
    siteAgeRange?: string;
    amusementTypeName?: string;
    siteType?: string;
    siteVillage?: string;
    siteCity?: City;
    siteCounty?: string;
    siteAddress?: string;
    siteLat?: number;
    siteLng?: number;
    SiteDistanceToPrefLocation?: number;
    SiteWebsite?: string;
    siteImage?: string;
    SiteMapURL?: string;
    favoritedBy?: FavoriteSites[];
};
export declare type SitesUpdateFormValidationValues = {
    siteName?: ValidationFunction<string>;
    siteDescription?: ValidationFunction<string>;
    siteTotalRating?: ValidationFunction<number>;
    siteNumberOfRatings?: ValidationFunction<number>;
    siteAgeRange?: ValidationFunction<string>;
    amusementTypeName?: ValidationFunction<string>;
    siteType?: ValidationFunction<string>;
    siteVillage?: ValidationFunction<string>;
    siteCity?: ValidationFunction<City>;
    siteCounty?: ValidationFunction<string>;
    siteAddress?: ValidationFunction<string>;
    siteLat?: ValidationFunction<number>;
    siteLng?: ValidationFunction<number>;
    SiteDistanceToPrefLocation?: ValidationFunction<number>;
    SiteWebsite?: ValidationFunction<string>;
    siteImage?: ValidationFunction<string>;
    SiteMapURL?: ValidationFunction<string>;
    favoritedBy?: ValidationFunction<FavoriteSites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SitesUpdateFormOverridesProps = {
    SitesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    siteName?: PrimitiveOverrideProps<TextFieldProps>;
    siteDescription?: PrimitiveOverrideProps<TextFieldProps>;
    siteTotalRating?: PrimitiveOverrideProps<TextFieldProps>;
    siteNumberOfRatings?: PrimitiveOverrideProps<TextFieldProps>;
    siteAgeRange?: PrimitiveOverrideProps<SelectFieldProps>;
    amusementTypeName?: PrimitiveOverrideProps<SelectFieldProps>;
    siteType?: PrimitiveOverrideProps<TextFieldProps>;
    siteVillage?: PrimitiveOverrideProps<TextFieldProps>;
    siteCity?: PrimitiveOverrideProps<AutocompleteProps>;
    siteCounty?: PrimitiveOverrideProps<TextFieldProps>;
    siteAddress?: PrimitiveOverrideProps<TextFieldProps>;
    siteLat?: PrimitiveOverrideProps<TextFieldProps>;
    siteLng?: PrimitiveOverrideProps<TextFieldProps>;
    SiteDistanceToPrefLocation?: PrimitiveOverrideProps<TextFieldProps>;
    SiteWebsite?: PrimitiveOverrideProps<TextFieldProps>;
    siteImage?: PrimitiveOverrideProps<TextFieldProps>;
    SiteMapURL?: PrimitiveOverrideProps<TextFieldProps>;
    favoritedBy?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SitesUpdateFormProps = React.PropsWithChildren<{
    overrides?: SitesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sites?: Sites;
    onSubmit?: (fields: SitesUpdateFormInputValues) => SitesUpdateFormInputValues;
    onSuccess?: (fields: SitesUpdateFormInputValues) => void;
    onError?: (fields: SitesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SitesUpdateFormInputValues) => SitesUpdateFormInputValues;
    onValidate?: SitesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SitesUpdateForm(props: SitesUpdateFormProps): React.ReactElement;
