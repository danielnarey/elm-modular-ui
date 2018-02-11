module Page.Content exposing
  ( Id(..)
  , hash, title, ancestors
  , fromHash
  )


type Id
  = Index
  | Text
  | Heading
  | Icon
  | Media
  | Source


hash : Id -> String
hash id =
  case id of
    Index ->
      "/"

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
    Index ->
      "Content"

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


ancestors : Id -> List (String, Id)
ancestors id =
  case id of
    Index ->
      []

    _ ->
      [ ( Index |> title, Index) ]


fromHash : List String -> Maybe Id
fromHash parsed =
  case (parsed |> List.head) of
    Nothing ->
      Just Index

    Just next ->
      ( case next of
        "" ->
          Just Index

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
