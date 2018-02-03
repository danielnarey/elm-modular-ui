module Page.Interactive exposing
  ( Id(..)
  , url, fromPath
  )



type Id
  = Index
  | Buttons
  | Input
  | Selectors
  | Indicators


url : Id -> String
url id =
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


fromPath : List String -> Maybe Id
fromPath parsed =
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
