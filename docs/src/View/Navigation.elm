module View.Navigation exposing
  ( headerWithTabs, secondaryTabs )

-- Project
import Page
import Page.Interactive
import Page.Content
import Page.Customize
import Tab
import Model
import Msg
-- Frameworks
import Ui
import Ui.Modifier
import Component
import Component.Hero
import Component.Tabs
-- Helpers
import Toolkit.Function
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


headerWithTabs : Model.Model -> Ui.Element Msg.Msg
headerWithTabs model =
  { title = "Elm Modular UI"
  , subtitle = "A friendly UI development framework based on Bulma CSS"
  , head = Nothing
  , foot =
      { options =
        [ ("Interactive Elements", Tab.Interactive)
        , ("Content Elements", Tab.Content)
        , ("Customization", Tab.Customize)
        ]

      , selected = model.currentTab
      , switch = Msg.SelectTab
      }
        |> Component.Tabs.container
        |> Ui.Modifier.addList
          [ "is-boxed"
          , "is-medium"
          ]

       :|> Ui.container "div"
        |> Ui.Modifier.add "container"
        |> Just

  }
    |> Component.Hero.container
    |> Ui.Modifier.add "is-danger"


secondaryTabs : Model.Model -> Ui.Element Msg.Msg
secondaryTabs model =
  let
    options =
      case model.currentTab of
        Tab.Interactive ->
          [ Page.Interactive.Buttons
          , Page.Interactive.Input
          , Page.Interactive.Selectors
          , Page.Interactive.Indicators
          ]
            |> List.map
              ( Toolkit.Function.apply2 (Page.Interactive.title, Page.Interactive) )

        Tab.Content ->
          [ Page.Content.Text
          , Page.Content.Heading
          , Page.Content.Icon
          , Page.Content.Media
          , Page.Content.Source
          ]
            |> List.map
              ( Toolkit.Function.apply2 (Page.Content.title, Page.Content) )

        Tab.Customize ->
          [ Page.Customize.Modifier
          , Page.Customize.Attribute
          , Page.Customize.Action
          , Page.Customize.Style
          ]
            |> List.map
              ( Toolkit.Function.apply2 (Page.Customize.title, Page.Customize) )

  in
    { options = options
    , selected = model.currentPage
    , switch = Msg.Load
    }
      |> Component.Tabs.container
      |> Ui.Modifier.add "is-medium"
     :|> Ui.container "div"
      |> Ui.Modifier.add "container"
