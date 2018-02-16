module Component.Tabs exposing
  ( container )


import Ui
import Ui.Modifier
import Ui.Action
import Ui.Attribute
import Dom.Attribute


{-|

    { options =
      [ ("Pictures", Pictures)
      , ("Music", Music)
      , ("Videos", Videos)
      , ("Documents", Documents)
      ]

    , selected = model.currentTab
    , switch = Msg.SelectTab
    }
      |> Components.Tabs.container

-}
container : { options : List (String, a), selected : a, switch : (a -> msg) } -> Ui.Element msg
container args =
  let
    toTab (label, identifier) =
      [ label
        |> Ui.textWrapper "a"

      ]
        |> Ui.container "li"
        |> Ui.Action.onClick (args.switch identifier)
        |> Ui.Attribute.role "tab"
        |>
          ( case identifier == args.selected of
            True ->
              Ui.Attribute.add ("aria-selected", Dom.Attribute.string "true")
                >> Ui.Modifier.add "is-active"

            False ->
              identity

          )

  in
    [ args.options
      |> List.map toTab
      |> Ui.container "ul"

    ]
      |> Ui.container "div"
      |> Ui.Modifier.add "tabs"
      |> Ui.Attribute.role "tablist"
