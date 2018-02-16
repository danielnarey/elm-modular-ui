module Page.Content exposing
  ( Id(..)
  , hash, title
  , fromHash
  )


type Id
  = Text
  | Heading
  | Icon
  | Media
  | Source


hash : Id -> String
hash id =
  case id of
    Text ->
      "/text"

    Heading ->
      "/heading"

    Icon ->
      "/icon"

    Media ->
      "/media"

    Source ->
      "/source"


title : Id -> String
title id =
  case id of
    Text ->
      "Text"

    Heading ->
      "Heading"

    Icon ->
      "Icon"

    Media ->
      "Media"

    Source ->
      "Source"


fromHash : List String -> Maybe Id
fromHash parsed =
  case (parsed |> List.head) of
    Nothing ->
      Just Text

    Just next ->
      ( case next of
        "" ->
          Just Text

        "text" ->
          Just Text

        "heading" ->
          Just Heading

        "icon" ->
          Just Icon

        "media" ->
          Just Media

        "source" ->
          Just Source

        _ ->
          Nothing

      )
