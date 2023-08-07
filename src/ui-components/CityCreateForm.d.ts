/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sites } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CityCreateFormInputValues = {
    cityName?: string;
    cityLat?: number;
    citylng?: number;
    sites?: Sites[];
};
export declare type CityCreateFormValidationValues = {
    cityName?: ValidationFunction<string>;
    cityLat?: ValidationFunction<number>;
    citylng?: ValidationFunction<number>;
    sites?: ValidationFunction<Sites>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CityCreateFormOverridesProps = {
    CityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cityName?: PrimitiveOverrideProps<TextFieldProps>;
    cityLat?: PrimitiveOverrideProps<TextFieldProps>;
    citylng?: PrimitiveOverrideProps<TextFieldProps>;
    sites?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CityCreateFormProps = React.PropsWithChildren<{
    overrides?: CityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CityCreateFormInputValues) => CityCreateFormInputValues;
    onSuccess?: (fields: CityCreateFormInputValues) => void;
    onError?: (fields: CityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CityCreateFormInputValues) => CityCreateFormInputValues;
    onValidate?: CityCreateFormValidationValues;
} & React.CSSProperties>;
export default function CityCreateForm(props: CityCreateFormProps): React.ReactElement;
