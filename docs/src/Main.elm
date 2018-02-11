

-- Project
import Model
import Msg
import Update
import View
-- Frameworks
import Dom.Program
import Effect.Routing
import Effect.Url


main : Program Never Model.Model Msg.Msg
main =
   Model.initial
    |> Dom.Program.setup View.view
    |> Dom.Program.updateWithCmds Update.update
    |> Effect.Routing.run (Model.fromLocation, Msg.Route)
