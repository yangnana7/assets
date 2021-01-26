import { v4 as uuid } from "uuid";
import * as moment from "moment";

const Now = moment().format("YYYY-MM-DDThh:mm");
const types = ["long", "shot"];
const trades = ["open", "close"];
const names = [
  { _id: "3148", name: "CSH" },
  { _id: "3760", name: "CAVE" },
  { _id: "8053", name: "MITUBISHI" },
  { _id: "8058", name: "SUMITOMO" },
];

const defaultValue = {
  _id: uuid(),
  date: Now,
  type: _.sample(types),
  name: _.sample(names._id),
  trade: _.sample(trades),
  price: _.random(300, 4000, true),
  lot: _.random(100, 500, false),
  memo: "some memo",
};
