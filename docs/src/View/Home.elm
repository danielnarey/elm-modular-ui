module View.Home exposing
  ( overview )


-- Frameworks
import Ui
import Ui.Modifier
import Ui.Text
import Component.Layout
-- Helpers
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


overview : Ui.Element msg
overview =
  [ [ "Modular UI is a framework for building a modern user interface in Elm "
      ++ "that abstracts out a lot of the details of the underlying HTML and "
      ++ "CSS. It's partially inspired by and designed to be used with the "
      |> Ui.Text.plain

    , "Bulma CSS "
      |> Ui.Text.link ("http://bulma.io", True)

    , "framework."
      |> Ui.Text.plain

    ]
      |> Ui.container "p"

  , [ "This site features live code examples that show Modular UI in action. "
      ++ "The full package documentation is available "
        |> Ui.Text.plain

    , "here"
      |> Ui.Text.link
        ( "http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest"
        , True
        )

    , "."
      |> Ui.Text.plain

    ]
      |> Ui.container "p"

  , Ui.leaf "hr"

  ]
    |> Ui.container "div"
    |> Ui.Modifier.addList
      [ "content"
      , "is-size-4"
      , "has-text-bold"
      , "has-text-dark"
      ]

   :|> Component.Layout.container
   :|> Component.Layout.section
