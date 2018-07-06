module View.Content exposing
  ( text, heading, icon, media, source )


-- Project
import Model
import Msg
import View.Layout
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Attribute
import Dom.Property
import Ui.Text
import Ui.Heading
import Ui.Icon
import Ui.Media
import Ui.Source
import Component.Layout
import Component.Grid
-- Helpers
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


text : Ui.Element msg
text =
  let
    plainCode =
      "\"Time to make the donuts!\"\n  |> Ui.Text.plain"

    plainElement =
      "Time to make the donuts!"
        |> Ui.Text.plain

    linkCode =
      "\"Bulma docs\"\n  |> Ui.Text.link (\"http://bulma.io\", True)"

    linkElement =
      "Bulma docs"
        |> Ui.Text.link ("http://bulma.io", True)

    typographyCode =
      "[ \"Helpers to display text as \"\n  |> Ui.Text.plain\n\n, \"italic, \"\n  |> Ui.Text.italic\n\n, \"bold, \"\n  |> Ui.Text.bold\n\n, \"semibold, \"\n  |> Ui.Text.semibold\n\n, \"or light.\"\n  |> Ui.Text.light\n\n]\n  |> Ui.container \"p\""

    typographyElement =
      [ "Helpers to display text as "
        |> Ui.Text.plain

      , "italic, "
        |> Ui.Text.italic

      , "bold, "
        |> Ui.Text.bold

      , "semibold, "
        |> Ui.Text.semibold

      , "or light."
        |> Ui.Text.light

      ]
        |> Ui.container "p"

  in
    [ ( plainCode
      , plainElement
      )
        |> View.Layout.example "Plain Text"

    , ( linkCode
      , linkElement
      )
        |> View.Layout.example "Linked Text"

    , ( typographyCode
      , typographyElement
      )
        |> View.Layout.example "Typography Helpers"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


heading : Ui.Element msg
heading =
  let
    titleCode =
      "\"The Age of Extremes\"\n  |> Ui.Heading.title \"h1\""

    titleElement =
      "The Age of Extremes"
        |> Ui.Heading.title "h1"


    subtitleCode =
      "\"A History of the World, 1914–1991\"\n  |> Ui.Heading.subtitle \"h2\""

    subtitleElement =
      "A History of the World, 1914–1991"
        |> Ui.Heading.subtitle "h2"


  in
    [ ( titleCode
      , titleElement
      )
        |> View.Layout.example "Title"

    , ( subtitleCode
      , subtitleElement
      )
        |> View.Layout.example "Subtitle"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


icon : Ui.Element msg
icon =
  let
    svgCode =
      "{ path = \"icons/bicycle.svg\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.svg"

    svgElement =
      { path = "icons/bicycle.svg"
      , altText = "Bicycle route to destination"
      }
        |> Ui.Icon.svg

    faCode =
      "{ name = \"bicycle\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.fontAwesome4"

    faElement =
      { name = "bicycle"
      , altText = "Bicycle route to destination"
      }
        |> Ui.Icon.fontAwesome4

    materialCode =
      "{ name = \"directions_bike\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.material"

    materialElement =
      { name = "directions_bike"
      , altText = "Bicycle route to destination"
      }
        |> Ui.Icon.material


    ionCode =
      "{ name = \"android-bicycle\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.ionicons"

    ionElement =
      { name = "android-bicycle"
      , altText = "Bicycle route to destination"
      }
        |> Ui.Icon.ionicons

    iconicCode =
      "{ name = \"map-marker\"\n, altText = \"Your current location\"\n}\n  |> Ui.Icon.openIconic"

    iconicElement =
      { name = "map-marker"
      , altText = "Your current location"
      }
        |> Ui.Icon.openIconic


  in
    [ ( svgCode
      , svgElement
      )
        |> View.Layout.example "SVG Icon"

    , ( faCode
      , faElement
      )
        |> View.Layout.example "Font Awesome 4 Icon"

    , ( materialCode
      , materialElement
      )
        |> View.Layout.example "Material Design Icon"

    , ( ionCode
      , ionElement
      )
        |> View.Layout.example "Ionicons Icon"

    , ( iconicCode
      , iconicElement
      )
        |> View.Layout.example "Open Iconic Icon"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


media : Ui.Element msg
media =
  let
    imageCode =
      "{ path = \"media/denali.jpg\"\n, altText = \"Photo of Denali (a.k.a. Mt. McKinley)\"\n}\n  |> Ui.Media.image"

    imageElement =
      { path = "media/denali.jpg"
      , altText = "Photo of Denali (a.k.a. Mt. McKinley)"
      }
        |> Ui.Media.image
        |> Ui.Modifier.add "is-3by2"
       :|> Ui.container "div"
       :|> Component.Grid.equalColumns "is-half"
        |> Ui.Modifier.add "is-mobile"


    svgCode =
      "{ path = \"media/cc-by-nc-nd.svg\"\n, fallback = \"media/cc-by-nc-nd.png\"\n, altText = \"Icon for Creative Commons BY-NC-ND license\"\n}\n  |> Ui.Media.svg"

    svgElement =
      { path = "media/cc-by-nc-nd.svg"
      , fallback = "media/cc-by-nc-nd.png"
      , altText = "Icon for Creative Commons BY-NC-ND license"
      }
        |> Ui.Media.svg

    videoCode =
      "{ sourceList =\n  [ (\"media/train.mp4\", \"video/mp4\")\n  , (\"media/train.ogv\", \"video/ogg\")\n  ]\n\n, hasControls = True\n}\n  |> Ui.Media.video"

    videoElement =
      { sourceList =
        [ ("media/train.mp4", "video/mp4")
        , ("media/train.ogv", "video/ogg")
        ]

      , hasControls = True
      }
        |> Ui.Media.video
       :|> Ui.container "div"
       :|> Component.Grid.equalColumns "is-half"
        |> Ui.Modifier.add "is-mobile"

    audioCode =
      "{ sourceList =\n  [ (\"media/stack-o-lee.mp3\", \"audio/mpeg\") ]\n\n, hasControls = True\n}\n  |> Ui.Media.audio"

    audioElement =
      { sourceList =
        [ ("media/stack-o-lee.mp3", "audio/mpeg") ]

      , hasControls = True
      }
        |> Ui.Media.audio

  in
    [ ( imageCode
      , imageElement
      )
        |> View.Layout.example "Image"

    , ( svgCode
      , svgElement
      )
        |> View.Layout.example "SVG"

    , ( videoCode
      , videoElement
      )
        |> View.Layout.example "Video"

    , ( audioCode
      , audioElement
      )
        |> View.Layout.example "Audio"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


source : Ui.Element msg
source =
  let
    objectCode =
      "{ path = \"media/abc-book.pdf\"\n, mediaType = \"application/pdf\"\n, altText = \"PDF of an antique children's ABC book\"\n}\n  |> Ui.Source.object"

    objectElement =
      { path = "media/abc-book.pdf"
      , mediaType = "application/pdf"
      , altText = "PDF of an antique children's ABC book"
      }
        |> Ui.Source.object
        |> Ui.Attribute.addList
          [ ("width", Dom.Property.string "350")
          , ("height", Dom.Property.string "550")
          ]

    iframeCode =
      "{ path = \"http://elm-lang.org\"\n, altText = \"The Elm language home page\"\n}\n  |> Ui.Source.iframe"

    iframeElement =
      { path = "http://elm-lang.org"
      , altText = "The Elm language home page"
      }
        |> Ui.Source.iframe
        |> Ui.Attribute.addList
          [ ("width", Dom.Property.string "350")
          , ("height", Dom.Property.string "550")
          ]

  in
    [ ( objectCode
      , objectElement
      )
        |> View.Layout.example "Object"

    , ( iframeCode
      , iframeElement
      )
        |> View.Layout.example "iframe"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section
