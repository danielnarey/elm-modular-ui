module Component.Layout exposing
  ( section, container, footer )

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


footer : Ui.Element msg -> Ui.Element msg
footer content =
  [ [ content ]
      |> Ui.container "div"
      |> Ui.Modifier.add "container"

  ]
    |> Ui.container "div"
    |> Ui.Modifier.add "footer"
