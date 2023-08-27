/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SitesCardProps } from "./SitesCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SitesCardCollectionConcertsShowsOverridesProps = {
    SitesCardCollectionConcertsShows?: PrimitiveOverrideProps<CollectionProps>;
    SitesCard?: SitesCardProps;
} & EscapeHatchProps;
export declare type SitesCardCollectionConcertsShowsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SitesCardProps;
} & {
    overrides?: SitesCardCollectionConcertsShowsOverridesProps | undefined | null;
}>;
export default function SitesCardCollectionConcertsShows(props: SitesCardCollectionConcertsShowsProps): React.ReactElement;