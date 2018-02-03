module Model exposing
  ( Model
  , initial, fromLocation
  )


-- Project
import Page
import Option
-- Frameworks
import Effect.Routing
-- Core
import Color exposing (Color)


type alias Model =
  { currentPage : Page.Id
  , alertText : String
  , alertIsVisible : Bool
  , userName : String
  , userBio : String
  , userAge : Maybe Int
  , packageWeight : Maybe Float
  , backgroundColor : Maybe Color
  , starRating : Int
  , brightness : Float
  , textColor : String
  , userAgrees : Bool
  , emailFrequency : Option.EmailFrequency
  , shippingDestination : Maybe Option.ShippingDestination
  }


initial : Model
initial =
  { currentPage = Page.Home
  , alertText = ""
  , alertIsVisible = False
  , userName = ""
  , userBio = ""
  , userAge = Nothing
  , packageWeight = Nothing
  , backgroundColor = Nothing
  , starRating = 3
  , brightness = 1
  , textColor = "#000000"
  , userAgrees = False
  , emailFrequency = Option.Weekly
  , shippingDestination = Nothing
  }


fromLocation : Effect.Routing.Location -> Maybe Model
fromLocation location =
  let
    updatePage model page =
      { model
      | currentPage = page
      }

  in
    location.pathname
      |> Page.fromPath
      |> Maybe.map (updatePage initial)
