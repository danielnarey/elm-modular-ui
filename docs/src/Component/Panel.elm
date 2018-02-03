module Component.Panel exposing
  ( container
  , insertBlocks
  )

import Ui
import Ui.Modifier
import Dom.Element

container : { heading : String, tabs : List (Ui.Element msg), blocks : List (Ui.Element msg) } -> Ui.Element msg
container args =
  let
    withHeading =
      case args.heading of
        "" ->
          identity

        _ ->
          args.heading
            |> Ui.textWrapper "p"
            |> Ui.Modifier.add "panel-heading"
            |> (::)

    withTabs =
      case args.tabs of
        [] ->
          identity

        _ ->
          args.tabs
            |> Ui.container "p"
            |> Ui.Modifier.add "panel-tabs"
            |> (::)

  in
    args.blocks
      |> List.map (Ui.Modifier.add "panel-block")
      |> withTabs
      |> withHeading
      |> Ui.container "nav"
      |> Ui.Modifier.add "panel"


insertBlocks : Int -> List (Ui.Element msg) -> Ui.Element msg -> Ui.Element msg
insertBlocks startIndex blockList panelElement =
  let
    nodeList =
      [ panelElement.children
        |> List.take startIndex

      , blockList
        |> List.map (Dom.Element.addClass "panel-block")
        |> List.map Dom.Element.toNode

      , panelElement.children
        |> List.drop startIndex

      ]
        |> List.concat

  in
    panelElement
      |> Dom.Element.withChildNodes nodeList
