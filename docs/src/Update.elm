module Update exposing
  ( update )


-- Project
import Page
import Model
import Msg
-- Frameworks
import Effect.Url
import Effect.Page


update : Msg.Msg -> Model.Model -> (Model.Model, Cmd Msg.Msg)
update msg model =
  let
    noCmd =
      flip (,) Cmd.none

  in
    case msg of
      Msg.Route location ->
        location
          |> Model.fromLocation
          |> Maybe.withDefault Model.initial
          |> noCmd

      Msg.Load page ->
        ( model
        , Effect.Url.stepTo (page |> Page.hash)
        )

      Msg.SelectTab tab ->
        { model
        | currentTab = tab
        }
          |> noCmd

      Msg.Alert text ->
        { model
        | alertText = text
        , alertIsVisible = True
        }
          |> noCmd

      Msg.DismissAlert ->
        { model
        | alertIsVisible = False
        }
          |> noCmd

      Msg.LoadUrl path ->
        ( model
        , Effect.Page.load path
        )

      Msg.Disappear ->
        { model
        | deleteIsHidden = True
        }
          |> noCmd

      Msg.UpdateUserName value ->
        { model
        | userName = value
        }
          |> noCmd

      Msg.UpdateUserBio value ->
        { model
        | userBio = value
        }
          |> noCmd

      Msg.UpdateUserAge value ->
        { model
        | userAge = value
        }
          |> noCmd

      Msg.UpdatePackageWeight value ->
        { model
        | packageWeight = value
        }
          |> noCmd

      Msg.UpdateBackgroundColor value ->
        { model
        | backgroundColor = value
        }
          |> noCmd

      Msg.UpdateStarRating value ->
        { model
        | starRating = value
        }
          |> noCmd

      Msg.AdjustBrightness value ->
        { model
        | brightness = value
        }
          |> noCmd

      Msg.UpdateTextColor value ->
        { model
        | textColor = value
        }
          |> noCmd

      Msg.ToggleUserAgrees ->
        { model
        | userAgrees =
            model.userAgrees
              |> Basics.not
        }
          |> noCmd

      Msg.UpdateEmailFrequency option ->
        { model
        | emailFrequency = option
        }
          |> noCmd

      Msg.UpdateShippingDestination value ->
        { model
        | shippingDestination = value
        }
          |> noCmd

      Msg.HideNotification ->
        { model
        | notificationIsHidden = True
        }
          |> noCmd

      Msg.ToggleTag ->
        { model
        | tagIsActive =
            model.tagIsActive
              |> Basics.not
        }
          |> noCmd

      Msg.Hover state ->
        { model
        | tagIsHovered = state
        }
          |> noCmd
