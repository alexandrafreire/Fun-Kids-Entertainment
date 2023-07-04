/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FavoriteSites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SitesCreateFormInputValues = {
    siteName?: string;
    siteDescription?: string;
    siteTotalRating?: number;
    siteNumberOfRatings?: number;
    siteAgeRange?: string;
    amusementTypeName?: string;
    siteType?: string;
    siteVillage?: string;
    siteCity?: string;
    siteCounty?: string;
    siteAddress?: string;
    siteLat?: number;
    siteLng?: number;
    SiteDistanceToGeoLoc?: number;
    SiteTimeToGeoLocation?: number;
    SiteWebsite?: string;
    siteImage?: string;
    SiteMapURL?: string;
    cityLat?: number;
    cityLng?: number;
    favoritedBy?: FavoriteSites[];
};
export declare type SitesCreateFormValidationValues = {
    siteName?: ValidationFunction<string>;
    siteDescription?: ValidationFunction<string>;
    siteTotalRating?: ValidationFunction<number>;
    siteNumberOfRatings?: ValidationFunction<number>;
    siteAgeRange?: ValidationFunction<string>;
    amusementTypeName?: ValidationFunction<string>;
    siteType?: ValidationFunction<string>;
    siteVillage?: ValidationFunction<string>;
    siteCity?: ValidationFunction<string>;
    siteCounty?: ValidationFunction<string>;
    siteAddress?: ValidationFunction<string>;
    siteLat?: ValidationFunction<number>;
    siteLng?: ValidationFunction<number>;
    SiteDistanceToGeoLoc?: ValidationFunction<number>;
    SiteTimeToGeoLocation?: ValidationFunction<number>;
    SiteWebsite?: ValidationFunction<string>;
    siteImage?: ValidationFunction<string>;
    SiteMapURL?: ValidationFunction<string>;
    cityLat?: ValidationFunction<number>;
    cityLng?: ValidationFunction<number>;
    favoritedBy?: ValidationFunction<FavoriteSites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SitesCreateFormOverridesProps = {
    SitesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    siteName?: PrimitiveOverrideProps<TextFieldProps>;
    siteDescription?: PrimitiveOverrideProps<TextFieldProps>;
    siteTotalRating?: PrimitiveOverrideProps<TextFieldProps>;
    siteNumberOfRatings?: PrimitiveOverrideProps<TextFieldProps>;
    siteAgeRange?: PrimitiveOverrideProps<TextFieldProps>;
    amusementTypeName?: PrimitiveOverrideProps<TextFieldProps>;
    siteType?: PrimitiveOverrideProps<TextFieldProps>;
    siteVillage?: PrimitiveOverrideProps<TextFieldProps>;
    siteCity?: PrimitiveOverrideProps<TextFieldProps>;
    siteCounty?: PrimitiveOverrideProps<TextFieldProps>;
    siteAddress?: PrimitiveOverrideProps<TextFieldProps>;
    siteLat?: PrimitiveOverrideProps<TextFieldProps>;
    siteLng?: PrimitiveOverrideProps<TextFieldProps>;
    SiteDistanceToGeoLoc?: PrimitiveOverrideProps<TextFieldProps>;
    SiteTimeToGeoLocation?: PrimitiveOverrideProps<TextFieldProps>;
    SiteWebsite?: PrimitiveOverrideProps<TextFieldProps>;
    siteImage?: PrimitiveOverrideProps<TextFieldProps>;
    SiteMapURL?: PrimitiveOverrideProps<TextFieldProps>;
    cityLat?: PrimitiveOverrideProps<TextFieldProps>;
    cityLng?: PrimitiveOverrideProps<TextFieldProps>;
    favoritedBy?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SitesCreateFormProps = React.PropsWithChildren<{
    overrides?: SitesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SitesCreateFormInputValues) => SitesCreateFormInputValues;
    onSuccess?: (fields: SitesCreateFormInputValues) => void;
    onError?: (fields: SitesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SitesCreateFormInputValues) => SitesCreateFormInputValues;
    onValidate?: SitesCreateFormValidationValues;
} & React.CSSProperties>;
export default function SitesCreateForm(props: SitesCreateFormProps): React.ReactElement;
