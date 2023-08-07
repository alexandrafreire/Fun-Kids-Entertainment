/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { City, Users, Sites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CityUpdateFormInputValues = {
    cityName?: string;
    cityLat?: number;
    citylng?: number;
    users?: Users[];
    sites?: Sites[];
};
export declare type CityUpdateFormValidationValues = {
    cityName?: ValidationFunction<string>;
    cityLat?: ValidationFunction<number>;
    citylng?: ValidationFunction<number>;
    users?: ValidationFunction<Users>;
    sites?: ValidationFunction<Sites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CityUpdateFormOverridesProps = {
    CityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cityName?: PrimitiveOverrideProps<TextFieldProps>;
    cityLat?: PrimitiveOverrideProps<TextFieldProps>;
    citylng?: PrimitiveOverrideProps<TextFieldProps>;
    users?: PrimitiveOverrideProps<AutocompleteProps>;
    sites?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CityUpdateFormProps = React.PropsWithChildren<{
    overrides?: CityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    city?: City;
    onSubmit?: (fields: CityUpdateFormInputValues) => CityUpdateFormInputValues;
    onSuccess?: (fields: CityUpdateFormInputValues) => void;
    onError?: (fields: CityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CityUpdateFormInputValues) => CityUpdateFormInputValues;
    onValidate?: CityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CityUpdateForm(props: CityUpdateFormProps): React.ReactElement;
