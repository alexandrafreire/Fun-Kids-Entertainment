/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Books } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksCardOverridesProps = {
    BooksCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Text Grouping"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    $99?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BooksCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    sites?: Books;
} & {
    overrides?: BooksCardOverridesProps | undefined | null;
}>;
export default function BooksCard(props: BooksCardProps): React.ReactElement;
