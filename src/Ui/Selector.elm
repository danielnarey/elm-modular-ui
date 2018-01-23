module Ui.Selector exposing
  ( checkbox, radioButtons, dropdown )


{-|

# Interactive Element: Selector
In an Elm program, option selection is handled by the program's update function.
The constructors in this module automate part of the set-up for capturing input
from selectors. They also provide built-in web accessibility features and
default styling via Bulma element classes.

@docs checkbox, radioButtons, dropdown

-}


-- Frameworks
import Ui
import Dom.Node
import Dom.Element
import Dom.Property
import Dom.Attribute
import Dom.Event
import Dom.Text
-- Core
import Json.Decode


{-| Construct a checkbox that sends update messages like a button

To make the checkbox work as intended, the update function should handle the
message by toggling a boolean value in the program's model (see example).

*Example:*


    --- MODEL ---

    type alias Model =
      { userAgrees : Bool
      , ...
      }

    initial : Model
    initial =
      { userAgrees = False
      , ...
      }

    --- UPDATE ---

    type Msg
      = ToggleUserAgrees
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        ToggleUserAgrees ->
          { model
          | userAgrees =
              model.userAgrees
                |> Basics.not
          }

        ...

    --- VIEW ---

    { id = 9
    , label = "I agree to the terms and conditions"
    , checked = model.userAgrees
    }
      |> Ui.Selector.checkbox ToggleUserAgrees


+ __HTML tag__: `<label>` > `<input type="checkbox">`
+ __ARIA role__: *checkbox* (default)
+ __Element class__: *.checkbox*
+ __Available modifiers__: none
+ __Bulma CSS reference__: https://bulma.io/documentation/form/checkbox/

-}
checkbox : msg -> { id : Int, label : String, checked : Bool } -> Ui.Element msg
checkbox msg args =
  let
    inputId =
      args.id
        |> toString
        |> String.append "input-"

  in
    [ Dom.Node.leaf "input"
      [ "type"
        |> Dom.Property.string "checkbox"

      , "checked"
        |> Dom.Property.bool args.checked

      , "click"
        |> Dom.Event.action msg

      , "id"
        |> Dom.Property.string inputId

      ]

    , args.label
      |> String.append " "
      |> Dom.Text.node

    ]
      |> Dom.Element.wrapNodes "label"
      |> Dom.Element.withAttributes
        [ "for"
          |> Dom.Attribute.string inputId

        ]

      |> Dom.Element.withClasses
        [ "checkbox" ]

      |> Dom.Element.setId
        ( inputId
          |> String.append "label-"

        )


{-| Construct a set of radio buttons that send update messages like regular
buttons, but include a value that identifies the user's selection

To make the radio buttons work as intended, the update function should handle
the message by updating a record field in the program's model to the user's
selection (see example).

*Example:*


    --- MODEL ---

    type EmailFrequency
      = Daily
      | Weekly
      | Monthly

    type alias Model =
      { emailFrequency : EmailFrequency
      , ...
      }

    --- UPDATE ---

    type Msg
      = UpdateEmailFrequency EmailFrequency
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateEmailFrequency option ->
          { model
          | emailFrequency = option
          }

        ...

    --- VIEW ---

    { id = 10
    , options =
      [ ("Every day", Daily)
      , ("Every week", Weekly)
      , ("Every month", Monthly)
      ]

    , selected = model.emailFrequency
    }
      |> Ui.Selector.radioButtons UpdateEmailFrequency


+ __HTML tag__: List of `label` > `<input type="radio">`
+ __ARIA role__: *radio* (default)
+ __Element class__: *.radio*
+ __Available modifiers__: none
+ __Bulma CSS reference__: https://bulma.io/documentation/form/radio/

-}
radioButtons : (a -> msg) -> { id : Int, options : List (String, a), selected : a } -> List (Ui.Element msg)
radioButtons token args =
  let
    groupId =
      args.id
        |> Basics.toString
        |> flip String.append "-"
        |> String.append "input-"

    toButton index (label, value) =
      [ Dom.Node.leaf "input"
        [ "type"
          |> Dom.Property.string "radio"

        , "checked"
          |> Dom.Property.bool (args.selected == value)

        , "click"
          |> Dom.Event.action (token value)

        , "id"
          |> Dom.Property.string
            ( index
              |> Basics.toString
              |> String.append groupId

            )

        ]

      , label
        |> String.append " "
        |> Dom.Text.node

      ]
        |> Dom.Element.wrapNodes "label"
        |> Dom.Element.withAttributes
          [ "for"
            |> Dom.Property.string
              ( index
                |> Basics.toString
                |> String.append groupId

              )

          ]

        |> Dom.Element.withClasses
          [ "radio" ]

        |> Dom.Element.setId
          ( index
            |> Basics.toString
            |> String.append groupId
            |> String.append "label-"

          )

  in
    args.options
      |> List.indexedMap toButton


{-| Construct a dropdown selector where selecting an option sends an update
message like a button, but also includes a value that identifies the user's
selection

To make the dropdown selector work as intended, the update function should
handle the message by updating a record field in the program's model to the
user's selection (see example).

*Example:*

    --- MODEL ---

    type ShippingDestination
      = UnitedStates
      | Canada
      | Global

    type alias Model =
      { shippingDestination : Maybe ShippingDestination
      , ...
      }

    initial : Model
    initial =
      { shippingDestination = Nothing
      , ...
      }

    --- UPDATE ---

    type Msg
      = UpdateShippingDestination (Maybe ShippingDestination)
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateShippingDestination value ->
          { model
          | shippingDestination = value
          }

        ...

    --- VIEW ---

    { id = 11
    , placeholder = "Select shipping destination"
    , options =
      [ ("United States", UnitedStates)
      , ("Canada", Canada)
      , ("Global", Global)
      ]

    , selected = model.shippingDestination
    }
      |> Ui.Selector.dropdown UpdateShippingDestination


+ __HTML tag__: `<select>`
+ __ARIA role__: *combobox* (default)
+ __Element class__: *.select*
+ __Available modifiers__: [color](https://bulma.io/documentation/form/select/#colors),
[style](https://bulma.io/documentation/form/select/#styles),
[size](https://bulma.io/documentation/form/select/#sizes),
[state](https://bulma.io/documentation/form/select/#select-state),
[icons](https://bulma.io/documentation/form/select/#input-with-icons)
+ __Bulma CSS reference__: https://bulma.io/documentation/form/select/

-}
dropdown : (Maybe a -> msg) -> { id : Int, placeholder : String, options : List (String, a), selected : Maybe a } -> Ui.Element msg
dropdown token args =
  let
    inputId =
      args.id
        |> toString
        |> String.append "input-"

    placeholder =
      args.placeholder
        |> Dom.Node.textWrapper "option"
          [ "disabled"
            |> Dom.Property.bool True

          , "selected"
            |> Dom.Property.bool True

          ]

    toOption (label, identifier) =
      label
        |> Dom.Node.textWrapper "option"
          [ "selected"
            |> Dom.Property.bool (args.selected == Just identifier)

          ]

    identifiers =
      args.options
        |> List.map Tuple.second

    getNth list n =
      case (n < 1) of
        True ->
          Nothing

        False ->
          list
            |> List.drop (n - 1)
            |> List.head

    selectedDecoder =
      Json.Decode.int
        |> Json.Decode.at
          [ "target"
          , "selectedIndex"
          ]

        |> Json.Decode.map
          ( getNth identifiers
            >> token
          )

  in
    [ args.options
      |> List.map toOption
      |> (::) placeholder
      |> Dom.Node.container "select"
        [ "change"
          |> Dom.Event.custom selectedDecoder

        , "id"
          |> Dom.Property.string inputId

        ]

    ]
      |> Dom.Element.wrapNodes "div"
      |> Dom.Element.withClasses
        [ "select" ]

      |> Dom.Element.setId
        ( inputId
          |> String.append "label-"

        )
