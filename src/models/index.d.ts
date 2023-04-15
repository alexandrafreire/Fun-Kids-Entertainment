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



type EagerContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
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
  readonly Name: string;
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

type EagerCities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cityName: string;
  readonly cityCounty: string;
  readonly cityCountry: string;
  readonly cityLat: number;
  readonly cityLng: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cityName: string;
  readonly cityCounty: string;
  readonly cityCountry: string;
  readonly cityLat: number;
  readonly cityLng: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cities = LazyLoading extends LazyLoadingDisabled ? EagerCities : LazyCities

export declare const Cities: (new (init: ModelInit<Cities>) => Cities) & {
  copyOf(source: Cities, mutator: (draft: MutableModel<Cities>) => MutableModel<Cities> | void): Cities;
}

type EagerUsersProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly preferredLocation?: string | null;
  readonly preferredAgeRanges?: (SiteAgeRangesValues | null)[] | keyof typeof SiteAgeRangesValues | null;
  readonly preferredAmusementTypes?: (AmusementTypeNameValues | null)[] | keyof typeof AmusementTypeNameValues | null;
  readonly UsersFavSites?: (string | null)[] | null;
  readonly Cities?: Cities | null;
  readonly Sites?: (Sites | null)[] | null;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersProfileCitiesId?: string | null;
}

type LazyUsersProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly preferredLocation?: string | null;
  readonly preferredAgeRanges?: (SiteAgeRangesValues | null)[] | keyof typeof SiteAgeRangesValues | null;
  readonly preferredAmusementTypes?: (AmusementTypeNameValues | null)[] | keyof typeof AmusementTypeNameValues | null;
  readonly UsersFavSites?: (string | null)[] | null;
  readonly Cities: AsyncItem<Cities | undefined>;
  readonly Sites: AsyncCollection<Sites>;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersProfileCitiesId?: string | null;
}

export declare type UsersProfile = LazyLoading extends LazyLoadingDisabled ? EagerUsersProfile : LazyUsersProfile

export declare const UsersProfile: (new (init: ModelInit<UsersProfile>) => UsersProfile) & {
  copyOf(source: UsersProfile, mutator: (draft: MutableModel<UsersProfile>) => MutableModel<UsersProfile> | void): UsersProfile;
}

type EagerSiteComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SiteComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly siteRating?: string | null;
  readonly message?: string | null;
  readonly email?: string | null;
  readonly username: string;
  readonly sitess?: (SitesSiteComments | null)[] | null;
  readonly createdDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySiteComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SiteComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly siteRating?: string | null;
  readonly message?: string | null;
  readonly email?: string | null;
  readonly username: string;
  readonly sitess: AsyncCollection<SitesSiteComments>;
  readonly createdDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SiteComments = LazyLoading extends LazyLoadingDisabled ? EagerSiteComments : LazySiteComments

export declare const SiteComments: (new (init: ModelInit<SiteComments>) => SiteComments) & {
  copyOf(source: SiteComments, mutator: (draft: MutableModel<SiteComments>) => MutableModel<SiteComments> | void): SiteComments;
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
  readonly SiteComments?: (SitesSiteComments | null)[] | null;
  readonly usersprofileID?: string | null;
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
  readonly SiteComments: AsyncCollection<SitesSiteComments>;
  readonly usersprofileID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sites = LazyLoading extends LazyLoadingDisabled ? EagerSites : LazySites

export declare const Sites: (new (init: ModelInit<Sites>) => Sites) & {
  copyOf(source: Sites, mutator: (draft: MutableModel<Sites>) => MutableModel<Sites> | void): Sites;
}

type EagerSitesSiteComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SitesSiteComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly siteCommentsId?: string | null;
  readonly sitesId?: string | null;
  readonly siteComments: SiteComments;
  readonly sites: Sites;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySitesSiteComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SitesSiteComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly siteCommentsId?: string | null;
  readonly sitesId?: string | null;
  readonly siteComments: AsyncItem<SiteComments>;
  readonly sites: AsyncItem<Sites>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SitesSiteComments = LazyLoading extends LazyLoadingDisabled ? EagerSitesSiteComments : LazySitesSiteComments

export declare const SitesSiteComments: (new (init: ModelInit<SitesSiteComments>) => SitesSiteComments) & {
  copyOf(source: SitesSiteComments, mutator: (draft: MutableModel<SitesSiteComments>) => MutableModel<SitesSiteComments> | void): SitesSiteComments;
}