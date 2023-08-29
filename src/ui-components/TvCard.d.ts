/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Movies } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TvCardOverridesProps = {
    TvCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TvCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    TvShows?: Movies;
} & {
    overrides?: TvCardOverridesProps | undefined | null;
}>;
export default function TvCard(props: TvCardProps): React.ReactElement;
