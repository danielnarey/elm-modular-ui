module Page.Customize exposing
  ( Id(..)
  , hash, title, ancestors
  , fromHash
  )



type Id
  = Index
  | Modifier
  | Attribute
  | Action
  | Style


hash : Id -> String
hash id =
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


title : Id -> String
title id =
  case id of
    Index ->
      "Customize"

    Modifier ->
      "Modifier"

    Attribute ->
      "Attribute"

    Action ->
      "Action"

    Style ->
      "Style"


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
