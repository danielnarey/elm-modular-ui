module View exposing
  ( view )


-- Project
import Option
import Model
import Msg
import View.Interactive
-- Framework
import Ui
import Ui.Modifier
import Ui.Style
import Ui.Input
import Ui.Selector
-- Core
import VirtualDom


view : Model.Model -> VirtualDom.Node Msg.Msg
view model =
  [ View.Interactive.button

  , model
    |> View.Interactive.input

  ]
    |> Ui.container "div"
    |> Ui.Style.add ("background-color", "#dbdbdb")
    |> Ui.render


-- view model =
--   let
--     float =
--       { id = 4
--       , placeholder = ""
--       , value = model.brightness
--       , minMaxStep = (0, 1, 0.01)
--       }
--         |> Ui.Input.float Msg.AdjustBrightness
--
--
--     checkbox =
--       { id = 1
--       , label = "I agree to the terms and conditions"
--       , checked = model.userAgrees
--       }
--         |> Ui.Selector.checkbox Msg.ToggleUserAgrees
--
--     radioButtons =
--       { id = 2
--       , options =
--         [ ("Every day", Option.Daily)
--         , ("Every week", Option.Weekly)
--         , ("Every month", Option.Monthly)
--         ]
--
--       , selected = model.emailFrequency
--       }
--         |> Ui.Selector.radioButtons Msg.UpdateEmailFrequency
--         |> Ui.container "div"
--
--     dropdown =
--       { id = 3
--       , placeholder = "Select shipping destination"
--       , options =
--           [ ("United States", Option.UnitedStates)
--           , ("Canada", Option.Canada)
--           , ("Global", Option.Global)
--           ]
--
--       , selected = model.shippingDestination
--       }
--         |> Ui.Selector.dropdown Msg.UpdateShippingDestination
--
--     toColumns (selector, value) =
--       [ selector
--       , value
--       ]
--         |> List.map
--           ( List.singleton
--             >> Ui.container "div"
--             >> Ui.Modifier.add "column"
--           )
--         |> Ui.container "div"
--         |> Ui.Modifier.add "columns"
--
--
--   in
--     [ ( float
--       , model.brightness
--         |> Basics.toString
--         |> Ui.textWrapper "code"
--
--       )
--
--     , ( checkbox
--       , model.userAgrees
--         |> Basics.toString
--         |> Ui.textWrapper "code"
--
--       )
--
--     , ( radioButtons
--       , model.emailFrequency
--         |> Basics.toString
--         |> Ui.textWrapper "code"
--
--       )
--
--     , ( dropdown
--       , model.shippingDestination
--         |> Basics.toString
--         |> Ui.textWrapper "code"
--
--       )
--
--     ]
--       |> List.map toColumns
--       |> Ui.container "div"
--       |> Ui.Modifier.add "container"
--       |> List.singleton
--       |> Ui.container "section"
--       |> Ui.Modifier.add "section"
--       |> Ui.render
