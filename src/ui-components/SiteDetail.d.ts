/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sites, City } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteDetailOverridesProps = {
    SiteDetail?: PrimitiveOverrideProps<FlexProps>;
    "Frame 401"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame Description"?: PrimitiveOverrideProps<FlexProps>;
    SiteName?: PrimitiveOverrideProps<TextProps>;
    Options36572889?: PrimitiveOverrideProps<FlexProps>;
    "4.736572890"?: PrimitiveOverrideProps<TextProps>;
    Vector36572891?: PrimitiveOverrideProps<IconProps>;
    "# of reviews36572892"?: PrimitiveOverrideProps<TextProps>;
    SiteDescription?: PrimitiveOverrideProps<TextProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    Divider29766957?: PrimitiveOverrideProps<DividerProps>;
    "Frame Highlights"?: PrimitiveOverrideProps<FlexProps>;
    Highlights?: PrimitiveOverrideProps<TextProps>;
    "Amusement Type:"?: PrimitiveOverrideProps<TextProps>;
    "Suitable for"?: PrimitiveOverrideProps<TextProps>;
    Divider29766961?: PrimitiveOverrideProps<DividerProps>;
    "Frame Location"?: PrimitiveOverrideProps<FlexProps>;
    "Location Details"?: PrimitiveOverrideProps<TextProps>;
    "Frame Address"?: PrimitiveOverrideProps<FlexProps>;
    "Site Address"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Divider36572774?: PrimitiveOverrideProps<DividerProps>;
    "Frame Reviews"?: PrimitiveOverrideProps<FlexProps>;
    Reviews?: PrimitiveOverrideProps<TextProps>;
    "Frame Reviews Frame"?: PrimitiveOverrideProps<FlexProps>;
    "Add a New Review"?: PrimitiveOverrideProps<ButtonProps>;
    Options36572893?: PrimitiveOverrideProps<FlexProps>;
    "4.736572894"?: PrimitiveOverrideProps<TextProps>;
    Vector36572895?: PrimitiveOverrideProps<IconProps>;
    "# of reviews36572896"?: PrimitiveOverrideProps<TextProps>;
    Divider36572830?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type SiteDetailProps = React.PropsWithChildren<Partial<FlexProps> & {
    sites?: Sites;
    siteComments?: Sites;
    usersProfile?: City;
} & {
    overrides?: SiteDetailOverridesProps | undefined | null;
}>;
export default function SiteDetail(props: SiteDetailProps): React.ReactElement;
