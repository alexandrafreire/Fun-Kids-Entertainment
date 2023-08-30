/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sites } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SitesCardOverridesProps = {
    SitesCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Site Name36643417"?: PrimitiveOverrideProps<FlexProps>;
    "Site Name29766765"?: PrimitiveOverrideProps<TextProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Reviews?: PrimitiveOverrideProps<FlexProps>;
    "4.7"?: PrimitiveOverrideProps<TextProps>;
    "Review Stars"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "#of Reviews"?: PrimitiveOverrideProps<FlexProps>;
    "# of reviews"?: PrimitiveOverrideProps<TextProps>;
    Badges?: PrimitiveOverrideProps<FlexProps>;
    "Amusement Type"?: PrimitiveOverrideProps<BadgeProps>;
    "Site Age Range"?: PrimitiveOverrideProps<BadgeProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Location?: PrimitiveOverrideProps<FlexProps>;
    "Site Village, Site City"?: PrimitiveOverrideProps<TextProps>;
    DistanceToLoc?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SitesCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    sites?: Sites;
} & {
    overrides?: SitesCardOverridesProps | undefined | null;
}>;
export default function SitesCard(props: SitesCardProps): React.ReactElement;
