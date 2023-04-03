/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Sites } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SitesCard from "./SitesCard";
import { Collection } from "@aws-amplify/ui-react";
export default function SitesCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.SiteDistanceToGeoLoc(SortDirection.ASCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Sites,
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
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SitesCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <SitesCard
          sites={item}
          margin="20px 10px 20px 10px"
          height="506px"
          width="392px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SitesCard>
      )}
    </Collection>
  );
}
