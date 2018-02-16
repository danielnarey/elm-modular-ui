module View.Customize exposing
  ( modifier, attribute, action, style )


-- Project
import Model
import Msg
import View.Layout
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Attribute
import Dom.Property
import Ui.Action
import Ui.Style
import Ui.Button
import Ui.Media
import Ui.Source
import Ui.Indicator
import Component.Layout
import Component.Grid
-- Helpers
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


modifier : Model.Model -> Ui.Element Msg.Msg
modifier model =
  let
    addCode =
      "\"Click Here\"\n  |> Ui.Button.action\n    ( Msg.Alert \"You Clicked!\" )\n  |> Ui.Modifier.add \"is-danger\""

    addElement =
      "Click Here"
        |> Ui.Button.action (Msg.Alert "You Clicked!")
        |> Ui.Modifier.add "is-danger"

    addListCode =
      "\"Elm Website\"\n  |> Ui.Button.navigation\n    ( Msg.LoadUrl \"http://elm-lang.org\" )\n  |> Ui.Modifier.addList\n    [ \"is-link\"\n    , \"is-small\"\n    ]"

    addListElement =
      "Elm Website"
        |> Ui.Button.navigation (Msg.LoadUrl "http://elm-lang.org")
        |> Ui.Modifier.addList
          [ "is-link"
          , "is-small"
          ]

    conditionalCode =
      "Ui.Button.delete Msg.Disappear\n  |> Ui.Modifier.conditional\n    ( \"is-invisible\", model.deleteIsHidden )"

    conditionalElement =
      Ui.Button.delete Msg.Disappear
        |> Ui.Modifier.conditional
          ( "is-invisible", model.deleteIsHidden )

  in
    [ ( addCode
      , addElement
      )
        |> View.Layout.example "Add a Modifier Class"

    , ( addListCode
      , addListElement
      )
        |> View.Layout.example "Add a List of Modifier Classes"

    , ( conditionalCode
      , conditionalElement
      )
        |> View.Layout.example "Conditionally Add a Modifier"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


attribute : Ui.Element msg
attribute =
  let
    addCode =
      "{ path = \"media/denali.jpg\"\n, altText = \"Photo of Denali (a.k.a. Mt. McKinley)\"\n}\n  |> Ui.Media.image\n  |> Ui.Attribute.add\n    ( \"title\"\n    , Dom.Property.string \"Denali (a.k.a. Mt. McKinley)\"\n    )"

    addElement =
      { path = "media/denali.jpg"
      , altText = "Photo of Denali (a.k.a. Mt. McKinley)"
      }
        |> Ui.Media.image
        |> Ui.Attribute.add
          ( "title", Dom.Property.string "Denali (a.k.a. Mt. McKinley)" )
        |> Ui.Modifier.add "is-3by2"
       :|> Ui.container "div"
       :|> Component.Grid.equalColumns "is-half"
        |> Ui.Modifier.add "is-mobile"

    addListCode =
      "{ path = \"http://elm-lang.org\"\n, altText = \"The Elm language home page\"\n}\n  |> Ui.Source.iframe\n  |> Ui.Attribute.addList\n    [ (\"width\", Dom.Property.string \"350\")\n    , (\"height\", Dom.Property.string \"250\")\n    ]"

    addListElement =
      { path = "http://elm-lang.org"
      , altText = "The Elm language home page"
      }
        |> Ui.Source.iframe
        |> Ui.Attribute.addList
          [ ("width", Dom.Property.string "350")
          , ("height", Dom.Property.string "250")
          ]

  in
    [ ( addCode
      , addElement
      )
        |> View.Layout.example "Add an HTML Attribute"

    , ( addListCode
      , addListElement
      )
        |> View.Layout.example "Add a List of HTML Attributes"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


action : Model.Model -> Ui.Element Msg.Msg
action model =
  let
    addCode =
      "\"I'm interactive\"\n  |> Ui.Indicator.tag\n  |> Ui.Action.add\n    ( \"click\", Msg.ToggleTag )\n  |> Ui.Modifier.conditional\n    ( \"is-danger\", model.tagIsActive )"

    addElement =
      "I'm interactive"
        |> Ui.Indicator.tag
        |> Ui.Action.add
          ( "click", Msg.ToggleTag )
        |> Ui.Modifier.conditional
          ( "is-danger", model.tagIsActive )
        |> Ui.Modifier.add "is-unselectable"


    addListCode =
      "\"I'm interactive too\"\n  |> Ui.Indicator.tag\n  |> Ui.Action.addList\n    [ ( \"mouseover\", Msg.Hover True)\n    , ( \"mouseout\", Msg.Hover False)\n    ]\n\n  |> Ui.Modifier.conditional\n    ( \"is-primary\", model.tagIsHovered )"

    addListElement =
      "I'm interactive too"
        |> Ui.Indicator.tag
        |> Ui.Action.addList
          [ ( "mouseover", Msg.Hover True)
          , ( "mouseout", Msg.Hover False)
          ]

        |> Ui.Modifier.conditional
          ( "is-primary", model.tagIsHovered )
        |> Ui.Modifier.add "is-unselectable"


  in
    [ ( addCode
      , addElement
      )
        |> View.Layout.example "Add a User-Action Handler"

    , ( addListCode
      , addListElement
      )
        |> View.Layout.example "Add a List of User-Action Handlers"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section


style : Ui.Element msg
style =
  let
    addCode =
      "\"I'm stylish\"\n  |> Ui.Indicator.tag\n  |> Ui.Style.add (\"border\", \"1px solid #FF3860\")"

    addElement =
      "I'm stylish"
        |> Ui.Indicator.tag
        |> Ui.Style.add ("border", "1px solid #FF3860")

    addListCode =
      "\"I'm stylish too\"\n  |> Ui.Indicator.tag\n  |> Ui.Style.addList\n    [ (\"border\", \"1px solid #FF3860\")\n    , (\"box-shadow\", \"0 0 2px #FF3860\")\n    ]"

    addListElement =
      "I'm stylish too"
        |> Ui.Indicator.tag
        |> Ui.Style.addList
          [ ("border", "1px solid #FF3860")
          , ("box-shadow", "0 0 2px #FF3860")
          ]

  in
    [ ( addCode
      , addElement
      )
        |> View.Layout.example "Add a Style Declaration"

    , ( addListCode
      , addListElement
      )
        |> View.Layout.example "Add a List of Style Declarations"

    ]
      |> Component.Layout.container
     :|> Component.Layout.section
