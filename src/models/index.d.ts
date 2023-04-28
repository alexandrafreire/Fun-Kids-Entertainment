import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

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
  readonly preferredLocation?: string | null;
  readonly preferredAgeRanges?: SiteAgeRangesValues | keyof typeof SiteAgeRangesValues | null;
  readonly preferredAmusementTypes?: AmusementTypeNameValues | keyof typeof AmusementTypeNameValues | null;
  readonly Sites?: (Sites | null)[] | null;
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
  readonly preferredLocation?: string | null;
  readonly preferredAgeRanges?: SiteAgeRangesValues | keyof typeof SiteAgeRangesValues | null;
  readonly preferredAmusementTypes?: AmusementTypeNameValues | keyof typeof AmusementTypeNameValues | null;
  readonly Sites: AsyncCollection<Sites>;
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
  readonly siteAgeRange: string;
  readonly amusementTypeName: string;
  readonly siteType: string;
  readonly siteVillage: string;
  readonly siteCity: string;
  readonly siteCounty: string;
  readonly siteAddress: string;
  readonly siteLat: number;
  readonly siteLng: number;
  readonly SiteDistanceToGeoLoc?: number | null;
  readonly SiteTimeToGeoLocation?: number | null;
  readonly SiteWebsite?: string | null;
  readonly siteImage?: string | null;
  readonly SiteMapURL?: string | null;
  readonly cityLat?: number | null;
  readonly cityLng?: number | null;
  readonly usersID?: string | null;
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
  readonly siteAgeRange: string;
  readonly amusementTypeName: string;
  readonly siteType: string;
  readonly siteVillage: string;
  readonly siteCity: string;
  readonly siteCounty: string;
  readonly siteAddress: string;
  readonly siteLat: number;
  readonly siteLng: number;
  readonly SiteDistanceToGeoLoc?: number | null;
  readonly SiteTimeToGeoLocation?: number | null;
  readonly SiteWebsite?: string | null;
  readonly siteImage?: string | null;
  readonly SiteMapURL?: string | null;
  readonly cityLat?: number | null;
  readonly cityLng?: number | null;
  readonly usersID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sites = LazyLoading extends LazyLoadingDisabled ? EagerSites : LazySites

export declare const Sites: (new (init: ModelInit<Sites>) => Sites) & {
  copyOf(source: Sites, mutator: (draft: MutableModel<Sites>) => MutableModel<Sites> | void): Sites;
}