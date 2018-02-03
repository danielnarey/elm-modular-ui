module Page.Customize exposing
  ( Id(..)
  , url, fromPath
  )



type Id
  = Index
  | Modifier
  | Attribute
  | Action
  | Style


url : Id -> String
url id =
  case id of
    Index ->
      "/"

    Modifier ->
      "/modifier"

    Attribute ->
      "/attribute"

    Action ->
      "/action"

    Style ->
      "/style"


fromPath : List String -> Maybe Id
fromPath parsed =
  case (parsed |> List.head) of
    Nothing ->
      Just Index

    Just next ->
      ( case next of
        "" ->
          Just Index

        "modifier" ->
          Just Modifier

        "attribute" ->
          Just Attribute

        "action" ->
          Just Action

        "style" ->
          Just Style

        _ ->
          Nothing

      )
