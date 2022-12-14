// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OverallSiteRatingValues = {
  "GOOD": "GOOD",
  "AVERAGE": "AVERAGE",
  "BAD": "BAD"
};

const FeedbackTypeValues = {
  "GENERAL_FEEDBACK": "GENERAL_FEEDBACK",
  "REPORT_PROBLEM": "REPORT_PROBLEM",
  "FEATURE_REQUEST": "FEATURE_REQUEST"
};

const SiteAgeRangesValues = {
  "FAMILY_ACTIVITIES": "FAMILY_ACTIVITIES",
  "TODDLER": "TODDLER",
  "PRESCHOOLER": "PRESCHOOLER",
  "SCHOOL_AGED_CHILD": "SCHOOL_AGED_CHILD",
  "ALL_AGES_KIDS": "ALL_AGES_KIDS",
  "ADOLESCENTS_ADULTS": "ADOLESCENTS_ADULTS"
};

const AmusementTypeNameValues = {
  "PLAYGROUND": "PLAYGROUND",
  "AMUSEMENT_PARK": "AMUSEMENT_PARK",
  "EXHIBITION": "EXHIBITION",
  "NATURE_ANIMALS": "NATURE_ANIMALS",
  "WATER_PARK": "WATER_PARK",
  "MUSEUM": "MUSEUM",
  "BEACH": "BEACH",
  "LANDSCAPE": "LANDSCAPE"
};

const { ContactUs, Cities, UsersProfile, Sites, SiteComments, SitesSiteComments } = initSchema(schema);

export {
  ContactUs,
  Cities,
  UsersProfile,
  Sites,
  SiteComments,
  SitesSiteComments,
  OverallSiteRatingValues,
  FeedbackTypeValues,
  SiteAgeRangesValues,
  AmusementTypeNameValues
};