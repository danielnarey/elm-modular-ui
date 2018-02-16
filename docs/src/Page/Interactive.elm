module Page.Interactive exposing
  ( Id(..)
  , hash, title
  , fromHash
  )


type Id
  = Buttons
  | Input
  | Selectors
  | Indicators


hash : Id -> String
hash id =
  case id of
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
    Buttons ->
      "Buttons"

    Input ->
      "Input"

    Selectors ->
      "Selectors"

    Indicators ->
      "Indicators"


fromHash : List String -> Maybe Id
fromHash parsed =
  case (parsed |> List.head) of
    Nothing ->
      Just Buttons

    Just next ->
      ( case next of
        "" ->
          Just Buttons

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
