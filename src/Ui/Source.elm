module Ui.Source exposing
  ( object, iframe, embed )

{-|

# Content Element: Source
This module contains helpers to embed external content into your page layout,
with built-in features for web accessibility. The embedding elements are
assigned the *.source* class to allow for custom styling.

@docs object, iframe, embed

-}


-- Frameworks
import Ui
import Dom.Element
import Dom.Node
import Dom.Property
import Dom.Attribute
import Dom.Text


{-| Construct an object element to display content from an external source. The
first argument gives the URL or relative file path, the second argument
specifies the
[media type](https://www.iana.org/assignments/media-types/media-types.xhtml),
and the third argument provides a content label for screen readers. A link to
open the source in a new window is generated as a fallback if the content fails
to load.

    { path = "files/myfile.pdf"
    , mediaType = "application/pdf"
    , altText = "Load report from PDF file"
    }
      |> Ui.Source.object
      |> Ui.render

    --> <object class="source" data="files/myfile.pdf" type="application/pdf" role="document" aria-label="Load report from PDF file">
    --    <p>Click to load in a new window:
    --      <a href="files/myfile.pdf" target="_blank">files/myfile.pdf</a>
    --    </p>
    --  </object>

+ __HTML tag__: `<object>`
+ __ARIA role__: *document*
+ __Element class__: *.source*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.source* is not a Bulma element class)

-}
object : { path : String, mediaType : String, altText : String } -> Ui.Element msg
object args =
  [ [ "Click to load in a new window:"
      |> Dom.Text.node

    , args.path
      |> Dom.Node.textWrapper "a"
        [ "href"
          |> Dom.Property.string args.path

        , "target"
          |> Dom.Property.string "_blank"

        ]

    ]
      |> Dom.Node.container "p" []

  ]
    |> Dom.Element.wrapNodes "object"
    |> Dom.Element.withAttributes
      [ "data"
        |> Dom.Property.string args.path

      , "type"
        |> Dom.Property.string args.mediaType

      , "role"
        |> Dom.Attribute.string "document"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]
    |> Dom.Element.withClasses
      [ "source" ]



{-| Construct an iframe element to display content from an HTML source. The
string argument gives the URL or relative file path to the source.

    { path = "http://elm-lang.org"
    , altText = "The Elm language home page"
    }
      |> Ui.Source.iframe
      |> Ui.Render

    --> <iframe class="source" src="http://elm-lang.org" role="document" aria-label="The Elm language home page"></iframe>

+ __HTML tag__: `<iframe>`
+ __ARIA role__: *document*
+ __Element class__: *.source*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.source* is not a Bulma element class)

-}
iframe : { path : String, altText : String } -> Ui.Element msg
iframe args =
  Dom.Element.leaf "iframe"
    |> Dom.Element.withAttributes
      [ "src"
        |> Dom.Property.string args.path

      , "role"
        |> Dom.Attribute.string "document"

      , "aria-label"
        |> Dom.Attribute.string args.altText

      ]

    |> Dom.Element.withClasses
      [ "source" ]



{-| Construct an object element to display content from an external source. The
first argument gives the URL or relative file path and the second argument
specifies the media type (see
https://www.iana.org/assignments/media-types/media-types.xhtml
for a list of media type codes).

    ( "flash/animation.swf"
    , "application/x-shockwave-flash"
    , "Play an interactive Flash animation"
    )
      |> Ui.Source.embed
      |> Ui.render

    --> <embed class="source" src="flash/animation.swf" type="application/x-shockwave-flash" role="application" aria-label="Play an interactive Flash animation">

+ __HTML tag__: `<embed>`
+ __ARIA role__: *application*
+ __Element class__: *.source*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.source* is not a Bulma element class)

-}
embed : (String, String, String) -> Ui.Element msg
embed (path, mediaType, label) =
  Dom.Element.leaf "embed"
    |> Dom.Element.withAttributes
      [ "src"
        |> Dom.Property.string path

      , "type"
        |> Dom.Property.string mediaType

      , "role"
        |> Dom.Attribute.string "application"

      , "aria-label"
        |> Dom.Attribute.string label

      ]
    |> Dom.Element.withClasses
      [ "source" ]
