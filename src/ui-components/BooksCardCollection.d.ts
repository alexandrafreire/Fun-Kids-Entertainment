/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BooksCardProps } from "./BooksCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksCardCollectionOverridesProps = {
    BooksCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    BooksCard?: BooksCardProps;
} & EscapeHatchProps;
export declare type BooksCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => BooksCardProps;
} & {
    overrides?: BooksCardCollectionOverridesProps | undefined | null;
}>;
export default function BooksCardCollection(props: BooksCardCollectionProps): React.ReactElement;
