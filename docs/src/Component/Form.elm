module Component.Form exposing
  ( control, field
  , withIconLeft, withIconRight
  , withHelpText
  , fieldSet, fieldGroup, fieldAddons, horizontal
  )


{-|

# Basics
@docs control, field

## Adding icons to a control
@docs withIconLeft, withIconRight

## Adding help text to a field
@docs withHelpText


# Grouping Controls

## Aligned vertically
@docs fieldSet

## Aligned horizontally
@docs fieldGroup

## "Added on" horizontally
@docs fieldAddons


# Grouping Fields

## Aligned horizontally with a group label
@docs horizontal

-}

import Ui
import Ui.Modifier
import Ui.Attribute
import Dom.Element


control : Ui.Element msg -> Ui.Element msg
control =
  List.singleton
    >> Ui.container "div"
    >> Ui.Modifier.add "control"


field : { label : Ui.Element msg, control : Ui.Element msg } -> Ui.Element msg
field args =
  [ args.label
  , args.control
  ]
    |> Ui.container "div"
    |> Ui.Modifier.add "field"


withIconLeft : Ui.Element msg -> Ui.Element msg ->  Ui.Element msg
withIconLeft iconElement =
  Ui.Modifier.add "has-icons-left"
    >> Dom.Element.appendChild
      ( iconElement
        |> Ui.Modifier.add "is-left"
      )


withIconRight : Ui.Element msg -> Ui.Element msg ->  Ui.Element msg
withIconRight iconElement =
  Ui.Modifier.add "has-icons-right"
    >> Dom.Element.appendChild
      ( iconElement
        |> Ui.Modifier.add "is-right"
      )


withHelpText : Ui.Element msg -> Ui.Element msg -> Ui.Element msg
withHelpText textElement =
  Dom.Element.appendChild
    ( textElement
      |> Ui.Modifier.add "help"
    )


fieldSet : { id : Int, label : String, controls : List (Ui.Element msg) } -> Ui.Element msg
fieldSet args =
  let
    idString =
      args.id
        |> Basics.toString
        |> String.append "label-controls-"

    prependLabel =
      case args.label of
        "" ->
          identity

        _ ->
          ( args.label
            |> Ui.textWrapper "p"
            |> Ui.setId idString
            |> Dom.Element.prependChild

          )
            >> Ui.Attribute.ariaLabelledBy idString

  in
    args.controls
      |> Ui.container "div"
      |> prependLabel
      |> Ui.Modifier.add "field"
      |> Ui.Attribute.role "group"


fieldGroup : { id : Int, label : String, controls : List (Ui.Element msg) } -> Ui.Element msg
fieldGroup args =
  let
    idString =
      args.id
        |> Basics.toString
        |> String.append "label-controls-"

    prependLabel =
      case args.label of
        "" ->
          identity

        _ ->
          ( args.label
            |> Ui.textWrapper "p"
            |> Ui.setId idString
            |> Dom.Element.prependChild

          )
            >> Ui.Attribute.ariaLabelledBy idString

  in
    args.controls
      |> Ui.container "div"
      |> prependLabel
      |> Ui.Modifier.addList
        [ "field"
        , "is-grouped"
        ]
      |> Ui.Attribute.role "group"


fieldAddons : { id : Int, label : String, controls : List (Ui.Element msg) } -> Ui.Element msg
fieldAddons args =
  let
    idString =
      args.id
        |> Basics.toString
        |> String.append "label-controls-"

    prependLabel =
      case args.label of
        "" ->
          identity

        _ ->
          ( args.label
            |> Ui.textWrapper "p"
            |> Ui.setId idString
            |> Dom.Element.prependChild

          )
            >> Ui.Attribute.ariaLabelledBy idString

  in
    args.controls
      |> Ui.container "div"
      |> prependLabel
      |> Ui.Modifier.addList
        [ "field"
        , "has-addons"
        ]
      |> Ui.Attribute.role "group"


horizontal : { id : Int, label : String, size : String, fields : List (Ui.Element msg) } -> Ui.Element msg
horizontal args =
  let
    idString =
      args.id
        |> Basics.toString
        |> String.append "label-fields-"

    withLabelModifiers =
      case args.size of
        "" ->
          Ui.Modifier.add "field-body"

        _ ->
          Ui.Modifier.addList
            [ "field-body"
            , args.size
            ]

    fieldLabel =
      [ args.label
        |> Ui.textWrapper "p"
        |> Ui.Modifier.add "label"
        |> Ui.setId idString

      ]
        |> Ui.container "div"
        |> withLabelModifiers

    fieldBody =
      args.fields
        |> Ui.container "div"
        |> Ui.Modifier.add "field-body"
        |> Ui.Attribute.role "group"
        |> Ui.Attribute.ariaLabelledBy idString

  in
    [ fieldLabel
    , fieldBody
    ]
      |> Ui.container "div"
      |> Ui.Modifier.addList
        [ "field"
        , "is-horizontal"
        ]
