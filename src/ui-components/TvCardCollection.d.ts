/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TvCardProps } from "./TvCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TvCardCollectionOverridesProps = {
    TvCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    TvCard?: TvCardProps;
} & EscapeHatchProps;
export declare type TvCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TvCardProps;
} & {
    overrides?: TvCardCollectionOverridesProps | undefined | null;
}>;
export default function TvCardCollection(props: TvCardCollectionProps): React.ReactElement;
