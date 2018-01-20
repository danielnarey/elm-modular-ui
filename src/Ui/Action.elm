module Ui.Action exposing
  ( add, addList
  , onClick, onMouseOver, onMouseOut
  , onKeyPress, onKeyDown, onKeyUp
  )

{-|

# Customizing UI Elements: User Actions
User actions are DOM events like clicks, key presses, and other mouse gestures
that do not capture text or numeric input. Handlers for user actions can be
added to any UI element using the functions in this module (for capturing input,
see
[Ui.Input](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Input)).

To add a user-action handler to an element, you must specify the
[event name](https://developer.mozilla.org/en-US/docs/Web/Events)
and the message that you want to be sent to your Elm program's update function
when the event is triggered. To handle keyboard actions, you will also have to
specify the
[key value](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
of interest, which you can do using one of the helper functions below.


## Generic functions for constructing user-action handlers
@docs add, addList

## Helpers for common mouse actions
@docs onClick, onMouseOver, onMouseOut

## Helpers for keyboard actions
@docs onKeyPress, onKeyDown, onKeyUp

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Event
-- Core
import Json.Decode


{-| Add a single action to a UI element

    myElement
      |> Ui.Action.add ("click", DoSomething)

-}
add : (String, msg) -> Ui.Element msg -> Ui.Element msg
add (key, msg) =
  Dom.Element.addAttribute
    ( key
      |> Dom.Event.action msg

    )


{-| Add a list of actions to a UI element

    myElement
      |> Ui.Action.addList
        [ ("mouseover", DoSomething)
        , ("click", DoSomethingElse)
        ]

-}
addList : List (String, msg) -> Ui.Element msg -> Ui.Element msg
addList tupleList element =
  let
    toAttribute (key, msg) =
      ( key
        |> Dom.Event.action msg

      )

    newAttributes =
      tupleList
        |> List.map toAttribute

  in
    { element
    | attributes =
        element.attributes ++ newAttributes
    }


{-| Convience function to construct a handler for a "click" event

    myElement
      |> Ui.Action.onClick DoSomething

-}
onClick : msg -> Ui.Element msg -> Ui.Element msg
onClick msg =
  Dom.Element.addAttribute
    ( "click"
      |> Dom.Event.action msg

    )


{-| Convience function to construct a handler for a "mouseover" event

    myElement
      |> Ui.Action.onMouseOver DoSomething

-}
onMouseOver : msg -> Ui.Element msg -> Ui.Element msg
onMouseOver msg =
  Dom.Element.addAttribute
    ( "mouseover"
      |> Dom.Event.action msg

    )


{-| Convience function to construct a handler for a "mouseout" event

    myElement
      |> Ui.Action.onMouseOut DoSomething

-}
onMouseOut : msg -> Ui.Element msg -> Ui.Element msg
onMouseOut msg =
  Dom.Element.addAttribute
    ( "mouseout"
      |> Dom.Event.action msg

    )


{-| Helper to construct a handler for a
[keydown](http://developer.mozilla.org/en-US/docs/Web/Events/keydown)
event, where you only want the message to be triggered by a particular key
being pressed down. The string argument gives the keyboard value of interest,
which must specified by one of the following:
  + If the pressed key has a printed representation, the returned value is a
  non-empty Unicode character string containing the printable representation of
  the key.
  + If the pressed key is a control or special character, the returned value
  is one of the pre-defined key values in this
  [table](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).

    myElement
      |> Ui.Action.onKeyDown ("ArrowUp", DoSomething)

-}
onKeyDown : (String, msg) -> Ui.Element msg -> Ui.Element msg
onKeyDown (value, msg) =
  let
    customDecoder =
      Json.Decode.string
        |> Json.Decode.field "key"
        |> Json.Decode.andThen
          ( \pressed ->
            case (pressed == value) of
              True ->
                msg
                  |> Json.Decode.succeed

              False ->
                "not " ++ value
                  |> Json.Decode.fail
          )

  in
    Dom.Element.addAttribute
      ( "keydown"
        |> Dom.Event.custom customDecoder

      )


{-| Helper to construct a handler for a
[keypress](http://developer.mozilla.org/en-US/docs/Web/Events/keypress)
event, where you only want the message to be triggered by a particular key
being in pressed position. The string argument gives the keyboard value of
interest, which must specified by one of the following:
  + If the pressed key has a printed representation, the returned value is a
  non-empty Unicode character string containing the printable representation of
  the key.
  + If the pressed key is a control or special character, the returned value
  is one of the pre-defined key values in this
  [table](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).

    myElement
      |> Ui.Action.onKeyPress ("Enter", DoSomething)

-}
onKeyPress : (String, msg) -> Ui.Element msg -> Ui.Element msg
onKeyPress (value, msg) =
  let
    customDecoder =
      Json.Decode.string
        |> Json.Decode.field "key"
        |> Json.Decode.andThen
          ( \pressed ->
            case (pressed == value) of
              True ->
                msg
                  |> Json.Decode.succeed

              False ->
                "not " ++ value
                  |> Json.Decode.fail

          )

  in
    Dom.Element.addAttribute
      ( "keypress"
        |> Dom.Event.custom customDecoder

      )


{-| Helper to construct a handler for a
[keyup](http://developer.mozilla.org/en-US/docs/Web/Events/keyup)
event, where you only want the message to be triggered by a particular key
being released from pressed position. The string argument gives the keyboard
value of interest, which must specified by one of the following:
  + If the pressed key has a printed representation, the returned value is a
  non-empty Unicode character string containing the printable representation of
  the key.
  + If the pressed key is a control or special character, the returned value
  is one of the pre-defined key values in this
  [table](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).

    myElement
      |> Ui.Action.onKeyUp ("ArrowUp", DoSomething)

-}
onKeyUp : (String, msg) -> Ui.Element msg -> Ui.Element msg
onKeyUp (value, msg) =
  let
    customDecoder =
      Json.Decode.string
        |> Json.Decode.field "key"
        |> Json.Decode.andThen
          ( \pressed ->
            case (pressed == value) of
              True ->
                msg
                  |> Json.Decode.succeed

              False ->
                "not " ++ value
                  |> Json.Decode.fail

          )

  in
    Dom.Element.addAttribute
      ( "keyup"
        |> Dom.Event.custom customDecoder

      )
