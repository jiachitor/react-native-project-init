
import { observable, action } from 'mobx';

class SearchStore1111 {
  @observable query = '123'


  @action
  addQury = (z) => {
    return this.query = z
  }
}

export default new SearchStore1111()