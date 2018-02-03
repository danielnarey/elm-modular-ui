module View.Component exposing
  ( equalColumns, example, section )


-- Frameworks
import Ui
import Ui.Modifier
import Ui.Heading
import Component.Grid
import Component.Layout
import Dom.Element
-- Helpers
import SyntaxHighlight
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


equalColumns : String -> List (Ui.Element msg) -> Ui.Element msg
equalColumns modifier =
  List.map
    ( Component.Grid.column
      >> Ui.Modifier.add modifier
    )

   >> Component.Grid.columns
   >> Ui.Modifier.addList
     [ "is-centered"
     , "is-vcentered"
     ]


example : String -> (String, Ui.Element msg) -> Ui.Element msg
example label (code, element) =
  let
    heading =
      label
        |> Ui.Heading.subtitle "h3"
        |> Ui.Modifier.addList
          [ "is-4"
          , "has-text-dark"
          ]

    snippet =
      [ code
        |> SyntaxHighlight.elm
        |> Result.map (SyntaxHighlight.toBlockHtml Nothing)
        |> Result.withDefault
          ( code
            |> Ui.textWrapper "code"
           :|> Ui.container "pre"
            |> Ui.render
          )
       :|> Dom.Element.wrapNodes "div"

      , element
       :|> Ui.container "div"
        |> Ui.Modifier.add "has-text-centered"

      ]
        |> equalColumns "is-half"
        |> Ui.Modifier.add "box"

  in
    [ heading
    , snippet
    , Ui.leaf "hr"
    ]
      |> Ui.container "div"


section : String -> List (Ui.Element msg) -> Ui.Element msg
section label examples =
  let
    heading =
      label
        |> Ui.Heading.title "h2"
        |> Ui.Modifier.addList
          [ "is-2"
          , "has-text-black"
          ]

  in
    examples
      |> (::) heading
      |> Component.Layout.container
     :|> Component.Layout.section
