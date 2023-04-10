/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Sites } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { SortDirection } from "@aws-amplify/datastore";
import SitesCard from "./SitesCard";
import { Collection } from "@aws-amplify/ui-react";
export default function SitesCollectionHomeFavorites(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    and: [
      { field: "siteTotalRating", operand: "4.7", operator: "ge" },
      { field: "siteCounty", operand: "Dublin", operator: "contains" },
    ],
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = {
    sort: (s) => s.siteTotalRating(SortDirection.DESCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Sites,
    criteria: itemsFilter,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SitesCollectionHomeFavorites")}
      {...rest}
    >
      {(item, index) => (
        <SitesCard
          height="371px"
          width="387px"
          margin="25px 10px 20px 10px"
          sites={item}
          sitesCard={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SitesCard>
      )}
    </Collection>
  );
}
