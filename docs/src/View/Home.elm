module View.Home exposing
  ( page )


import Msg
import Page
import Page.Interactive
import Page.Content
import Page.Customize

import Component
import Ui
import Toolkit.Function


page : Ui.Element Msg.Msg
page =
  let
    interactiveLinks =
      [ Page.Interactive.Buttons
      , Page.Interactive.Input
      , Page.Interactive.Selectors
      , Page.Interactive.Indicators
      ]
        |> List.map
          ( Toolkit.Function.apply2 (Page.Interactive.title, Page.Interactive) )
        |> Component.navList Msg.Load

    contentLinks =
      [ Page.Content.Text
      , Page.Content.Heading
      , Page.Content.Icon
      , Page.Content.Media
      , Page.Content.Source
      ]
        |> List.map
          ( Toolkit.Function.apply2 (Page.Content.title, Page.Content) )
        |> Component.navList Msg.Load

    customizeLinks =
      [ Page.Customize.Modifier
      , Page.Customize.Attribute
      , Page.Customize.Action
      , Page.Customize.Style
      ]
        |> List.map
          ( Toolkit.Function.apply2 (Page.Customize.title, Page.Customize) )
        |> Component.navList Msg.Load

  in
    [ interactiveLinks
    , contentLinks
    , customizeLinks
    ]
      |> Ui.container "div"
