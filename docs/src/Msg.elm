module Msg exposing
  ( Msg(..) )


-- Project
import Page
import Tab
import Option
-- Frameworks
import Effect.Routing
-- Core
import Color exposing (Color)


type Msg
  = Route Effect.Routing.Location
  | Load Page.Id
  | SelectTab Tab.Id
  | Alert String
  | DismissAlert
  | LoadUrl String
  | Disappear
  | UpdateUserName String
  | UpdateUserBio String
  | UpdateUserAge (Maybe Int)
  | UpdatePackageWeight (Maybe Float)
  | UpdateBackgroundColor (Maybe Color)
  | UpdateStarRating (Int)
  | AdjustBrightness Float
  | UpdateTextColor String
  | ToggleUserAgrees
  | UpdateEmailFrequency Option.EmailFrequency
  | UpdateShippingDestination (Maybe Option.ShippingDestination)
  | HideNotification
  | ToggleTag
  | Hover Bool
