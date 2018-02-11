module View.Navigation exposing
  ( breadcrumbs )

import Model
import Msg
import Page
import Component
import Component.Breadcrumb
import Ui


breadcrumbs : Model.Model -> Ui.Element Msg.Msg
breadcrumbs model =
  { ancestors =
      model.currentPage
        |> Page.ancestors

  , navigation = Msg.Load

  }
    |> Component.Breadcrumb.container
