/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageBannerOverridesProps = {
    HomePageBanner?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HomePageBannerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomePageBannerOverridesProps | undefined | null;
}>;
export default function HomePageBanner(props: HomePageBannerProps): React.ReactElement;
