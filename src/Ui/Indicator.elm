module Ui.Indicator exposing
  ( tag, notification, progress
  , withDelete
  )

{-|

# Interactive Element: Indicator
Indicators are stylized, interactive elements indended to highlight information
or notify the user of something. Bulma CSS provides default styling and
color and size modifiers for three types of indicators: tags, notifications, and
progress bars. A delete button may be added to a tag or notification in order to
allow the user to remove or dismiss it.

@docs tag, notification, progress

## Adding Interaction
@docs withDelete

-}

import Ui
import Dom.Element
import Dom.Property
import Dom.Attribute
import Dom.Event
import Dom.Text

import Ui.Button

{-| Construct an tag label

    "My Tag"
      |> Ui.Indicator.tag
      |> Ui.render

    --> <span class="tag" role="note">My Tag</span>

+ __HTML tag__: `<span>`
+ __ARIA role__: *note*
+ __Element class__: *.tag*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/tag/#colors),
[size](http://bulma.io/documentation/elements/tag/#sizes),
[style](http://bulma.io/documentation/elements/tag/#modifiers),
[grouping](http://bulma.io/documentation/elements/tag/#list-of-tags)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/tag/

-}
tag : String -> Ui.Element msg
tag =
  Dom.Element.textWrapper "span"
    >> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "note"

      ]

    >> Dom.Element.withClasses
      [ "tag" ]


{-| Construct a notification block

    "You are awesome."
      |> Ui.Indicator.notification
      |> Ui.render

    --> <div class="notification" role="alert">You are awesome.</div>

+ __HTML tag__: `<div>`
+ __ARIA role__: *alert*
+ __Element class__: *.notification*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/notification/#colors)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/notification/

-}
notification : String -> Ui.Element msg
notification =
  Dom.Element.textWrapper "div"
    >> Dom.Element.withAttributes
      [ "role"
        |> Dom.Attribute.string "alert"

      ]

    >> Dom.Element.withClasses
      [ "notification" ]


{-| Construct a progress bar

    15
      |> Ui.Indicator.progress
      |> Ui.render

    --> <progress class="progress" value="15" max="100">15%</progress>

+ __HTML tag__: `<progress>`
+ __ARIA role__: *progressbar* (default)
+ __Element class__: *.progress*
+ __Available modifiers__: [color](http://bulma.io/documentation/elements/progress/#colors),
[size](http://bulma.io/documentation/elements/progress/#sizes)
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/progress/

-}
progress : Int -> Ui.Element msg
progress currentValue =
  currentValue
    |> Basics.toString
    |> flip String.append "%"
    |> Dom.Element.textWrapper "progress"
    |> Dom.Element.withClasses
      [ "progress" ]

    |> Dom.Element.withAttributes
      [ "value"
        |> Dom.Property.int (currentValue |> clamp 0 100)
      , "max"
        |> Dom.Property.int 100

      ]


{-| Add a delete button to a tag or notification

    "You are awesome."
      |> Ui.Indicator.notification
      |> Ui.Indicatior.withDelete HideNotification
      |> Ui.render

    --> <div class="notification" role="alert">
    --    <button class="delete" aria-label="Hide notification"></button>
    --    You are awesome.
    --  </div>

+ __HTML tag__: `<button>`
+ __ARIA role__: *button* (default)
+ __ARIA attribute__: *aria-label*: Assigned a label corresponding to the
element class of the parent ("Remove tag", "Dismiss notification", or "Delete" as a default)
+ __Element class__: *.delete*
+ __Available modifiers__: none available when using this constructor
+ __Bulma CSS reference__: http://bulma.io/documentation/elements/delete/#combinations

-}
withDelete : msg -> Ui.Element msg -> Ui.Element msg
withDelete msg indicator =
  let
    label =
      if (indicator |> Dom.Element.hasClass "tag")
      then "Remove tag"

      else if (indicator |> Dom.Element.hasClass "notification")
      then "Dismiss notification"

      else "Delete"

    internalText =
      indicator.text
        |> Dom.Text.node

    deleteButton =
      Ui.Button.delete msg
        |> Dom.Element.addAttribute
          ( "aria-label"
            |> Dom.Attribute.string label

          )

        |> Dom.Element.toNode

  in
    indicator
      |> Dom.Element.withText ""
      |> Dom.Element.withChildNodes
        ( deleteButton :: internalText :: indicator.children )
