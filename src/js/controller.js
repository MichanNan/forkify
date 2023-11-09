import * as model from './model.js';

import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controllRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // loading recipe
    await model.loadRecipe(id);

    //rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search result
    await model.loadSearchResults(query);

    //render search result
    resultsView.render(model.getSearchResultsPage());

    //render initial pagination
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controllPagination = function (goToPage) {
  //render new result
  resultsView.render(model.getSearchResultsPage(goToPage));

  //render new pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controllRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controllPagination);
};

init();
