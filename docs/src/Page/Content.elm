module Page.Content exposing
  ( Id(..)
  , url, fromPath
  )


type Id
  = Index
  | Text
  | Heading
  | Icon
  | Media
  | Source


url : Id -> String
url id =
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


fromPath : List String -> Maybe Id
fromPath parsed =
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
