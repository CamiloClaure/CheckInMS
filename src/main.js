"use strict"
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, "__esModule", {value: true})
const express_1 = __importDefault(require("express"))
const body_parser_1 = __importDefault(require("body-parser"))
const Cooker_1 = __importDefault(require("./strategy/Cooker"))
const GenericCooker_1 = __importDefault(require("./strategy/GenericCooker"))
const CalabresaCooker_1 = __importDefault(require("./strategy/CalabresaCooker"))
const HawaianaCooker_1 = __importDefault(require("./strategy/HawaianaCooker"))
const Promo_1 = __importDefault(require("./strategyPromo/Promo"))
const TuesdayWednesdayPromo_1 = __importDefault(require("./strategyPromo/TuesdayWednesdayPromo"))
const ThursdayPromo_1 = __importDefault(require("./strategyPromo/ThursdayPromo"))
const GenericPromo_1 = __importDefault(require("./strategyPromo/GenericPromo"))
const app = (0, express_1.default)()
app.listen(3000)
app.use(body_parser_1.default.json())
let context = new Cooker_1.default()
let contextPromo = new Promo_1.default()
const pizzaTypes = {
  calabresa: new CalabresaCooker_1.default(),
  hawaiana: new HawaianaCooker_1.default()
}
app.post("/", function (req, res) {
  const pizza = req.body.pizza
  const ingredients = req.body.ingredients
  const day = req.body.day
  try {
    const cookedPizza = getPizza(pizza, ingredients)
    res.send(determineOrder(cookedPizza, day))
  } catch {
    res.status(400).send("Ocurrio un error en el pedido")
  }
})
function determineOrder(pizza, day) {
  switch (day) {
    case "martes":
      contextPromo.setStrategy(new TuesdayWednesdayPromo_1.default())
      break
    case "miercoles":
      contextPromo.setStrategy(new TuesdayWednesdayPromo_1.default())
      break
    case "jueves":
      contextPromo.setStrategy(new ThursdayPromo_1.default())
      break
    default:
      contextPromo.setStrategy(new GenericPromo_1.default("No promo"))
      break
  }
  return {
    pizza,
    promo: contextPromo.getPromoName(),
    totalPrice: contextPromo.calculatePizzaTotalPrice(pizza.getPrice())
  }
}
function getPizza(pizza, ingredients) {
  switch (pizza) {
    case "calabresa":
      context.setStrategy(new CalabresaCooker_1.default())
      break
    case "hawaiana":
      context.setStrategy(new HawaianaCooker_1.default())
      break
    case "personalizada":
      context.setStrategy(new GenericCooker_1.default(ingredients))
      break
    default:
      throw "Pizza not found"
  }
  return context.cookThePizza()
}
