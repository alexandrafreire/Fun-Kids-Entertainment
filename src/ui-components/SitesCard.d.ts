/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sites, UsersProfile } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SitesCardOverridesProps = {
    SitesCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    "Site Name"?: PrimitiveOverrideProps<TextProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    "4.7"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "# of reviews"?: PrimitiveOverrideProps<TextProps>;
    Badges?: PrimitiveOverrideProps<FlexProps>;
    Badge35692749?: PrimitiveOverrideProps<BadgeProps>;
    Badge35692753?: PrimitiveOverrideProps<BadgeProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Location?: PrimitiveOverrideProps<FlexProps>;
    "Site Village, Site City"?: PrimitiveOverrideProps<TextProps>;
    "10,45"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SitesCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    sites?: Sites;
    sitesCard?: Sites;
    header?: React.ReactNode;
    usersProfile?: UsersProfile;
} & {
    overrides?: SitesCardOverridesProps | undefined | null;
}>;
export default function SitesCard(props: SitesCardProps): React.ReactElement;
