module Component.Layout exposing
  ( section, container, hero, level, footer )

import Ui
import Ui.Modifier
import Ui.Heading


section : List (Ui.Element msg) -> Ui.Element msg
section =
  Ui.container "section"
    >> Ui.Modifier.add "section"


container : List (Ui.Element msg) -> Ui.Element msg
container =
  Ui.container "div"
    >> Ui.Modifier.add "container"


hero : { title : String, subtitle : String, head : Maybe (Ui.Element msg), foot : Maybe (Ui.Element msg) } -> Ui.Element msg
hero args =
  let
    body =
      [ [ args.title
          |> Ui.Heading.title "h1"

        , args.subtitle
          |> Ui.Heading.subtitle "h2"

        ]
          |> Ui.container "div"
          |> Ui.Modifier.add "container"

      ]
        |> Ui.container "div"
        |> Ui.Modifier.add "hero-body"


    withHead =
      case args.head of
        Just element ->
          (::) element

        Nothing ->
          identity

    withFoot =
      case args.foot of
        Just element ->
         flip List.append [ element ]

        Nothing ->
         identity

  in
    [ body ]
      |> withHead
      |> withFoot
      |> Ui.container "section"
      |> Ui.Modifier.add "hero"


level : { left : List (Ui.Element msg), centered : List (Ui.Element msg), right : List (Ui.Element msg) } -> Ui.Element msg
level args =
  let
    withLeft =
      case args.left of
        [] ->
          identity

        _ ->
          args.left
            |> List.map
              ( List.singleton
                >> Ui.container "div"
                >> Ui.Modifier.add "level-item"
              )

            |> Ui.container "div"
            |> Ui.Modifier.add "level-left"
            |> (::)

    withCentered =
      args.centered
        |> List.map
          ( List.singleton
            >> Ui.container "div"
            >> Ui.Modifier.add "level-item"
          )
        |> flip List.append

    withRight =
      case args.right of
        [] ->
          identity

        _ ->
          args.right
            |> List.map
              ( List.singleton
                >> Ui.container "div"
                >> Ui.Modifier.add "level-item"
              )

            |> Ui.container "div"
            |> Ui.Modifier.add "level-left"
            |> List.singleton
            |> flip List.append

  in
    []
      |> withLeft
      |> withCentered
      |> withRight
      |> Ui.container "nav"
      |> Ui.Modifier.add "level"


footer : Ui.Element msg -> Ui.Element msg
footer content =
  [ [ content ]
      |> Ui.container "div"
      |> Ui.Modifier.add "container"

  ]
    |> Ui.container "div"
    |> Ui.Modifier.add "footer"
