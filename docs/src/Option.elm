module Option exposing
  ( EmailFrequency(..), ShippingDestination(..) )


type EmailFrequency
  = Daily
  | Weekly
  | Monthly


type ShippingDestination
  = UnitedStates
  | Canada
  | Global
