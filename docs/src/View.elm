module View exposing
  ( view )


-- Project
import Page
import Page.Interactive
import Page.Content
import Page.Customize
import Model
import Msg
import View.Home
import View.Interactive
import View.Content
import View.Customize
import View.Navigation
import View.Layout
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Style
-- Core
import VirtualDom
-- Helpers
import Toolkit.List.Operators exposing ( (:|>), (.|>) )
import Toolkit.Function.Operators exposing ( (|>.) )


view : Model.Model -> VirtualDom.Node Msg.Msg
view model =
  let
    pageContent =
      case model.currentPage of
        Page.Home ->
          always View.Home.overview

        Page.Interactive Page.Interactive.Buttons ->
          View.Interactive.buttons

        Page.Interactive Page.Interactive.Input ->
          View.Interactive.input

        Page.Interactive Page.Interactive.Selectors ->
          View.Interactive.selectors

        Page.Interactive Page.Interactive.Indicators ->
          View.Interactive.indicators

        Page.Content Page.Content.Text ->
          always View.Content.text

        Page.Content Page.Content.Heading ->
          always View.Content.heading

        Page.Content Page.Content.Icon ->
          always View.Content.icon

        Page.Content Page.Content.Media ->
          always View.Content.media

        Page.Content Page.Content.Source ->
          always View.Content.source

        Page.Customize Page.Customize.Modifier ->
          View.Customize.modifier

        Page.Customize Page.Customize.Attribute ->
          always View.Customize.attribute

        Page.Customize Page.Customize.Action ->
          View.Customize.action

        Page.Customize Page.Customize.Style ->
          always View.Customize.style

  in
    model
      |>.
        [ View.Navigation.headerWithTabs
        , View.Navigation.secondaryTabs
        , View.Layout.pageHeader
        , pageContent
          >>
            ( case model.currentPage of
              Page.Home ->
                identity

              _ ->
                Ui.Style.add ("background-color", "#dbdbdb")

            )

        , View.Layout.alertModal
          >> Ui.Modifier.conditional ("is-active", model.alertIsVisible)

        ]

      |> Ui.container "div"
      |> Ui.render
