module Ui.Input exposing
  ( string, textArea
  , labelFor
  , int, float, custom
  , intSlider, floatSlider, colorPicker
  )


{-|

# Interactive Element: Input
In an Elm program, captured user input is handled by the program's update
function. The constructors in this module automate part of the set-up for
capturing input and, optionally, decoding string values into numeric or custom
types. These functions also provide built-in web accessibility features and, for
text and numeric fields, default styling via the *.input* Bulma element class.


# Basic Text Input
@docs string, textArea

## Labeling Input Fields
@docs labelFor

# Input Fields with Built-in Encoding/Decoding
@docs int, float, custom

# Native HTML5 Widgets
@docs intSlider, floatSlider, colorPicker

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
import Json.Encode


{-| Construct an input field to capture a `String`

+ The `id` argument is a unique integer used to generate an *id* attribute,
which is required to implement some web accessibility features. If the integer
is 3, the *id* attribute will be "input-3". Use the `labelFor` constructor
below to match a label to an input id.
+ The `placeholder` will be displayed in the input field when its *value*
attribute is empty. This may be used to suggest to the user the type of input
requested, but for accessibilty reasons, it should not substitute for
a label.
+ The `value` sets the input element's *value* attribute. It should be a
record field in your Elm program's model that gets updated whenever the
user enters input. See the example below.


*Example:*

    --- MODEL ---

    type alias Model =
      { userName : String
      , ...
      }

    --- UPDATE ---

    type Msg
      = UpdateUserName String
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateUserName value ->
          { model
          | userName = value
          }

        ...

    --- VIEW ---

    { id = 1
    , placeholder = "first last"
    , value = model.userName
    }
      |> Ui.Input.string UpdateUserName


+ __HTML tag__: `<input type="text">`
+ __ARIA role__: *textbox* (default)
+ __Element class__: *.input*
+ __Available modifiers__: [color](https://bulma.io/documentation/form/input/#colors),
[size](https://bulma.io/documentation/form/input/#sizes),
[style](https://bulma.io/documentation/form/input/#styles)
[state](https://bulma.io/documentation/form/input/#states),
[icons](https://bulma.io/documentation/form/input/#with-font-awesome-icons)
+ __Bulma CSS reference__: https://bulma.io/documentation/form/input/

-}
string : (String -> msg) -> { id : Int, placeholder : String, value : String } -> Ui.Element msg
string token args =
  Dom.Element.leaf "input"
    |> Dom.Element.withAttributes
      [ "type"
        |> Dom.Property.string "text"

      , "placeholder"
        |> Dom.Property.string args.placeholder

      , "value"
        |> Dom.Property.string args.value

      , "input"
        |> Dom.Event.capture token

      ]

    |> Dom.Element.withClasses
      [ "input" ]

    |> Dom.Element.setId
      ( args.id
        |> Basics.toString
        |> String.append "input-"

      )


{-| Construct a multi-line input field to capture a longer string of text

    { id = 2
    , placeholder = "Tell us about yourself."
    , value = model.userBio
    , rows = Just 10
    }
      |> Ui.Input.textArea UpdateUserBio


+ __HTML tag__: `<textarea>`
+ __ARIA role__: *textbox* (default)
+ __Element class__: *.textarea*
+ __Available modifiers__: [color](https://bulma.io/documentation/form/textarea/#colors),
[size](https://bulma.io/documentation/form/textarea/#sizes),
[state](https://bulma.io/documentation/form/textarea/#states)
+ __Bulma CSS reference__: https://bulma.io/documentation/form/textarea/

-}
textArea : (String -> msg) -> { id : Int, placeholder : String, value : String, rows : Maybe Int } -> Ui.Element msg
textArea token args =
  Dom.Element.leaf "textarea"
    |> Dom.Element.withAttributes
      [ "placeholder"
        |> Dom.Property.string args.placeholder

      , "value"
        |> Dom.Property.string args.value

      , "input"
        |> Dom.Event.capture token

      ]

    |>
      ( case args.rows of
        Just numRows ->
          Dom.Element.addAttribute
            ( "rows"
              |> Dom.Property.int numRows
            )

        Nothing ->
          identity

      )

    |> Dom.Element.withClasses
      [ "textarea" ]

    |> Dom.Element.setId
      ( args.id
        |> toString
        |> String.append "input-"
      )


{-| Construct a label for an input field by giving the label text and the id
number of the input element to which it applies

    "Enter your name"
      |> Ui.Input.labelFor 1

-}
labelFor : Int -> String -> Ui.Element msg
labelFor id =
  Dom.Element.textWrapper "label"
    >> Dom.Element.withAttributes
      [ "for"
        |> Dom.Attribute.string
          ( id
            |> Basics.toString
            |> String.append "input-"
          )

      ]

    >> Dom.Element.withClasses
      [ "label" ]


{-| Construct an input field to capture an `Int`

+ This constructor automates some aspects of error handling with numeric
input. It allows you to treat the numeric input/output as a `Maybe Int` value in
your Elm program's model, update, and view; conversion to and from a string is
built into the constructor.
+ Valid integer input triggers a model update on an *input* event; invalid
integer input fails to update on *input*, but will trigger an update of the
value to `Nothing` on a *change* event (i.e., when the input element loses
focus).
+ The `minMaxStep` argument sets the HTML5 *min*, *max*, and *step* attributes,
which are used for native browser implementations of increment/decrement buttons
or a spinbox for selecting a value in the given range.

*Example:*


    --- MODEL ---

    type alias Model =
      { userName : String
      , userAge : Maybe Int
      }

    --- UPDATE ---

    type Msg
      = UpdateUserAge (Maybe Int)
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateUserAge value ->
          { model
          | userAge = value
          }

        ...

    --- VIEW ---

    { id = 3
    , placeholder = "35"
    , value = model.userAge
    , minMaxStep = (0, 117, 1)
    }
      |> Ui.Input.int UpdateUserAge


+ __HTML tag__: `<input type="number">`
+ __ARIA role__: *spinbutton* (default)
+ __Element class__: *.input*
+ __Available modifiers__: [color](https://bulma.io/documentation/form/input/#colors),
[size](https://bulma.io/documentation/form/input/#sizes),
[style](https://bulma.io/documentation/form/input/#styles)
[state](https://bulma.io/documentation/form/input/#states),
[icons](https://bulma.io/documentation/form/input/#with-font-awesome-icons)
+ __Bulma CSS reference__: https://bulma.io/documentation/form/input/

-}
int : (Maybe Int -> msg) -> { id : Int, placeholder : String, value : Maybe Int, minMaxStep : (Int, Int, Int) } -> Ui.Element msg
int token args =
  let
    displayedValue =
      args.value
        |> Maybe.map Basics.toString
        |> Maybe.withDefault ""

    captureString =
      Json.Decode.string
        |> Json.Decode.at
          [ "target"
          , "value"
          ]

    failOnErr result =
      case result of
        Ok int ->
          Just int
            |> token
            |> Json.Decode.succeed

        _ ->
          "not an Int"
            |> Json.Decode.fail

    nothingOnErr =
      Result.toMaybe
        >> token
        >> Json.Decode.succeed

  in
    Dom.Element.leaf "input"
      |> Dom.Element.withAttributes
        [ "type"
          |> Dom.Property.string "number"

        , "value"
          |> Dom.Property.string displayedValue

        , "placeholder"
          |> Dom.Property.string args.placeholder

        , "min"
          |> Dom.Property.int
            ( args.minMaxStep
              |> ( \(a,b,c) -> a )

            )

        , "max"
          |> Dom.Property.int
            ( args.minMaxStep
              |> ( \(a,b,c) -> b )

            )

        , "step"
          |> Dom.Property.int
            ( args.minMaxStep
              |> ( \(a,b,c) -> c )

            )

        , "input"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( String.toInt >> failOnErr )

            )

        , "change"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( String.toInt >> nothingOnErr )

            )

        ]

      |> Dom.Element.withClasses
        [ "input" ]

      |> Dom.Element.setId
        ( args.id
          |> toString
          |> String.append "input-"
        )


{-| Construct an input field to capture a `Float`

+ This constructor automates some aspects of error handling with numeric
input. It allows you to treat the numeric input/output as a `Maybe Float` value
in your Elm program's model, update, and view; conversion to and from a string
is built into the constructor.
+ Valid decimal input triggers a model update on an *input* event; invalid
decimal input fails to update on *input*, but will trigger an update of the
value to `Nothing` on a *change* event (i.e., when the input element loses
focus).
+ The `minMaxStep` argument sets the HTML5 *min*, *max*, and *step* attributes,
which are used for native browser implementations of increment/decrement buttons
or a spinbox for selecting a value in the given range.

*Example:*


    --- MODEL ---

    type alias Model =
      { brightness : Maybe Float
      , ...
      }

    --- UPDATE ---

    type Msg
      = AdjustBrightness (Maybe Float)
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        AdjustBrightness value ->
          { model
          | brightness = value
          }

        ...

    --- VIEW ---

    { id = 4
    , placeholder = ""
    , value = model.brightness
    , minMaxStep = (0, 1, 0.01)
    }
      |> Ui.Input.float AdjustBrightness


+ __HTML tag__: `<input type="number">`
+ __ARIA role__: *spinbutton* (default)
+ __Element class__: *.input*
+ __Available modifiers__: [color](https://bulma.io/documentation/form/input/#colors),
[size](https://bulma.io/documentation/form/input/#sizes),
[style](https://bulma.io/documentation/form/input/#styles)
[state](https://bulma.io/documentation/form/input/#states),
[icons](https://bulma.io/documentation/form/input/#with-font-awesome-icons)
+ __Bulma CSS reference__: https://bulma.io/documentation/form/input/

-}
float : (Maybe Float -> msg) -> { id : Int, placeholder : String, value : Maybe Float, minMaxStep : (Float, Float, Float) } -> Ui.Element msg
float token args =
  let
    displayedValue =
      args.value
        |> Maybe.map Basics.toString
        |> Maybe.withDefault ""

    captureString =
      Json.Decode.string
        |> Json.Decode.at
          [ "target"
          , "value"
          ]

    failOnIncompleteOrInvalid input =
      case (input == "0.") of
        True ->
          "ends with decimal point"
            |> Json.Decode.fail

        False ->
          input
            |> String.toFloat
            |>
              ( \result ->
                case result of
                  Ok float ->
                    Just float
                      |> token
                      |> Json.Decode.succeed

                  _ ->
                    "not a Float"
                      |> Json.Decode.fail

              )

    nothingOnErr =
      Result.toMaybe
        >> token
        >> Json.Decode.succeed

  in
    Dom.Element.leaf "input"
      |> Dom.Element.withAttributes
        [ "type"
          |> Dom.Property.string "number"

        , "value"
          |> Dom.Property.string displayedValue

        , "placeholder"
          |> Dom.Property.string args.placeholder

        , "min"
          |> Dom.Property.float
            ( args.minMaxStep
              |> ( \(a,b,c) -> a )
            )

        , "max"
          |> Dom.Property.float
            ( args.minMaxStep
              |> ( \(a,b,c) -> b )
            )

        , "step"
          |> Dom.Property.float
            ( args.minMaxStep
              |> ( \(a,b,c) -> c )
            )

        , "input"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen failOnIncompleteOrInvalid
            )

        , "change"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( String.toFloat >> nothingOnErr )
            )

        ]

      |> Dom.Element.withClasses
        [ "input" ]

      |> Dom.Element.setId
        ( args.id
          |> toString
          |> String.append "input-"
        )


{-| Construct an input field to capture a custom value

+ This constructor automates some aspects of error handling with custom Elm
types. It allows you to treat the input/output value as a `Maybe` *whatever*
in your Elm program's model, update, and view; conversion to and from a string
is built into the constructor using the encoder and decoder functions given as
arguments.
+ Valid input (where the encoder returns an `Ok` value) triggers a model update
on an *input* event; invalid integer input fails to update on *input*, but will
trigger an update of the value to `Nothing` on a *change* event (i.e., when the
input element loses focus).

*Example*


    --- MODEL ---

    type alias Model =
      { backgroundColor : Maybe Color
      , ...
      }

    --- UPDATE ---

    type Msg
      = UpdateBackgroundColor (Maybe Color)
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateBackgroundColor value ->
          { model
          | backgroundColor = value
          }

        ...

    --- VIEW ---

    { id = 5
    , placeholder = "#FFFFFF"
    , value = model.backgroundColor
    , encoder = ColorMath.Hex.toColor
    , decoder = ColorMath.Hex.fromColor >> Ok
    }
      |> Ui.Input.custom UpdateBackgroundColor


+ __HTML tag__: `<input type="text">`
+ __ARIA role__: *textbox* (default)
+ __Element class__: *.input*
+ __Available modifiers__: [color](https://bulma.io/documentation/form/input/#colors),
[size](https://bulma.io/documentation/form/input/#sizes),
[style](https://bulma.io/documentation/form/input/#styles)
[state](https://bulma.io/documentation/form/input/#states),
[icons](https://bulma.io/documentation/form/input/#with-font-awesome-icons)
+ __Bulma CSS reference__: https://bulma.io/documentation/form/input/

-}
custom : (Maybe a -> msg) -> { id : Int, placeholder : String, value : Maybe a, encoder : (String -> Result x a), decoder : (a -> Result x String) } -> Ui.Element msg
custom token args =
  let
    displayedValue =
      args.value
        |> Maybe.andThen (args.decoder >> Result.toMaybe)
        |> Maybe.withDefault ""

    captureString =
      Json.Decode.string
        |> Json.Decode.at
          [ "target"
          , "value"
          ]

    failOnErr result =
      case result of
        Ok customValue ->
          Just customValue
            |> token
            |> Json.Decode.succeed

        _ ->
          "not vaild input"
            |> Json.Decode.fail

    nothingOnErr =
      Result.toMaybe
        >> token
        >> Json.Decode.succeed

  in
    Dom.Element.leaf "input"
      |> Dom.Element.withAttributes
        [ "type"
          |> Dom.Property.string "text"

        , "value"
          |> Dom.Property.string displayedValue

        , "placeholder"
          |> Dom.Property.string args.placeholder

        , "input"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( args.encoder >> failOnErr )
            )

        , "change"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( args.encoder >> nothingOnErr )
            )

        ]

      |> Dom.Element.withClasses
        [ "input" ]

      |> Dom.Element.setId
        ( args.id
          |> toString
          |> String.append "input-"
        )


{-| Construct an HTML5 slider widget to capture an `Int`

+ Unlike numeric input fields, sliders must always have a value, so the
input/output type is an `Int`, not a `Maybe Int`.
+ The `minMaxStep` argument sets the HTML5 *min*, *max*, and *step* attributes,
which are used for native browser implementations of the slider widget.

*Example:*


    --- MODEL ---

    type alias Model =
      { starRating : Int
      , ..
      }

    initial : Model
    initial =
      { starRating = 3
      , ..
      }

    --- UPDATE ---

    type Msg
      = UpdateStarRating Int
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateStarRating value ->
          { model
          | starRating = value
          }

        ...

    --- VIEW ---

    { id = 6
    , value = model.starRating
    , minMaxStep = (1, 5, 1)
    }
      |> Ui.Input.intSlider UpdateStarRating


+ __HTML tag__: `<input type="range">`
+ __ARIA role__: *slider* (default)
+ __Element class__: *.slider*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.slider* is not a Bulma element class)

-}
intSlider : (Int -> msg) -> { id : Int, value : Int, minMaxStep : (Int, Int, Int) } -> Ui.Element msg
intSlider token args =
  let
    captureString =
      Json.Decode.string
        |> Json.Decode.at
          [ "target"
          , "value"
          ]

    failOnErr result =
      case result of
        Ok int ->
          int
            |> token
            |> Json.Decode.succeed

        _ ->
          "not an Int"
            |> Json.Decode.fail

  in
    Dom.Element.leaf "input"
      |> Dom.Element.withAttributes
        [ "type"
          |> Dom.Property.string "range"

        , "value"
          |> Dom.Property.string
            ( args.value
              |> Basics.toString
            )

        , "min"
          |> Dom.Property.int
            ( args.minMaxStep
              |> ( \(a,b,c) -> a )
            )

        , "max"
          |> Dom.Property.int
            ( args.minMaxStep
              |> ( \(a,b,c) -> b )
            )

        , "step"
          |> Dom.Property.int
            ( args.minMaxStep
              |> ( \(a,b,c) -> c )
            )

        , "input"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( String.toInt >> failOnErr )
            )

        ]

      |> Dom.Element.withClasses
        [ "slider" ]

      |> Dom.Element.setId
        ( args.id
          |> toString
          |> String.append "input-"
        )


{-| Construct an HTML5 slider widget to capture a `Float`

+ Unlike numeric input fields, sliders must always have a value, so the
input/output type is a `Float`, not a `Maybe Float`.
+ The `minMaxStep` argument sets the HTML5 *min*, *max*, and *step* attributes,
which are used for native browser implementations of the slider widget.

*Example:*


    --- MODEL ---

    type alias Model =
      { brightness : Float
      , ..
      }

    initial : Model
    initial =
      { brightness = 0.5
      , ..
      }

    --- UPDATE ---

    type Msg
      = UpdateBrightness Int
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateBrightness value ->
          { model
          | brightness = value
          }

        ...

    --- VIEW ---

    { id = 7
    , value = model.brightness
    , minMaxStep = (0, 1, 0.01)
    }
      |> Ui.Input.floatSlider UpdateBrightness


+ __HTML tag__: `<input type="range">`
+ __ARIA role__: *slider* (default)
+ __Element class__: *.slider*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.slider* is not a Bulma element class)

-}
floatSlider : (Float -> msg) -> { id : Int, value : Float, minMaxStep : (Float, Float, Float) } -> Ui.Element msg
floatSlider token args =
  let
    captureString =
      Json.Decode.string
        |> Json.Decode.at ["target", "value"]

    failOnErr result =
      case result of
        Ok float ->
          float
            |> token
            |> Json.Decode.succeed

        _ ->
          "not a Float"
            |> Json.Decode.fail

  in
    Dom.Element.leaf "input"
      |> Dom.Element.withAttributes
        [ "type"
          |> Dom.Property.string "range"

        , "value"
          |> Dom.Property.string
            ( args.value
              |> Basics.toString
            )

        , "min"
          |> Dom.Property.float
            ( args.minMaxStep
              |> ( \(a,b,c) -> a )
            )

        , "max"
          |> Dom.Property.float
            ( args.minMaxStep
              |> ( \(a,b,c) -> b )
            )

        , "step"
          |> Dom.Property.float
            ( args.minMaxStep
              |> ( \(a,b,c) -> c )
            )

        , "input"
          |> Dom.Event.custom
            ( captureString
              |> Json.Decode.andThen
                ( String.toFloat >> failOnErr )
            )

        ]

      |> Dom.Element.withClasses
        [ "slider" ]

      |> Dom.Element.setId
        ( args.id
          |> toString
          |> String.append "input-"
        )


{-| Construct an HTML5 color picker widget to capture a hexadecimal color code

+ The input/output value of the color picker widget is a hexadecimal string
representing an RGB color encoding. This constructor does not implement any
error handling for hex codes.

*Example:*


    --- MODEL ---

    type alias model =
      { backgroundColor : String
      , ...
      }

    --- UPDATE ---

    type Msg
      = UpdateTextColor String
      | ...

    update : Msg -> Model -> Model
    update msg model =
      case msg of
        UpdateTextColor value ->
          { model
          | textColor = value
          }

        ...

    --- VIEW ---

    { id = 8
    , value = model.textColor
    }
      |> Ui.Input.colorPicker UpdateTextColor


+ __HTML tag__: `<input type="color">`
+ __ARIA role__: none
+ __Element class__: *.color-picker*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.color-picker* is not a Bulma element class)

-}
colorPicker : (String -> msg) -> { id : Int, value : String } -> Ui.Element msg
colorPicker token args =
  Dom.Element.leaf "input"
    |> Dom.Element.withAttributes
      [ "type"
        |> Dom.Property.string "color"

      , "value"
        |> Dom.Property.string args.value

      , "input"
        |> Dom.Event.capture token

      ]

    |> Dom.Element.withClasses
      [ "color-picker" ]

    |> Dom.Element.setId
      ( args.id
        |> toString
        |> String.append "input-"
      )
