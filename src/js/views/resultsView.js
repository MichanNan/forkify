import View from './view';
import preiviewView from './preiviewView';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your search, please try again!';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(result => preiviewView.render(result, false))
      .join('');
  }
}

export default new ResultView();
