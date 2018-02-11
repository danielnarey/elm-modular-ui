module Component exposing
  ( listedItems
  , navLink, navList
  )


import Ui
import Ui.Action
import Ui.Attribute


listedItems : List (Ui.Element msg) -> Ui.Element msg
listedItems =
  List.map
    ( List.singleton
      >> Ui.container "li"
    )

    >> Ui.container "ul"


navLink : (a -> msg) -> (String, a) -> Ui.Element msg
navLink token (label, identifier) =
  label
    |> Ui.textWrapper "a"
    |> Ui.Action.onClick (token identifier)
    |> Ui.Attribute.role "link"


navList : (a -> msg) -> List (String, a) -> Ui.Element msg
navList token =
  List.map
    ( navLink token
      >> List.singleton
      >> Ui.container "li"
    )

    >> Ui.container "ul"
