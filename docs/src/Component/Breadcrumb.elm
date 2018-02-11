module Component.Breadcrumb exposing
  ( container )


import Ui
import Ui.Modifier
import Ui.Attribute
import Component


{-|
    { ancestors =
      [ ( "Ui"
        , Page.Home
        )

      , ( "Interactive Elements"
        , Page.Interactive.Index
          |> Page.Interactive
        )

      , ( "Buttons"
        , Page.Interactive.Buttons
          |> Page.Interactive
        )

      ]

    , navigation = Msg.Load

    }
      |> Component.Breadcrumb.container

-}
container : { ancestors : List (String, a), navigation : a -> msg } -> Ui.Element msg
container args =
  [ args.ancestors
    |> Component.navList args.navigation

  ]
    |> Ui.container "nav"
    |> Ui.Modifier.add "breadcrumb"
    |> Ui.Attribute.ariaLabel "breadcrumbs"
