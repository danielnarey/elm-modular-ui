module Page exposing
  ( Id(..)
  , url, fromPath
  )



import Page.Interactive
import Page.Content
import Page.Customize


type Id
  = Home
  | Interactive Page.Interactive.Id
  | Content Page.Content.Id
  | Customize Page.Customize.Id


url : Id -> String
url id =
  let
    path =
      case id of
        Home ->
          "/"

        Interactive subId ->
          subId
            |> Page.Interactive.url
            |> String.append "/interactive-elements"

        Content subId ->
          subId
            |> Page.Content.url
            |> String.append "/content-elements"

        Customize subId ->
          subId
            |> Page.Customize.url
            |> String.append "/customize"

  in
    path
      |> String.append "http://danielnarey.com/elm-modular-ui"


fromPath : String -> Maybe Id
fromPath path =
  let
    parsed =
      path
        |> String.split "/"
        |> List.drop 2

  in
    case (parsed |> List.head) of
      Nothing ->
        Just Home

      Just first ->
        ( case first of
          "" ->
            Just Home

          "interactive-elements" ->
            parsed
              |> List.drop 1
              |> Page.Interactive.fromPath
              |> Maybe.map Interactive

          "content-elements" ->
            parsed
              |> List.drop 1
              |> Page.Content.fromPath
              |> Maybe.map Content

          "customize" ->
            parsed
              |> List.drop 1
              |> Page.Customize.fromPath
              |> Maybe.map Customize

          _ ->
            Nothing

        )
