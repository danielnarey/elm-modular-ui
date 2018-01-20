module Ui.Attribute exposing
  ( add, addList
  , title, hidden
  , role, ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaHidden
  )


{-|

# Customizing UI Elements: HTML Attributes
Web browsers and adaptive devices use attributes to apply default styling and
build interactive functionality into HTML markup. For example, adding a *title*
attribute to an element will cause browsers to display a tooltip with the title
value when the user hovers over that element. This module provides a compact but
flexible syntax for adding HTML attributes to UI elements.

## Generic functions for setting HTML attributes
@docs add, addList

## Helpers for common global attributes
@docs title, hidden

## Helpers for common ARIA attributes
@docs role, ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaHidden

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Property
import Dom.Attribute
-- Core
import VirtualDom


{-| Add a single attribute to a UI element. The first argument in the tuple
gives the attribute name. For the second argument in the tuple, use one of the
functions in
[Dom.Property](http://package.elm-lang.org/packages/danielnarey/elm-semantic-dom/latest/Dom-Property)
or
[Dom.Attribute](http://package.elm-lang.org/packages/danielnarey/elm-semantic-dom/latest/Dom-Attribute)
from *danielnarey/elm-semantic-dom* to specify how the attribute value should be
assigned (see the documentation in these modules).

    myPhoto
      |> Ui.Attribute.add
        ( "title", Dom.Property.string "My summer vaction" )

Alternatively, if it makes more sense to you, you could use the function this
way with the same result:

    myNavbar
      |> Ui.Attribute.add
        ( "My summer vaction"
        , Json.Encode.string
          >> VirtualDom.property "title"
        )

-}
add : (String, String -> VirtualDom.Property msg) -> Ui.Element msg -> Ui.Element msg
add (key, partial) =
  Dom.Element.addAttribute
    ( key
      |> partial
    )


{-| Add a list of attributes to a UI element

    myPhoto
      |> Ui.Attribute.addList
        [ ("title", Dom.Property.string "My summer vaction")
        , ("hidden", Dom.Property.bool True)
        ]

-}
addList : List (String, String -> VirtualDom.Property msg) -> Ui.Element msg -> Ui.Element msg
addList tupleList element =
  let
    toAttribute (key, partial) =
      key
        |> partial

    newAttributes =
      tupleList
        |> List.map toAttribute

  in
    { element
    | attributes =
        element.attributes ++ newAttributes
    }


{-| Convenience function to set the *title* property

    myPhoto
      |> Ui.Attribute.title "My summer vacation"

-}
title : String -> Ui.Element msg -> Ui.Element msg
title value =
  Dom.Element.addAttribute
    ( "title"
      |> Dom.Property.string value
    )


{-| Convenience function to set the *hidden* property

    myPhoto
      |> Ui.Attribute.hidden True

-}
hidden : Bool -> Ui.Element msg -> Ui.Element msg
hidden value =
  Dom.Element.addAttribute
    ( "hidden"
      |> Dom.Property.bool value
    )


{-| Convenience function to set the ARIA *role* attribute

    myElement
      |> Ui.Attribute.role "presentation"

-}
role : String -> Ui.Element msg -> Ui.Element msg
role value =
  Dom.Element.addAttribute
    ( "role"
      |> Dom.Attribute.string value
    )


{-| Convenience function to set the *aria-label* attribute

    myNavbar
      |> Ui.Attribute.ariaLabel "Main navigation"

-}
ariaLabel : String -> Ui.Element msg -> Ui.Element msg
ariaLabel value =
  Dom.Element.addAttribute
    ( "aria-label"
      |> Dom.Attribute.string value
    )


{-| Convenience function to set the *aria-labelledby* attribute

    myFigure
      |> Ui.Attribute.ariaLabelledBy "figure-caption-3"

-}
ariaLabelledBy : String -> Ui.Element msg -> Ui.Element msg
ariaLabelledBy value =
  Dom.Element.addAttribute
    ( "aria-labelledby"
      |> Dom.Attribute.string value
    )


{-| Convenience function to set the *aria-describedby* attribute

    myPhoto
      |> Ui.Attribute.ariaDescribedBy "article-section-5"

-}
ariaDescribedBy : String -> Ui.Element msg -> Ui.Element msg
ariaDescribedBy value =
  Dom.Element.addAttribute
    ( "aria-describedby"
      |> Dom.Attribute.string value
    )


{-| Convenience function to set `aria-hidden="true"`

    decorativeIcon
      |> Ui.Attribute.ariaHidden

-}
ariaHidden : Ui.Element msg -> Ui.Element msg
ariaHidden =
  Dom.Element.addAttribute
    ( "aria-hidden"
      |> Dom.Attribute.string "true"
    )
