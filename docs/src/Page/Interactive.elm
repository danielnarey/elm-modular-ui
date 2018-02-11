module Page.Interactive exposing
  ( Id(..)
  , hash, title, ancestors
  , fromHash
  )



type Id
  = Index
  | Buttons
  | Input
  | Selectors
  | Indicators


hash : Id -> String
hash id =
  case id of
    Index ->
      "/"

    Buttons ->
      "/buttons"

    Input ->
      "/input"

    Selectors ->
      "/selectors"

    Indicators ->
      "/indicators"


title : Id -> String
title id =
  case id of
    Index ->
      "Interactive"

    Buttons ->
      "Buttons"

    Input ->
      "Input"

    Selectors ->
      "Selectors"

    Indicators ->
      "Indicators"


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

        "buttons" ->
          Just Buttons

        "input" ->
          Just Input

        "selectors" ->
          Just Selectors

        "indicators" ->
          Just Indicators

        _ ->
          Nothing

      )
