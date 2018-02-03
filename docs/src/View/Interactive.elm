module View.Interactive exposing
  ( button, input )


-- Project
import Model
import Msg
import View.Component
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Button
import Ui.Input
import Component.Grid
-- Helpers
import ColorMath.Hex
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


button : Ui.Element Msg.Msg
button =
  let
    action =
      ( "\"Click Here\"\n  |> Ui.Button.action (Msg.Alert \"You Clicked!\")\n  |> Ui.render"

      , "Click Here"
        |> Ui.Button.action (Msg.Alert "You Clicked!")

      )
        |> View.Component.example "Action Button"

    navigation =
      ( "\"Go to Top\"\n  |> Ui.Button.navigation (Msg.NavTo \"#\")\n  |> Ui.render"

      , "Go to Top"
        |> Ui.Button.navigation (Msg.NavTo "#")

      )
        |> View.Component.example "Navigation Button"


    delete =
      ( "Ui.Button.delete Msg.Disappear\n  |> Ui.render"

      , Ui.Button.delete Msg.Disappear

      )
        |> View.Component.example "Delete Button"

  in
    [ action
    , navigation
    , delete
    ]
      |> View.Component.section "Buttons"


input : Model.Model -> Ui.Element Msg.Msg
input model =
  let
    stringCode =
      "{ id = 1\n, placeholder = \"first last\"\n, value = model.userName\n}\n  |> Ui.Input.string Msg.UpdateUserName"

    stringElement =
      [ { id = 1
        , placeholder = "first last"
        , value = model.userName
        }
          |> Ui.Input.string Msg.UpdateUserName
         :|> Ui.container "div"

      , model.userName
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    textAreaCode =
      "{ id = 2\n, placeholder = \"Tell us about yourself.\"\n, value = model.userBio\n, rows = Just 10\n}\n  |> Ui.Input.textArea Msg.UpdateUserBio"

    textAreaElement =
      [ { id = 2
        , placeholder = "Tell us about yourself."
        , value = model.userBio
        , rows = Just 10
        }
          |> Ui.Input.textArea Msg.UpdateUserBio
         :|> Ui.container "div"

      , model.userBio
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    intCode =
      "{ id = 3\n, placeholder = \"35\"\n, value = model.userAge\n, minMaxStep = (0, 117, 1)\n}\n  |> Ui.Input.int Msg.UpdateUserAge"

    intElement =
      [ { id = 3
        , placeholder = "35"
        , value = model.userAge
        , minMaxStep = (0, 117, 1)
        }
          |> Ui.Input.int Msg.UpdateUserAge
         :|> Ui.container "div"

      , model.userAge
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    floatCode =
      "{ id = 4\n, placeholder = \"\"\n, value = model.packageWeight\n, minMaxStep = (0, 1, 0.01)\n}\n  |> Ui.Input.float Msg.UpdatePackageWeight"

    floatElement =
      [ { id = 4
        , placeholder = ""
        , value = model.packageWeight
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.float Msg.UpdatePackageWeight
         :|> Ui.container "div"

      , model.packageWeight
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    customCode =
      "{ id = 5\n, placeholder = \"#FFFFFF\"\n, value = model.backgroundColor\n, encoder = ColorMath.Hex.toColor\n, decoder = ColorMath.Hex.fromColor >> Ok\n}\n  |> Ui.Input.custom Msg.UpdateBackgroundColor"

    customElement =
      [ { id = 5
        , placeholder = "#FFFFFF"
        , value = model.backgroundColor
        , encoder = ColorMath.Hex.toColor
        , decoder = ColorMath.Hex.fromColor >> Ok
        }
          |> Ui.Input.custom Msg.UpdateBackgroundColor
         :|> Ui.container "div"

      , model.backgroundColor
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    intSliderCode =
      "{ id = 6\n, value = model.starRating\n, minMaxStep = (1, 5, 1)\n}\n  |> Ui.Input.intSlider Msg.UpdateStarRating"

    intSliderElement =
      [ { id = 6
        , value = model.starRating
        , minMaxStep = (1, 5, 1)
        }
          |> Ui.Input.intSlider Msg.UpdateStarRating
         :|> Ui.container "div"

      , model.starRating
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    floatSliderCode =
      "{ id = 7\n, value = model.brightness\n, minMaxStep = (0, 1, 0.01)\n}\n  |> Ui.Input.floatSlider Msg.AdjustBrightness"

    floatSliderElement =
      [ { id = 7
        , value = model.brightness
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider Msg.AdjustBrightness
         :|> Ui.container "div"

      , model.brightness
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    colorPickerCode =
      "{ id = 8\n, value = model.textColor\n}\n  |> Ui.Input.colorPicker Msg.UpdateTextColor"

    colorPickerElement =
      [ { id = 8
        , value = model.textColor
        }
          |> Ui.Input.colorPicker Msg.UpdateTextColor
         :|> Ui.container "div"

      , model.textColor
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> View.Component.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

  in
    [ ( stringCode
      , stringElement
      )
        |> View.Component.example "String Input"

    , ( textAreaCode
      , textAreaElement
      )
        |> View.Component.example "Text Area"

    , ( intCode
      , intElement
      )
        |> View.Component.example "Int Input"

    , ( floatCode
      , floatElement
      )
        |> View.Component.example "Float Input"

    , ( customCode
      , customElement
      )
        |> View.Component.example "Custom Input"

    , ( intSliderCode
      , intSliderElement
      )
        |> View.Component.example "Int Slider"

    , ( floatSliderCode
      , floatSliderElement
      )
        |> View.Component.example "Float Slider"

    , ( colorPickerCode
      , colorPickerElement
      )
        |> View.Component.example "Color Picker"

    ]
      |> View.Component.section "Input"


--
-- selector
--
-- indicator
