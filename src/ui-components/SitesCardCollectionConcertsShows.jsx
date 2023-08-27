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
export default function SitesCardCollectionConcertsShows(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "siteType",
    operand: "Exhibition",
    operator: "eq",
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
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          siteCity: await item.siteCity,
          favoritedBy: await item.favoritedBy.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Find cultural events "
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "SitesCardCollectionConcertsShows")}
      {...rest}
    >
      {(item, index) => (
        <SitesCard
          sites={item}
          sitesCard={item}
          height="367px"
          width="426px"
          margin="20px 10px 20px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SitesCard>
      )}
    </Collection>
  );
}
