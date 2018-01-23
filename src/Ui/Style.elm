module Ui.Style exposing
  ( add, addList
  , color, backgroundColor
  , border, borderRadius, boxShadow
  )


{-|

# Customizing UI Elements: Style Modifications
In the Modular UI package, element constructors apply Bulma CSS classes
automatically in order to generate default styling when `bulma.css` is loaded as
an external resource. If you are using Bulma, look and feel of standard UI
elements and components can be modified by
[customizing variables in Sass](https://bulma.io/documentation/overview/customize/)
and recompiling the Bulma source files to CSS. The functions in this module
may be used to where necessary to override default styling or further
customize the appearance and behavior of individual elements and components. In
general, it is preferable to change defaults rather than overriding them so as
to avoid redundancies and performance lags. (See
[below](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/1.0.0/Ui-Style#discussion-are-there-performance-costs-to-setting-style-properties-on-individual-elements-)
for further discussion of performance issues related to setting styles on
individual elements).

## Generic functions for adding style modifications
@docs add, addList

## Helpers for common style modifications
@docs color, backgroundColor, border, borderRadius, boxShadow


## Discussion: Are there performance costs to setting style properties on individual elements?

__Short answer:__

Only when many elements in your document have style properties in common that
could be
[rendered more efficiently](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model#css_object_model_cssom)
by defining CSS classes.

__Long answer:__

For historical and organizational reasons, standard practice in web development
has been to separate style rules from content markup by loading external CSS
resources rather than inlining style declarations in HTML. While there may be
benefits to performance and maintainability when style rules are defined for
classes rather than individual elements, loading external CSS resources
[blocks page rendering](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css),
so in some cases there is a
[performance justification](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
for inserting style declarations into markup.

The
[preferred way](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery#example)
to include CSS within standard HTML markup is to insert a `<style>` tag in the
document's `<head>`, but this may result in slower page loads if there is a
large chunk of CSS to parse, so the `<style>` tag should be reserved for
critical styling of above-the-fold content.

Using the HTML *style* attribute to set CSS properties on individual elements is
[presently discouraged](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery#CSSattributes)
for the sake of maintainability, but also because inline styles in HTML markup
are blocked where
[Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy)
is invoked.

However, when working in a compile-to-JavaScript framework like Elm, these
concerns seem not to apply. When you set an element's style attribute in an Elm
program, the styling is part of an external script, not part of the HTML source.
This means that styles applied to individual elements in an Elm program's view
code will not be blocked when Content Security Policy is invoked (unless your
entire Elm script is blocked, but there is a
[simple workaround](https://mixandgo.com/blog/writing-a-chrome-extension-with-elm#security-policy)
for that).

As for maintainability, a functional langauge like Elm arguably has
advantages over a CSS preprocessor like Sass or Less because of the absence of
global variables in funcitonal languages. Global variables can make debugging,
refactoring, or changing behavior more time consuming because of the effort
involved in determining where in the codebase a particular value has been
defined. Elm allows the programmer to generate functional style rules that can
be passed to view functions as named variables, combined with one another like
mixins, or generated dynamically given input parameters. The only downside of
using Elm to maintain styles is that any preprocessing of style variables has to
be done on-the-fly when the script is loaded in the browser, but that extra
processing time should be weighted against the time it would take to parse and
render external CSS.

All of that said, working with an existing CSS framework can greatly simplify
the user-interface design process, which is why I have incorporated Bulma
classes into Modular UI. My recommendation is to use classes defined in external
CSS for basic styling of standard UI elements and components, and then to
customize the look and behavior of individual elements/components by setting
their *style* attributes in Elm. For maintainability, it is helpful to define
style variables in a separate module and then to import those named functions
into your view module(s). This approach maintains a "separation of concerns"
because style variables and rules are just inputs to view functions, and they
can be modified without changing any of your other view code.

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Property
import Dom.Attribute
import Dom.Style
-- Core
import Color exposing (Color)


{-| Add a single style declaration to a UI element. The first argument in the
tuple gives the CSS property name, and the second argument gives its value as a
string.

    myNotification
      |> Ui.Style.add ("display", "none")

-}
add : (String, String) -> Ui.Element msg -> Ui.Element msg
add keyValue =
  [ keyValue ]
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


{-| Add a list of style declarations to a UI element

    myDiv
      |> Ui.Style.addList
        [ ("padding-top", "10px")
        , ("margin-bottom", "20px")
        ]

-}
addList : List (String, String) -> Ui.Element msg -> Ui.Element msg
addList keyValueList =
  keyValueList
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


{-| Set the *color* CSS property on an element

    blue =
      Color.hsl (degrees 233) 0.5 0.5

    myDiv
      |> Ui.Style.color blue

-}
color : Color -> Ui.Element msg -> Ui.Element msg
color colorValue =
  [ ( "color"
    , colorValue
      |> toRgbaString

    )

  ]
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


{-| Set the *background-color* CSS property on an element

    pinkish =
      Color.hsl (degrees 331) 0.4 0.8

    myDiv
      |> Ui.Style.color pinkish

-}
backgroundColor : Color -> Ui.Element msg -> Ui.Element msg
backgroundColor colorValue =
  [ ( "background-color"
    , colorValue
      |> toRgbaString

    )

  ]
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


{-| Set the *border* CSS property on an element by giving the width (in px),
the style, and the color

    blue =
      Color.hsl (degrees 233) 0.5 0.5

    myDiv
      |> Ui.Style.border (2, "solid", blue)

-}
border : (Int, String, Color) -> Ui.Element msg -> Ui.Element msg
border (borderWidth, borderStyle, borderColor)=
  [ ( "border"
    , [ borderWidth
        |> Basics.toString

      , "px "

      , borderStyle

      , " "

      , borderColor
        |> toRgbaString

      ]
        |> String.concat

    )

  ]
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


{-| Set the *border-radius* CSS property on an element by giving the radius
in px

    myDiv
      |> Ui.Style.borderRadius 8

-}
borderRadius : Int -> Ui.Element msg -> Ui.Element msg
borderRadius value =
  [ ( "border-radius"
    , value
      |> Basics.toString
      |> flip String.append "px"

    )

  ]
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


{-| Set the *box-shadow* CSS property on an element by giving the h- and
v-offsets, the blur, and the spread in px, the color as a `Color`, and a
boolean value to indicate whether the shadow should be inset



    myDiv
      |> Ui.Style.boxShadow
        { offset = (2, 3)
        , blur = 2
        , spread = 1
        , color = Color.black
        , inset = False
        }

-}
boxShadow : { offset : (Int, Int), blur : Int, spread : Int, color : Color, inset : Bool } -> Ui.Element msg -> Ui.Element msg
boxShadow args =
  [ ( "box-shadow"
    , [ args.offset
        |> Tuple.first
        |> Basics.toString

      , "px "

      , args.offset
          |> Tuple.second
          |> Basics.toString

      , "px "

      , args.blur
          |> Basics.toString

      , "px "

      , args.spread
          |> Basics.toString

      , "px "

      , args.color
        |> toRgbaString

      ]
        |> String.concat
        |>
          ( case args.inset of
            True ->
              flip String.append " inset"

            False ->
              identity

          )

    )

  ]
    |> Dom.Style.toProperty
    |> Dom.Element.addAttribute


--- INTERNAL ---

toRgbaString : Color -> String
toRgbaString colorValue =
  let
    rgba =
      colorValue
        |> Color.toRgb

    roundTo2 number =
      number * 100
        |> Basics.round
        |> Basics.toFloat
        |> Basics.flip (/) 100

  in
    [ "rgba("

    , rgba.red
      |> Basics.toString

    , ","

    , rgba.green
      |> Basics.toString

    , ","

    , rgba.blue
      |> Basics.toString

    , ","

    , rgba.alpha
      |> roundTo2
      |> Basics.toString

    , ")"

    ]
      |> String.concat
