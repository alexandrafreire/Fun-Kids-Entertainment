/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactUsFormInputValues = {
    firstName?: string;
    email?: string;
    Name?: string;
    feedbackType?: string;
    overallSiteRating?: string;
    message?: string;
};
export declare type ContactUsFormValidationValues = {
    firstName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    feedbackType?: ValidationFunction<string>;
    overallSiteRating?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsFormOverridesProps = {
    ContactUsFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    feedbackType?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    overallSiteRating?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    message?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsFormProps = React.PropsWithChildren<{
    overrides?: ContactUsFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactUsFormInputValues) => ContactUsFormInputValues;
    onSuccess?: (fields: ContactUsFormInputValues) => void;
    onError?: (fields: ContactUsFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ContactUsFormInputValues) => ContactUsFormInputValues;
    onValidate?: ContactUsFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsForm(props: ContactUsFormProps): React.ReactElement;
