module Model exposing
  ( Model
  , initial, fromLocation
  )


-- Project
import Page
import Tab
import Option
-- Frameworks
import Effect.Routing
-- Core
import Color exposing (Color)


type alias Model =
  { currentPage : Page.Id
  , currentTab : Tab.Id
  , alertText : String
  , alertIsVisible : Bool
  , deleteIsHidden : Bool
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
  , notificationIsHidden : Bool
  , tagIsActive : Bool
  , tagIsHovered : Bool
  }


initial : Model
initial =
  { currentPage = Page.Home
  , currentTab = Tab.Interactive
  , deleteIsHidden = False
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
  , notificationIsHidden = False
  , tagIsActive = False
  , tagIsHovered = False
  }


fromLocation : Effect.Routing.Location -> Maybe Model
fromLocation location =
  let
    updatePage model page =
      { model
      | currentPage = page
      , currentTab = page |> Tab.fromPage
      }

  in
    location.hash
      |> Page.fromHash
      |> Maybe.map (updatePage initial)
