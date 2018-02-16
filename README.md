# Modular UI for Elm
### A friendly UI development framework based on Bulma CSS

**New:** Live example code at http://danielnarey.com/elm-modular-ui

+ Modular UI is a framework for building a modern user interface in Elm that
abstracts out a lot of the details of the underlying HTML and CSS. It also provides a set of helpers for updating
an element's
[classes](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Modifier),
[attributes](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Attribute),
[styles](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Style),
and [mouse/keyboard event handlers](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Action).
+ Modular UI is partially inspired by and designed to be used with the Bulma CSS
framework ([docs](http://bulma.io/), [github](https://github.com/jgthms/bulma)).
Many of the constructor functions apply Bulma element classes to provide default
styling that will give your layout and controls a clean, modern look. Bulma
modifier classes can be used for easy customization, and available modifiers
for each element class are listed in the package documentation. Alternatively,
you can use the class names indicated in the documentation to write custom CSS
for your application.
+ Modular UI element constructors automate the implementation
[ARIA](https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/)
web accessibility features where appropriate. The package also includes a set of
[helpers](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Attributes#Helpers-for-common-ARIA-attributes)
for adding common ARIA attributes where needed.
+ Modular UI is backed by my
[Semantic Dom](https://github.com/danielnarey/elm-semantic-dom)
package, which provides an interface to Elm
[VirtualDom](http://package.elm-lang.org/packages/elm-lang/virtual-dom/2.0.4/VirtualDom).
In particular, Modular UI constructors and modifiers rely on Semantic Dom's
[Element](http://package.elm-lang.org/packages/danielnarey/elm-semantic-dom/latest/Dom-Element)
module, which makes it possible to construct elements as updatable Elm records
before they are rendered to unmodifiable VirtualDom nodes.


## Versions
- 1.0.0: Complete with respect to features; in-browser testing is ongoing
- 1.0.1: Documentation fixes; minor change in event handling for `Ui.Input.float`
- 1.0.2: Bug fixes for delete button and SVG icon constructors

## Package Modules

### Basics
- [Ui](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui)

### Interactive Elements
- [Ui.Button](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Button)
- [Ui.Input](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Input)
- [Ui.Selector](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Selector)
- [Ui.Indicator](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Indicator)

### Content Elements
- [Ui.Text](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Text)
- [Ui.Heading](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Heading)
- [Ui.Icon](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Icon)
- [Ui.Media](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Media)
- [Ui.Source](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Source)

### Customizing Appearance and Interaction
- [Ui.Modifier](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Modifier)
- [Ui.Attribute](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Attribute)
- [Ui.Action](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Action)
- [Ui.Style](http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest/Ui-Style)
