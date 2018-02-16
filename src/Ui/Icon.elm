module Ui.Icon exposing
  ( svg, fontAwesome4, material, ionicons, openIconic )

{-|

# Content Element: Icon
Icons are a common feature of modern UI design. This module provides helpers
for inserting SVG icons or making use of popular icon font character
collections. The Bulma *.icon* element class, which is applied to a wrapping
`<span>` element, provides default sizing and size modifiers to make it easy to
fit icons into the visual layout of your page.

## SVG
@docs svg

## Icon font characters
@docs fontAwesome4, material, ionicons, openIconic

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Node
import Dom.Property
import Dom.Attribute


{-| Construct an icon from an SVG source, with alt text for screen readers

    { path = "icons/bicycle.svg"
    , altText = "Bicycle route to destination"
    }
      |> Ui.Icon.svg
      |> Ui.render

    --> <span class="icon" role="img" aria-label="Bicycle route to destination">
    --    <object data="icons/bicycle.svg" type="image/svg+xml" aria-hidden="true"></object>
    --  </span>

+ __Browser compatability__: Requires support for SVG (to include a raster fallback, use [Ui.Media.svg](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Media#svg))
+ __HTML tags__: `<span>` > `<object>`
+ __ARIA role__: *img*
+ __Element class__: *.icon*
+ __Available modifiers__: [size](http://bulma.io/documentation/elements/icon/#sizes)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/icon/

-}
svg : { path : String, altText : String } -> Ui.Element msg
svg args =
  [ Dom.Node.leaf "img"
    [ "src"
      |> Dom.Property.string args.path

    , "aria-hidden"
      |> Dom.Attribute.string "true"

    ]

  ]
    |> Dom.Element.wrapNodes "span"
    |> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "img"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]

    |> Dom.Element.withClasses
      [ "icon" ]


{-| Construct an icon from the
[Font Awesome 4](http://fontawesome.io/icons/)
collection, with alt text for screen readers

    { name = "bicycle"
    , altText = "Bicycle route to destination"
    }
      |> Ui.Icon.fontAwesome4
      |> Ui.render

    --> <span class="icon" role="img" aria-label="Bicycle route to destination">
    --    <i class="fa fa-bicycle" aria-hidden="true"></i>
    --  </span>

+ __HTML tags__: `<span>` > `<i>`
+ __ARIA role__: *img*
+ __Element class__: *.icon*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/icon/#colors),
[size](http://bulma.io/documentation/elements/icon/#sizes),
[variations](http://bulma.io/documentation/elements/icon/#font-awesome-variations)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/icon/
+ __Font Awesome 4 reference__: http://fontawesome.io/icons/

-}
fontAwesome4 : { name : String, altText : String } -> Ui.Element msg
fontAwesome4 args =
  [ Dom.Node.leaf "i"
    [ "className"
      |> Dom.Property.string ("fa fa-" ++ args.name)

    , "aria-hidden"
      |> Dom.Attribute.string "true"

    ]

  ]
    |> Dom.Element.wrapNodes "span"
    |> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "img"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]

    |> Dom.Element.withClasses
      [ "icon" ]


{-| Construct an icon from Google's
[Material Design](https://material.io/icons/)
collection, with alt text for screen readers

    { name = "directions_bike"
    , altText = "Bicycle route to destination"
    }
      |> Ui.Icon.material
      |> Ui.render

    --> <span class="icon" role="img" aria-label="Bicycle route to destination">
    --    <i class="material-icons" aria-hidden="true">directions_bike</i>
    --  </span>

+ __Browser compatability__: Requires support for [ligatures](http://google.github.io/material-design-icons/#using-the-icons-in-html) (not compatible with IE 9 and below)
+ __HTML tags__: `<span>` > `<i>`
+ __ARIA role__: *img*
+ __Element class__: *.icon*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/icon/#colors),
[size](http://bulma.io/documentation/elements/icon/#material-design-icons),
[variations](https://bulma.io/documentation/elements/icon/#material-design-icons)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/icon/
+ __Material Icons reference__: https://material.io/icons/

-}
material : { name : String, altText : String } -> Ui.Element msg
material args =
  [ args.name
    |> Dom.Node.textWrapper "i"
      [ "className"
        |> Dom.Property.string "material-icons"

      , "aria-hidden"
        |> Dom.Attribute.string "true"

      ]

  ]
    |> Dom.Element.wrapNodes "span"
    |> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "img"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]

    |> Dom.Element.withClasses
      [ "icon" ]


{-| Construct an icon from the
[Ionicons](http://ionicons.com/)
collection, with alt text for screen readers

    { name = "android-bicycle"
    , altText = "Bicycle route to destination"
    }
      |> Ui.Icon.ionicons
      |> Ui.render

    --> <span class="icon" role="img" aria-label="Bicycle route to destination">
    --    <i class="ion-android-bicycle" aria-hidden="true"></i>
    --  </span>

+ __HTML tags__: `<span>` > `<i>`
+ __ARIA role__: *img*
+ __Element class__: *.icon*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/icon/#colors),
[size](http://bulma.io/documentation/elements/icon/#ionicons)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/icon/
+ __Ionicons reference__: http://ionicons.com/

-}
ionicons : { name : String, altText : String } -> Ui.Element msg
ionicons args =
  [ Dom.Node.leaf "i"
    [ "className"
      |> Dom.Property.string ("ion-" ++ args.name)

    , "aria-hidden"
      |> Dom.Attribute.string "true"

    ]

  ]
    |> Dom.Element.wrapNodes "span"
    |> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "img"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]

    |> Dom.Element.withClasses
      [ "icon" ]


{-| Construct an icon from the
[Open Iconic](http://useiconic.com/open)
collection, with alt text for screen readers

    { name = "map-marker"
    , altText = "Your current location"
    }
      |> Ui.Icon.openIconic
      |> Ui.render

    --> <span class="icon" role="img" aria-label="Your current location">
    --    <i class="oi" data-glyph="map-marker" aria-hidden="true"></i>
    --  </span>

+ __HTML tags__: `<span>` > `<i>`
+ __ARIA role__: *img*
+ __Element class__: *.icon*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/icon/#colors),
[size](http://bulma.io/documentation/elements/icon/#open-iconic)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/icon/
+ __Open Iconic reference__: https://useiconic.com/open

-}
openIconic : { name : String, altText : String } -> Ui.Element msg
openIconic args =
  [ Dom.Node.leaf "span"
    [ "className"
      |> Dom.Property.string "oi"

    , "data-glyph"
      |> Dom.Attribute.string args.name

    , "aria-hidden"
      |> Dom.Attribute.string "true"

    ]

  ]
    |> Dom.Element.wrapNodes "span"
    |> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "img"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]

    |> Dom.Element.withClasses
      [ "icon" ]
