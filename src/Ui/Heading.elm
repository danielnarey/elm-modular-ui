module Ui.Heading exposing
  ( title, subtitle )

{-|

# Content Element: Heading
Using the *.title* and *.subtitle* element classes gives greater control over
the ranking and appearance of headings by making HTML markup independent of
font-size rendering. With Bulma CSS, size modifier classes can be used to set
different title and subtitle sizes for different parts of a page.

@docs title, subtitle

-}


-- Frameworks
import Ui
import Dom.Element


{-| Construct a title heading

    "My Title"
      |> Ui.Heading.title "h1"
      |> Ui.Modifier.add "is-4"
      |> Ui.render

    --> <h1 class="title is-4">My Title</h1>

+ __HTML tag__: variable (use `<h1>` to `<h6>`, or `<p>`)
+ __ARIA role__: default
+ __Element class__: *.title*
+ __Available modifiers__: [size](http://bulma.io/documentation/elements/title/#sizes),
[spacing](http://bulma.io/documentation/elements/title/#sizes),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/title/

-}
title : String -> String -> Ui.Element msg
title htmlTag =
  Dom.Element.textWrapper htmlTag
    >> Dom.Element.withClasses
      [ "title" ]


{-| Construct a subtitle heading

    "My Subtitle"
      |> Ui.Element.subtitle "h2"
      |> Ui.Modifier.add "is-6"
      |> Ui.render

    --> <h2 class="subtitle is-6">My Subtitle</h2>

+ __HTML tag__: variable (use `<h2>` to `<h6>`, or `<p>`)
+ __ARIA role__: default
+ __Element class__: *.subtitle*
+ __Available modifiers__: [size](http://bulma.io/documentation/elements/title/#sizes),
[spacing](http://bulma.io/documentation/elements/title/#sizes),
[color](http://bulma.io/documentation/modifiers/typography-helpers/#colors),
[alignment](http://bulma.io/documentation/modifiers/typography-helpers/#alignment),
[weight](http://bulma.io/documentation/modifiers/typography-helpers/#text-weight),
[character style](http://bulma.io/documentation/modifiers/typography-helpers/#text-transformation)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/title/

-}
subtitle : String -> String -> Ui.Element msg
subtitle htmlTag =
  Dom.Element.textWrapper htmlTag
    >> Dom.Element.withClasses
      [ "subtitle" ]
