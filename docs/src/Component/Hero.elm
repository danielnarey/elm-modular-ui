module Component.Hero exposing
  ( container )


import Ui
import Ui.Heading
import Ui.Modifier


container : { title : String, subtitle : String, head : Maybe (Ui.Element msg), foot : Maybe (Ui.Element msg) } -> Ui.Element msg
container args =
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
