module Update exposing
  ( update )


-- Project
import Model
import Msg


update : Msg.Msg -> Model.Model -> Model.Model
update msg model =
  case msg of
    Msg.Route location ->
      location
        |> Model.fromLocation
        |> Maybe.withDefault Model.initial

    Msg.Alert text ->
      { model
      | alertText = text
      , alertIsVisible = True
      }

    Msg.NavTo path ->
      model

    Msg.Disappear ->
      model

    Msg.UpdateUserName value ->
      { model
      | userName = value
      }

    Msg.UpdateUserBio value ->
      { model
      | userBio = value
      }

    Msg.UpdateUserAge value ->
      { model
      | userAge = value
      }

    Msg.UpdatePackageWeight value ->
      { model
      | packageWeight = value
      }

    Msg.UpdateBackgroundColor value ->
      { model
      | backgroundColor = value
      }

    Msg.UpdateStarRating value ->
      { model
      | starRating = value
      }

    Msg.AdjustBrightness value ->
      { model
      | brightness = value
      }

    Msg.UpdateTextColor value ->
      { model
      | textColor = value
      }

    Msg.ToggleUserAgrees ->
      { model
      | userAgrees =
          model.userAgrees
            |> Basics.not
      }

    Msg.UpdateEmailFrequency option ->
      { model
      | emailFrequency = option
      }

    Msg.UpdateShippingDestination value ->
      { model
      | shippingDestination = value
      }
