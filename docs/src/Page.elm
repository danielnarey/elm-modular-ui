module Page exposing
  ( Id(..)
  , hash, title
  , fromHash
  )


-- Project
import Page.Interactive
import Page.Content
import Page.Customize


type Id
  = Home
  | Interactive Page.Interactive.Id
  | Content Page.Content.Id
  | Customize Page.Customize.Id


hash : Id -> String
hash id =
  case id of
    Home ->
      "#/"

    Interactive subId ->
      subId
        |> Page.Interactive.hash
        |> String.append "#/interactive-elements"

    Content subId ->
      subId
        |> Page.Content.hash
        |> String.append "#/content-elements"

    Customize subId ->
      subId
        |> Page.Customize.hash
        |> String.append "#/customize"


title : Id -> String
title id =
  case id of
    Home ->
      "Overview"

    Interactive subId ->
      subId
        |> Page.Interactive.title

    Content subId ->
      subId
        |> Page.Content.title

    Customize subId ->
      subId
        |> Page.Customize.title


fromHash : String -> Maybe Id
fromHash path =
  let
    parsed =
      path
        |> String.split "/"
        |> List.drop 1

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
              |> Page.Interactive.fromHash
              |> Maybe.map Interactive

          "content-elements" ->
            parsed
              |> List.drop 1
              |> Page.Content.fromHash
              |> Maybe.map Content

          "customize" ->
            parsed
              |> List.drop 1
              |> Page.Customize.fromHash
              |> Maybe.map Customize

          _ ->
            Nothing

        )
