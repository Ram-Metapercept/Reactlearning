// book actions creator are the creator which is a function it returns a action
import {buy_book} from "./BookTypes"

export const purchase_book = () => {
  return {
    type: buy_book
  }
}

export default purchase_book;
