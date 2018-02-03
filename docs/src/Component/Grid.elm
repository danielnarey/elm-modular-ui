module Component.Grid exposing
  ( columns, column, singleColumn )

import Ui
import Ui.Modifier

columns : List (Ui.Element msg) -> Ui.Element msg
columns =
  Ui.container "div"
    >> Ui.Modifier.add "columns"


column : Ui.Element msg -> Ui.Element msg
column =
  Ui.Modifier.add "column"


singleColumn : Ui.Element msg -> Ui.Element msg
singleColumn =
  Ui.Modifier.add "column"
    >> List.singleton
    >> Ui.container "div"
    >> Ui.Modifier.add "columns"
