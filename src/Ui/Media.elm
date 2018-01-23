module Ui.Media exposing
  ( image, svg, video, audio, withCaption )

{-|

# Content Element: Media
This module contains helpers to insert images and other media content into your
page layout, with built-in features for web accessibility. The image constructor
applies the *.image* Bulma element class, which is helpful for positioning
and images and provides a set of fixed and responsive size modifiers. Other
media content types that are not supported by Bulma are assigned class names
for custom styling.

## Media Elements
@docs image, svg, video, audio

## Adding a Caption
@docs withCaption

-}


-- Framework
import Ui
import Dom.Element
import Dom.Node
import Dom.Property
import Dom.Attribute
-- Core
import Char


{-| Construct image content (typically from a JPEG or PNG source), with alt
text for screen readers

    { path = "http://bulma.io/images/placeholders/128x128.png"
    , altText = "This is a placeholder"
    }
      |> Ui.Media.image
      |> Ui.Modifier.add "is-128x128"
      |> Ui.render

    --> <figure class="image is-128x128">
    --    <img src="http://bulma.io/images/placeholders/128x128.png" alt="This is a placeholder">
    --  </figure>

+ __HTML tags__: `<figure>` > `<img>`
+ __ARIA roles__: *figure* > *img* (defaults)
+ __Element class__: *.image*
+ __Available modifiers__: size ([fixed](https://bulma.io/documentation/elements/image/#fixed-square-images),
 [responsive](https://bulma.io/documentation/elements/image/#responsive-images-with-ratios))
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/image/

-}
image : { path : String, altText : String } -> Ui.Element msg
image args =
  [ Dom.Node.leaf "img"
    [ "src"
      |> Dom.Property.string args.path

    , "alt"
      |> Dom.Property.string args.altText

    ]

  ]
    |> Dom.Element.wrapNodes "figure"
    |> Dom.Element.withClasses
      [ "image" ]


{-| Construct SVG content, with a raster image fallback for older browsers and
alt text for screen readers

    { path = "logo.svg"
    , fallback = "logo.png"
    , altText = "Company Logo"
    }
      |> Ui.Media.svg
      |> Ui.render

    --> <figure class="svg-object">
    --    <object data="logo.svg" type="image/svg+xml">
    --      <img src="logo.png" alt="Company Name">
    --    </object>
    --  </figure>

+ __HTML tags__: `<figure>` > `<object>` > `<img>`
+ __ARIA roles__: *figure* > *img* (defaults)
+ __Element class__: *.svg-object*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.svg-object* is not a Bulma element class)

-}
svg : { path : String, fallback : String, altText : String } -> Ui.Element msg
svg args =
  [ [ Dom.Node.leaf "img"
      [ "src"
        |> Dom.Property.string args.fallback

      , "alt"
        |> Dom.Property.string args.altText

      ]

    ]
      |> Dom.Node.container "object"
        [ "data"
          |> Dom.Property.string args.path

        , "type"
          |> Dom.Property.string "image/svg+xml"

        ]

  ]
    |> Dom.Element.wrapNodes "figure"
    |> Dom.Element.withClasses
      [ "svg-object" ]


{-| Construct video content, with an automatically generated error message as a
fallback. Several source files may be listed to ensure that the video is
playable in all modern browsers. The second string in each tuple gives the
[media type code](https://www.iana.org/assignments/media-types/media-types.xhtml)
of the file. The `hasControls` argument indicates whether controls should be
displayed in the video frame.

    { sourceList =
      [ ("movie.mp4", "video/mp4")
      , ("movie.ogg", "video/ogg")
      ]

    , hasControls = True

    }
      |> Ui.Media.video
      |> Ui.render


    --> <figure class="video">
    --    <video controls role="application">
    --      <source src="movie.mp4" type="video/mp4">
    --      <source src="movie.ogg" type="video/ogg">
    --      <p>Video file 'movie.mp4' cannot be loaded. Verify that your browser
    --      is up to date and can play 'video/mp4' files.</p>
    --      <p>Video file 'movie.ogg' cannot be loaded. Verify that your browser
    --      is up to date and can play 'video/ogg' files.</p>
    --    </video>
    --  </figure>

+ __HTML tags__: `<figure>` > `<video>` > `<source>`
+ __ARIA roles__: *figure* (default) > *application*
+ __Element class__: *.video*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.video* is not a Bulma element class)

-}
video : { sourceList : List (String, String), hasControls : Bool } -> Ui.Element msg
video args =
  let
    toSourceNode (path, filetype) =
      [ "src"
        |> Dom.Property.string path

      , "type"
        |> Dom.Property.string filetype

      ]
        |> Dom.Node.leaf "source"

    toErrorMessage (path, filetype) =
      [ "Video file '"
      , path
      , "' cannot be loaded. "
      , "Verify that your browser is up to date and can play '"
      , filetype
      , "' files."
      ]
        |> String.concat
        |> Dom.Node.textWrapper "p" []

  in
    [ [ args.sourceList
        |> List.map toSourceNode

      , args.sourceList
        |> List.map toErrorMessage

      ]
        |> List.concat
        |> Dom.Node.container "video"
          [ "controls"
            |> Dom.Property.bool args.hasControls

          , "role"
            |> Dom.Attribute.string "application"

          ]

    ]
      |> Dom.Element.wrapNodes "figure"
      |> Dom.Element.withClasses
        [ "video" ]


{-| Construct audio content, with an automatically generated error message as a
fallback. Several source files may be listed to ensure that the audio is
playable in all modern browsers. The second string in each tuple gives the
[media type code](https://www.iana.org/assignments/media-types/media-types.xhtml)
of the file. The boolean argument indicates whether controls should be
displayed.

    { sourceList =
      [ ("horse.ogg", "audio/ogg")
      , ("horse.mp3", "audio/mpeg")
      ]

    , hasControls = True

    }
      |> Ui.Media.audio
      |> Ui.render


    --> <figure>
    --    <audio controls role="application">
    --      <source src="horse.ogg" type="audio/ogg">
    --      <source src="horse.mp3" type="audio/mpeg">
    --      <p>Audio file 'horse.ogg' cannot be loaded. Verify that your browser
    --      is up to date and can play 'audio/ogg' files.</p>
    --      <p>Audio file 'horse.mp3' cannot be loaded. Verify that your browser
    --      is up to date and can play 'audio/mpeg' files.</p>
    --    </audio>
    --  </figure>

+ __HTML tags__: `<figure>` > `<audio>` > `<source>`
+ __ARIA roles__: *figure* (default) > *application*
+ __Element class__: *.audio*
+ __Available modifiers__: none
+ __Bulma CSS reference__: none (*.audio* is not a Bulma element class)

-}
audio : { sourceList : List (String, String), hasControls : Bool } -> Ui.Element msg
audio args =
  let
    toSourceNode (path, filetype) =
      [ "src"
        |> Dom.Property.string path

      , "type"
        |> Dom.Property.string filetype

      ]
        |> Dom.Node.leaf "source"

    toErrorMessage (path, filetype) =
      [ "Audio file '"
      , path
      , "' cannot be loaded. "
      , "Verify that your browser is up to date and can play '"
      , filetype
      , "' files."
      ]
        |> String.concat
        |> Dom.Node.textWrapper "p" []

  in
    [ [ args.sourceList
        |> List.map toSourceNode

      , args.sourceList
        |> List.map toErrorMessage

      ]
        |> List.concat
        |> Dom.Node.container "audio"
          [ "controls"
            |> Dom.Property.bool args.hasControls

          , "role"
            |> Dom.Attribute.string "application"

          ]

    ]
      |> Dom.Element.wrapNodes "figure"
      |> Dom.Element.withClasses
        [ "audio" ]


{-| Add a figure caption to a media element. The `id` argument is a unique
integer that is used to generate an *id* attribute for the caption so that
it can be identified for screen readers as labelling the media element.

    { path = "http://bulma.io/images/placeholders/128x128.png"
    , altText = "This is a placeholder"
    }
      |> Ui.Media.image
      |> Ui.Modifier.add "is-128x128"
      |> Ui.Media.withCaption
        { id = 1
        , text = "This image is 128 px by 128 px."
        }

      |> Ui.render

    --> <figure class="image is-128x128" aria-labelledby="caption-1">
    --    <img src="http://bulma.io/images/placeholders/128x128.png" alt="This is a placeholder">
    --    <figcaption id="caption-1">This image is 128 px x 128 px.</figcaption>
    --  </figure>

+ __HTML tags__: `<figure>` > `<figcaption>`
+ __ARIA attribute__: *aria-labelledby* (caption is identified as the visible label for the figure element)

-}
withCaption : { id : Int, text : String } -> Ui.Element msg -> Ui.Element msg
withCaption args figureElement =
  figureElement
    |> Dom.Element.appendChild
      ( args.text
        |> Dom.Element.textWrapper "figcaption"
        |> Dom.Element.withAttributes
          [ "id"
            |> Dom.Property.string
              ( args.id
                |> Basics.toString
                |> String.append "caption-"

              )

          ]

      )

    |> Dom.Element.addAttribute
      ( "aria-labelledby"
        |> Dom.Attribute.string
          ( args.id
            |> Basics.toString
            |> String.append "caption-"

          )

      )
