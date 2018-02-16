module Page.Customize exposing
  ( Id(..)
  , hash, title
  , fromHash
  )



type Id
  = Modifier
  | Attribute
  | Action
  | Style


hash : Id -> String
hash id =
  case id of
    Modifier ->
      "/modifier"

    Attribute ->
      "/attribute"

    Action ->
      "/action"

    Style ->
      "/style"


title : Id -> String
title id =
  case id of
    Modifier ->
      "Modifier"

    Attribute ->
      "Attribute"

    Action ->
      "Action"

    Style ->
      "Style"


fromHash : List String -> Maybe Id
fromHash parsed =
  case (parsed |> List.head) of
    Nothing ->
      Just Modifier

    Just next ->
      ( case next of
        "" ->
          Just Modifier

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
