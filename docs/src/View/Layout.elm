module View.Layout exposing
  ( pageHeader, example, alertModal )


-- Project
import Page
import Model
import Msg
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Heading
import Component.Grid
import Component.Hero
import Component.Modal
import Dom.Element
-- Helpers
import SyntaxHighlight
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


pageHeader : Model.Model -> Ui.Element msg
pageHeader model =
  { title =
        model.currentPage
          |> Page.title

  , subtitle = ""
  , head = Nothing
  , foot = Nothing
  }
    |> Component.Hero.container



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
        |> Component.Grid.equalColumns "is-half"
        |> Ui.Modifier.add "box"

  in
    [ heading
    , snippet
    , Ui.leaf "hr"
    ]
      |> Ui.container "div"


alertModal : Model.Model -> Ui.Element Msg.Msg
alertModal model =
  { content =
      model.alertText
        |> Ui.textWrapper "p"
        |> Ui.Modifier.addList
          [ "is-size-1"
          , "has-text-danger"
          , "has-text-centered"
          ]

  , close = Just Msg.DismissAlert

  }
    |> Component.Modal.container
