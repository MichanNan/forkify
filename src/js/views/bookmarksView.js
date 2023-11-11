import View from './view';
import preiviewView from './preiviewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it.';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => preiviewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
