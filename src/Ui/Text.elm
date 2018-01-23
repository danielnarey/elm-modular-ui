module Ui.Text exposing
  ( plain, link
  , light, semibold, bold, italic
  )

{-|

# Content Element: Text
This module contains helpers for assembling text content that may include links
and font style variations. It provides an alternative to Markdown syntax that
is still fairly concise, while offering more control over text appearance via
CSS modifier classes.

## Basic
@docs plain, link

## Typography Helpers
@docs italic, bold, semibold, light

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Property


{-| Construct plain inline text

    "Time to make the donuts!"
      |> Ui.Text.plain
      |> Ui.render

    --> <span>Time to make the donuts!</span>

+ __HTML tag__: `<span>`
+ __Element class__: none
+ __Available modifiers__: [size](http://bulma.io/documentation/modifiers/typography-helpers/#size),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/modifiers/typography-helpers/

-}
plain : String -> Ui.Element msg
plain =
  Dom.Element.textWrapper "span"


{-| Construct text that will link to some URI. The boolean argument indicates
whether the link should open in a new window.

    "Click here to download"
      |> Ui.Text.link ("http://example.com/files/myfile.pdf", True)
      |> Ui.render

    --> <a href="http://example.com/files/myfile.pdf" target="_blank">Click here to download</a>

+ __HTML tag__: `<a>`
+ __Element class__: none
+ __Available modifiers__: [size](http://bulma.io/documentation/modifiers/typography-helpers/#size),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/modifiers/typography-helpers/

-}
link : (String, Bool) -> String -> Ui.Element msg
link (path, newWindow) =
  let
    attrs =
      ( case newWindow of
        True ->
          [ "target"
            |> Dom.Property.string "_blank"
          ]

        False ->
          []

      )
        |> List.append
          [ "href"
            |> Dom.Property.string path
          ]

  in
    Dom.Element.textWrapper "a"
      >> Dom.Element.withAttributes attrs


-- Styling

{-| Construct text that will display as italic

    "Time to make the donuts!"
      |> Ui.Text.italic
      |> Ui.render

    --> <span class="is-italic">Time to make the donuts!</span>

+ __HTML tag__: `<span>`
+ __Element class__: none
+ __Modifier classes__: *.is-italic*
+ __Available modifiers__: [size](http://bulma.io/documentation/modifiers/typography-helpers/#size),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/modifiers/typography-helpers/

-}
italic : String -> Ui.Element msg
italic =
  Dom.Element.textWrapper "span"
    >> Dom.Element.withClasses
      [ "is-italic" ]


{-| Construct text that will display with a bold font-weight

    "Time to make the donuts!"
      |> Ui.Text.bold
      |> Ui.render

    --> <span class="has-text-weight-bold">Time to make the donuts!</span>

+ __HTML tag__: `<span>`
+ __Element class__: none
+ __Modifier classes__: *.has-text-weight-bold*
+ __Available modifiers__: [size](http://bulma.io/documentation/modifiers/typography-helpers/#size),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/modifiers/typography-helpers/

-}
bold : String -> Ui.Element msg
bold =
  Dom.Element.textWrapper "span"
    >> Dom.Element.withClasses
      [ "has-text-weight-bold" ]


{-| Construct text that will display with a semibold font-weight

    "Time to make the donuts!"
      |> Ui.Text.semibold
      |> Ui.render

    --> <span class="has-text-weight-semibold">Time to make the donuts!</span>

+ __HTML tag__: `<span>`
+ __Element class__: none
+ __Modifier classes__: *.has-text-weight-semibold*
+ __Available modifiers__: [size](http://bulma.io/documentation/modifiers/typography-helpers/#size),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/modifiers/typography-helpers/

-}
semibold : String -> Ui.Element msg
semibold =
  Dom.Element.textWrapper "span"
    >> Dom.Element.withClasses
      [ "has-text-weight-semibold" ]


{-| Construct text that will display with a light font-weight

    "Time to make the donuts!"
      |> Ui.Text.light
      |> Ui.render

    --> <span class="has-text-weight-light">Time to make the donuts!</span>

+ __HTML tag__: `<span>`
+ __Element class__: none
+ __Modifier classes__: *.has-text-weight-light*
+ __Available modifiers__: [size](http://bulma.io/documentation/modifiers/typography-helpers/#size),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/modifiers/typography-helpers/

-}
light : String -> Ui.Element msg
light =
  Dom.Element.textWrapper "span"
    >> Dom.Element.withClasses
      [ "has-text-weight-light" ]
