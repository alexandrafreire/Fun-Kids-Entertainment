/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Games } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GamesUpdateFormInputValues = {
    gameName?: string;
    gameDescription?: string;
    gameImage?: string;
};
export declare type GamesUpdateFormValidationValues = {
    gameName?: ValidationFunction<string>;
    gameDescription?: ValidationFunction<string>;
    gameImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamesUpdateFormOverridesProps = {
    GamesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameName?: PrimitiveOverrideProps<TextFieldProps>;
    gameDescription?: PrimitiveOverrideProps<TextFieldProps>;
    gameImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GamesUpdateFormProps = React.PropsWithChildren<{
    overrides?: GamesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    games?: Games;
    onSubmit?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onSuccess?: (fields: GamesUpdateFormInputValues) => void;
    onError?: (fields: GamesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onValidate?: GamesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GamesUpdateForm(props: GamesUpdateFormProps): React.ReactElement;
