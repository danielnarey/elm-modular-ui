module View.Interactive exposing
  ( buttons, input, selectors, indicators )


-- Project
import Option
import Model
import Msg
import View.Layout
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Button
import Ui.Input
import Ui.Selector
import Ui.Indicator
import Component.Layout
import Component.Grid
-- Helpers
import ColorMath.Hex
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


buttons : Model.Model -> Ui.Element Msg.Msg
buttons model =
  let
    actionCode =
      "\"Click Here\"\n  |> Ui.Button.action\n    ( Msg.Alert \"You Clicked!\" )"

    actionElement =
      "Click Here"
        |> Ui.Button.action (Msg.Alert "You Clicked!")

    navigationCode =
      "\"Elm Website\"\n  |> Ui.Button.navigation\n    ( Msg.LoadUrl \"http://elm-lang.org\" )"

    navigationElement =
      "Elm Website"
        |> Ui.Button.navigation (Msg.LoadUrl "http://elm-lang.org")

    deleteCode =
      "Ui.Button.delete Msg.Disappear"

    deleteElement =
      Ui.Button.delete Msg.Disappear
        |> Ui.Modifier.conditional
          ( "is-invisible", model.deleteIsHidden )

  in
    [ ( actionCode
      , actionElement
      )
        |> View.Layout.example "Action Button"

    , ( navigationCode
      , navigationElement
      )
        |> View.Layout.example "Navigation Button"

    , ( deleteCode
      , deleteElement
      )
        |> View.Layout.example "Delete Button"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


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
        |> Component.Grid.equalColumns "is-7"
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
        |> Component.Grid.equalColumns "is-7"
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
        |> Component.Grid.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    floatCode =
      "{ id = 4\n, placeholder = \"\"\n, value = model.packageWeight\n, minMaxStep = (0, 25, 0.01)\n}\n  |> Ui.Input.float Msg.UpdatePackageWeight"

    floatElement =
      [ { id = 4
        , placeholder = ""
        , value = model.packageWeight
        , minMaxStep = (0, 25, 0.1)
        }
          |> Ui.Input.float Msg.UpdatePackageWeight
         :|> Ui.container "div"

      , model.packageWeight
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> Component.Grid.equalColumns "is-7"
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
        |> Component.Grid.equalColumns "is-7"
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
        |> Component.Grid.equalColumns "is-7"
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
        |> Component.Grid.equalColumns "is-7"
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
        |> Component.Grid.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

  in
    [ ( stringCode
      , stringElement
      )
        |> View.Layout.example "String Input"

    , ( textAreaCode
      , textAreaElement
      )
        |> View.Layout.example "Text Area"

    , ( intCode
      , intElement
      )
        |> View.Layout.example "Int Input"

    , ( floatCode
      , floatElement
      )
        |> View.Layout.example "Float Input"

    , ( customCode
      , customElement
      )
        |> View.Layout.example "Custom Input"

    , ( intSliderCode
      , intSliderElement
      )
        |> View.Layout.example "Int Slider"

    , ( floatSliderCode
      , floatSliderElement
      )
        |> View.Layout.example "Float Slider"

    , ( colorPickerCode
      , colorPickerElement
      )
        |> View.Layout.example "Color Picker"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


selectors : Model.Model -> Ui.Element Msg.Msg
selectors model =
  let
    checkboxCode =
      "{ id = 9\n, label = \"I agree to the terms and conditions\"\n, checked = model.userAgrees\n}\n  |> Ui.Selector.checkbox Msg.ToggleUserAgrees"

    checkboxElement =
      [ { id = 9
        , label = "I agree to the terms and conditions"
        , checked = model.userAgrees
        }
          |> Ui.Selector.checkbox Msg.ToggleUserAgrees

      , model.userAgrees
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> Component.Grid.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

    radioButtonsCode =
      "{ id = 10\n, options =\n  [ (\"Every day\", Option.Daily)\n  , (\"Every week\", Option.Weekly)\n  , (\"Every month\", Option.Monthly)\n  ]\n\n, selected = model.emailFrequency\n}\n  |> Ui.Selector.radioButtons Msg.UpdateEmailFrequency"

    radioButtonsElement =
      [ { id = 10
        , options =
          [ ("Every day", Option.Daily)
          , ("Every week", Option.Weekly)
          , ("Every month", Option.Monthly)
          ]

        , selected = model.emailFrequency
        }
          |> Ui.Selector.radioButtons Msg.UpdateEmailFrequency
          |> Ui.container "div"

      , model.emailFrequency
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> Component.Grid.equalColumns "is-12"
        |> Ui.Modifier.add "is-multiline"

    dropdownCode =
      "{ id = 11\n, placeholder = \"Select shipping destination\"\n, options =\n  [ (\"United States\", Option.UnitedStates)\n  , (\"Canada\", Option.Canada)\n  , (\"Global\", Option.Global)\n  ]\n\n, selected = model.shippingDestination\n}\n  |> Ui.Selector.dropdown Msg.UpdateShippingDestination"

    dropdownElement =
      [ { id = 11
        , placeholder = "Select shipping destination"
        , options =
            [ ("United States", Option.UnitedStates)
            , ("Canada", Option.Canada)
            , ("Global", Option.Global)
            ]

        , selected = model.shippingDestination
        }
          |> Ui.Selector.dropdown Msg.UpdateShippingDestination
         :|> Ui.container "div"

      , model.shippingDestination
        |> Basics.toString
        |> Ui.textWrapper "code"
       :|> Ui.container "div"

      ]
        |> Component.Grid.equalColumns "is-7"
        |> Ui.Modifier.add "is-multiline"

  in
    [ ( checkboxCode
      , checkboxElement
      )
        |> View.Layout.example "Checkbox"

    , ( radioButtonsCode
      , radioButtonsElement
      )
        |> View.Layout.example "Radio Buttons"

    , ( dropdownCode
      , dropdownElement
      )
        |> View.Layout.example "Select Dropdown"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


indicators : Model.Model -> Ui.Element Msg.Msg
indicators model =
  let
    tagCode =
      "\"2.7.1\"\n  |> Ui.Indicator.tag"

    tagElement =
      "2.7.1"
        |> Ui.Indicator.tag

    notificationCode =
      "\"You are awesome.\"\n  |> Ui.Indicator.notification\n  |> Ui.Indicator.withDelete Msg.HideNotification"


    notificationElement =
      "You are awesome."
        |> Ui.Indicator.notification
        |> Ui.Indicator.withDelete Msg.HideNotification
        |> Ui.Modifier.conditional
          ( "is-invisible", model.notificationIsHidden )
       :|> Ui.container "div"
       :|> Component.Grid.equalColumns "is-7"

    progressCode =
      "65\n  |> Ui.Indicator.progress"

    progressElement =
      65
        |> Ui.Indicator.progress
       :|> Ui.container "div"
       :|> Component.Grid.equalColumns "is-7"

  in
    [ ( tagCode
      , tagElement
      )
        |> View.Layout.example "Tag"

    , ( notificationCode
      , notificationElement
      )
        |> View.Layout.example "Notification"

    , ( progressCode
      , progressElement
      )
        |> View.Layout.example "Progress Bar"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section
