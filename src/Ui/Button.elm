module Ui.Button exposing
  ( action, navigation, delete )

{-|

# Interactive Element: Button
In an Elm program, button clicks are handled by the program's update function.
There are three button options in this module:
- `Ui.Button.action` is just a generic button. Use it in your view whenever
you want the update function to make something happen in the current view or
issue a command in response to a click.
- Use `Ui.Button.navigation` in specific cases where you want the update
function to replace the current view with a new page view. (*This is important
mainly for accessibility, so that the semantic role of the button is correctly
identified by its HTML tag, and it makes the most sense when your Elm program
is set up to handle page navigation internally*).
- With `Ui.Button.delete`, the button appears as a cicle with a cross, which
provides a compact control when you want the update function to hide an element,
remove data from a record field, or otherwise "delete" something.

@docs action, navigation, delete

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Attribute
import Dom.Event


{-| Construct an action button

    "Click Here"
      |> Ui.Button.action DoSomething
      |> Ui.render

    --> <button class="button">Click Here</button>

+ __HTML tag__: `<button>`
+ __ARIA role__: *button* (default)
+ __Element class__: *.button*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/button/#colors),
[size](http://bulma.io/documentation/elements/button/#sizes),
[style](http://bulma.io/documentation/elements/button/#styles),
[state](http://bulma.io/documentation/elements/button/#states)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/button/

-}
action : msg -> String -> Ui.Element msg
action msg label =
  label
    |> Dom.Element.textWrapper "button"
    |> Dom.Element.withClasses
      [ "button" ]

    |> Dom.Element.withAttributes
      [ "click"
        |> Dom.Event.action msg

      ]


{-| Construct a navigation button

    "Click Here"
      |> Ui.Button.navigation (NavTo Somewhere)
      |> Ui.render

    --> <a class="button">Click Here</a>

+ __HTML tag__: `<a>`
+ __ARIA role__: *link*
+ __Element class__: *.button*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/button/#colors),
[size](http://bulma.io/documentation/elements/button/#sizes),
[style](http://bulma.io/documentation/elements/button/#styles),
[state](http://bulma.io/documentation/elements/button/#states)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/button/

-}
navigation : msg -> String -> Ui.Element msg
navigation msg label =
  label
    |> Dom.Element.textWrapper "a"
    |> Dom.Element.withClasses
      [ "button" ]

    |> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "link"

      , "click"
        |> Dom.Event.action msg

      ]


{-| Construct a delete button

    Ui.Button.delete HideMessage
      |> Ui.render

    --> <button class="delete"></button>

+ __HTML tag__: `<button>`
+ __ARIA role__: *button* (default)
+ __Element class__: *.delete*
+ __Available modifiers__: [size](http://bulma.io/documentation/elements/delete/#sizes)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/delete/

-}
delete : msg -> Ui.Element msg
delete msg =
  "button"
    |> Dom.Element.leaf
    |> Dom.Element.withClasses
      [ "delete" ]

    |> Dom.Element.withAttributes
      [ "click"
        |> Dom.Event.action msg

      ]
