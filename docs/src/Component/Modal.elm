module Component.Modal exposing
  ( container, card )


import Ui
import Ui.Modifier
import Ui.Action
import Ui.Attribute
import Ui.Button


{-|

    { content =
      { path = "images/photo12345.jpg"
      , altText = ""
      }
        |> Ui.Media.image

    , close = Just Msg.CloseModal

    }

-}
container : { content : Ui.Element msg, close : Maybe msg } -> Ui.Element msg
container args =
  let
    withClose =
      case args.close of
        Nothing ->
          identity

        Just msg ->
          Ui.leaf "button"
            |> Ui.Modifier.addList
              [ "modal-close"
              , "is-large"
              ]

            |> Ui.Action.onClick msg
            |> Ui.Attribute.ariaLabel "close"
            |> List.singleton
            |> flip List.append

  in
    [ Ui.leaf "div"
      |> Ui.Modifier.add "modal-background"

    , [ args.content ]
      |> Ui.container "div"
      |> Ui.Modifier.add "modal-content"

    ]
      |> withClose
      |> Ui.container "div"
      |> Ui.Modifier.add "modal"


{-|

  { heading =
  , body =
  , footerItems =
  , close = Msg.CloseModal
  }
    |> Component.Modal.card
    
-}
card : { heading : String, body : Ui.Element msg, footerItems : List (Ui.Element msg), close : Maybe msg } -> Ui.Element msg
card args =
  let
    withHeader =
      case (args.heading, args.close) of
        ( "", Nothing ) ->
          identity

        ( _, Nothing ) ->
          [ args.heading
            |> Ui.textWrapper "p"
            |> Ui.Modifier.add "modal-card-title"

          ]
            |> Ui.container "header"
            |> Ui.Modifier.add "modal-card-head"
            |> List.singleton
            |> flip List.append

        ( _, Just msg ) ->
          [ args.heading
            |> Ui.textWrapper "p"
            |> Ui.Modifier.add "modal-card-title"

          , Ui.Button.delete msg
            |> Ui.Attribute.ariaLabel "close"

          ]
            |> Ui.container "header"
            |> Ui.Modifier.add "modal-card-head"
            |> List.singleton
            |> flip List.append

    withFooter =
      case args.footerItems of
        [] ->
          identity

        _ ->
          args.footerItems
            |> Ui.container "footer"
            |> Ui.Modifier.add "modal-card-foot"
            |> List.singleton
            |> flip List.append

    withBody =
      [ args.body ]
        |> Ui.container "div"
        |> Ui.Modifier.add "modal-card-body"
        |> List.singleton
        |> flip List.append

  in
    [ Ui.leaf "div"
      |> Ui.Modifier.add "modal-background"

    ]
      |> withHeader
      |> withBody
      |> withFooter
      |> Ui.container "div"
      |> Ui.Modifier.add "modal"
