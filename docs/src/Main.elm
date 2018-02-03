

-- Project
import Model
import Msg
import Update
import View
-- Frameworks
import Dom.Program
import Effect.Routing


main : Program Never Model.Model Msg.Msg
main =
   Model.initial
    |> Dom.Program.setup View.view
    |> Dom.Program.update Update.update
    |> Effect.Routing.run (Model.fromLocation, Msg.Route)
