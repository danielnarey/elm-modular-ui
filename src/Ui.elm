module Ui exposing
  ( Element
  , leaf, textWrapper, container
  , addClass, setId
  , render
  )

{-|

# Ui.Element Records
@docs Element

# Generic Constructors
@docs leaf, textWrapper, container

## Adding a class
@docs addClass

## Setting an element's id
@docs setId

# Rendering to VirtualDom
@docs render

# Package Modules

## Interactive Elements
- [Ui.Button](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Button)
- [Ui.Input](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Input)
- [Ui.Selector](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Selector)
- [Ui.Indicator](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Indicator)

## Content Elements
- [Ui.Text](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Text)
- [Ui.Heading](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Heading)
- [Ui.Icon](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Icon)
- [Ui.Media](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Media)
- [Ui.Source](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Source)

## Customizing Appearance and Interaction
- [Ui.Modifier](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Modifier)
- [Ui.Attribute](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Attribute)
- [Ui.Action](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Action)
- [Ui.Style](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Style)

-}

import VirtualDom
import Dom
import Dom.Element


{-| A record containing all of the data needed to construct an HTML node (via
`VirtualDom.Node`). This is an alias for `Dom.Element` in
[danielnarey/elm-semantic-dom](http://package.elm-lang.org/packages/danielnarey/elm-semantic-dom/latest/Dom#Element).

By using a record to temporarily store data about a node, we can partially
construct that node with some data, but delay building it until all of the data
has been assembled. In this way, all of a node's data is available to be
modified until it is either placed in a container element or passed as an
argument to the `Ui.render` function.

-}
type alias Element msg =
  Dom.Element msg


{-| Construct an element with no children

    Ui.leaf "hr"
      |> Ui.render

    --> <hr>

-}
leaf : String -> Element msg
leaf =
  Dom.Element.leaf


{-| Construct an element with a text node as its only child

    "Time to make the donuts!"
      |> Ui.textWrapper "p"
      |> Ui.render

    --> <p>Time to make the donuts!</p>

-}
textWrapper : String -> String -> Element msg
textWrapper =
  Dom.Element.textWrapper


{-| Construct an element with some children

    [ "Time to make the donuts!"
      |> Ui.textWrapper "p"
    ]
      |> Ui.container "div"
      |> Ui.render

    --> <div>
    --    <p>Time to make the donuts!</p>
    --  </div>

-}
container : String -> List (Element msg) -> Element msg
container =
  Dom.Element.container


{-| Add an element, component, or layout class when using a generic constructor

    "This text is in a box."
      |> Ui.textWrapper "p"
      |> Ui.addClass "box"

To maintain a consistent pattern, use
[Ui.Modifier.add](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Modifier#add)
or
[Ui.Modifier.addList](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Modifier#addList)
to append additional modifier classes. Note, however, that this is just
semantic sugar — `Ui.addClass` and `Ui.Modifier.add` are equivalent (both are
aliases for
[Dom.Element.addClass](http://package.elm-lang.org/packages/danielnarey/elm-semantic-dom/latest/Dom-Element#addClass)).

    "This text is in a box."
      |> Ui.textWrapper "p"
      |> Ui.addClass "box"
      |> Ui.Modifier.addList
        [ "is-size-3"
        , "has-text-weight-bold"
        , "has-text-centered"
        ]

-}
addClass : String -> Element msg -> Element msg
addClass =
  Dom.Element.addClass


{-| Set the `id` field on a `Ui.Element` record, the value of which will be
assigned to the element's *id* attribute upon rendering

    myMenu
      |> Ui.setId "sidebar-menu"

-}
setId : String -> Element msg -> Element msg
setId =
  Dom.Element.setId


{-| Render an element record to HTML (via the native JavaScript implementation
backing
[elm-lang/virtual-dom](http://package.elm-lang.org/packages/elm-lang/virtual-dom/latest/VirtualDom#node)).

__Note that you only need to call this function once — rendering the root node
of a tree renders all of its children.__

-}
render : Element msg -> VirtualDom.Node msg
render =
  Dom.Element.toNode
