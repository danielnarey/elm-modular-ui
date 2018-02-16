module Tab exposing
  ( Id(..)
  , fromPage
  )


import Page


type Id
  = Interactive
  | Content
  | Customize


fromPage : Page.Id -> Id
fromPage page =
  case page of
    Page.Home ->
      Interactive

    Page.Interactive _ ->
      Interactive

    Page.Content _ ->
      Content

    Page.Customize _ ->
      Customize
