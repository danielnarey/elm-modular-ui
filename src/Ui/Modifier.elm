module Ui.Modifier exposing
  ( add, addList, conditional )

{-|

# Customizing UI Elements: Modifier Classes
Modifier classes change the style properties of UI elements, like color, size,
and spacing, and may add responsive styling via CSS media queries.
[Bulma CSS](http://bulma.io/documentation/modifiers/syntax/)
includes modifier classes for many elements, or you can define your own using a
custom stylesheet.

## Generic functions for adding modifiers
@docs add, addList, conditional

-}

import Ui
import Dom.Element


{-| Add a single modifier class to a UI element
-}
add : String -> Ui.Element msg -> Ui.Element msg
add =
  Dom.Element.addClass


{-| Add a list of modifier classes to a UI element
-}
addList : List String -> Ui.Element msg -> Ui.Element msg
addList modifiers element =
  { element
  | classes =
      element.classes ++ modifiers
  }


{-| Conditionally add a modifier class if the boolean argument is `True`
-}
conditional : (String, Bool) -> Ui.Element msg -> Ui.Element msg
conditional (modifier, test) =
  case test of
    True ->
      Dom.Element.addClass modifier

    False ->
      identity
