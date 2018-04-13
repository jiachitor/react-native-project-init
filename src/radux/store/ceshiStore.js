
import { observable, action } from 'mobx';

class SearchStore {
  @observable query = '点击跳转'


  @action
  addQury = (z) => {
    return this.query = z
  }
}

export default new SearchStore()