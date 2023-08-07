import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum OverallSiteRatingValues {
  GOOD = "GOOD",
  AVERAGE = "AVERAGE",
  BAD = "BAD"
}

export enum FeedbackTypeValues {
  GENERAL_FEEDBACK = "GENERAL_FEEDBACK",
  REPORT_PROBLEM = "REPORT_PROBLEM",
  FEATURE_REQUEST = "FEATURE_REQUEST"
}

export enum AmusementTypeNameValues {
  PLAYGROUND = "PLAYGROUND",
  AMUSEMENT_PARK = "AMUSEMENT_PARK",
  EXHIBITION = "EXHIBITION",
  NATURE_ANIMALS = "NATURE_ANIMALS",
  WATER_PARK = "WATER_PARK",
  MUSEUM = "MUSEUM",
  BEACH = "BEACH",
  LANDSCAPE = "LANDSCAPE"
}

export enum SiteAgeRangesValues {
  FAMILY_ACTIVITIES = "FAMILY_ACTIVITIES",
  TODDLER = "TODDLER",
  PRESCHOOLER = "PRESCHOOLER",
  SCHOOL_AGED_CHILD = "SCHOOL_AGED_CHILD",
  ALL_AGES_KIDS = "ALL_AGES_KIDS",
  ADOLESCENTS_ADULTS = "ADOLESCENTS_ADULTS"
}



type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly profilePic?: string | null;
  readonly cityID?: string | null;
  readonly preferredLocation?: City | null;
  readonly preferredAgeRanges?: SiteAgeRangesValues | keyof typeof SiteAgeRangesValues | null;
  readonly preferredAmusementTypes?: AmusementTypeNameValues | keyof typeof AmusementTypeNameValues | null;
  readonly favoriteSites?: (FavoriteSites | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly profilePic?: string | null;
  readonly cityID?: string | null;
  readonly preferredLocation: AsyncItem<City | undefined>;
  readonly preferredAgeRanges?: SiteAgeRangesValues | keyof typeof SiteAgeRangesValues | null;
  readonly preferredAmusementTypes?: AmusementTypeNameValues | keyof typeof AmusementTypeNameValues | null;
  readonly favoriteSites: AsyncCollection<FavoriteSites>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly email: string;
  readonly feedbackType?: FeedbackTypeValues | keyof typeof FeedbackTypeValues | null;
  readonly overallSiteRating?: OverallSiteRatingValues | keyof typeof OverallSiteRatingValues | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname?: string | null;
  readonly email: string;
  readonly feedbackType?: FeedbackTypeValues | keyof typeof FeedbackTypeValues | null;
  readonly overallSiteRating?: OverallSiteRatingValues | keyof typeof OverallSiteRatingValues | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactUs = LazyLoading extends LazyLoadingDisabled ? EagerContactUs : LazyContactUs

export declare const ContactUs: (new (init: ModelInit<ContactUs>) => ContactUs) & {
  copyOf(source: ContactUs, mutator: (draft: MutableModel<ContactUs>) => MutableModel<ContactUs> | void): ContactUs;
}

type EagerCity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<City, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cityName: string;
  readonly cityLat: number;
  readonly citylng: number;
  readonly sites?: (Sites | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<City, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cityName: string;
  readonly cityLat: number;
  readonly citylng: number;
  readonly sites: AsyncCollection<Sites>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type City = LazyLoading extends LazyLoadingDisabled ? EagerCity : LazyCity

export declare const City: (new (init: ModelInit<City>) => City) & {
  copyOf(source: City, mutator: (draft: MutableModel<City>) => MutableModel<City> | void): City;
}

type EagerSites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly siteName: string;
  readonly siteDescription: string;
  readonly siteTotalRating: number;
  readonly siteNumberOfRatings?: number | null;
  readonly siteAgeRange: SiteAgeRangesValues | keyof typeof SiteAgeRangesValues;
  readonly amusementTypeName: AmusementTypeNameValues | keyof typeof AmusementTypeNameValues;
  readonly siteType: string;
  readonly siteVillage: string;
  readonly cityID: string;
  readonly siteCity?: City | null;
  readonly siteCounty: string;
  readonly siteAddress: string;
  readonly siteLat: number;
  readonly siteLng: number;
  readonly SiteDistanceToPrefLocation?: number | null;
  readonly SiteWebsite?: string | null;
  readonly siteImage?: string | null;
  readonly SiteMapURL?: string | null;
  readonly favoritedBy?: (FavoriteSites | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly siteName: string;
  readonly siteDescription: string;
  readonly siteTotalRating: number;
  readonly siteNumberOfRatings?: number | null;
  readonly siteAgeRange: SiteAgeRangesValues | keyof typeof SiteAgeRangesValues;
  readonly amusementTypeName: AmusementTypeNameValues | keyof typeof AmusementTypeNameValues;
  readonly siteType: string;
  readonly siteVillage: string;
  readonly cityID: string;
  readonly siteCity: AsyncItem<City | undefined>;
  readonly siteCounty: string;
  readonly siteAddress: string;
  readonly siteLat: number;
  readonly siteLng: number;
  readonly SiteDistanceToPrefLocation?: number | null;
  readonly SiteWebsite?: string | null;
  readonly siteImage?: string | null;
  readonly SiteMapURL?: string | null;
  readonly favoritedBy: AsyncCollection<FavoriteSites>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sites = LazyLoading extends LazyLoadingDisabled ? EagerSites : LazySites

export declare const Sites: (new (init: ModelInit<Sites>) => Sites) & {
  copyOf(source: Sites, mutator: (draft: MutableModel<Sites>) => MutableModel<Sites> | void): Sites;
}

type EagerFavoriteSites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteSites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly siteID: string;
  readonly user?: Users | null;
  readonly site?: Sites | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFavoriteSites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteSites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly siteID: string;
  readonly user: AsyncItem<Users | undefined>;
  readonly site: AsyncItem<Sites | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FavoriteSites = LazyLoading extends LazyLoadingDisabled ? EagerFavoriteSites : LazyFavoriteSites

export declare const FavoriteSites: (new (init: ModelInit<FavoriteSites>) => FavoriteSites) & {
  copyOf(source: FavoriteSites, mutator: (draft: MutableModel<FavoriteSites>) => MutableModel<FavoriteSites> | void): FavoriteSites;
}