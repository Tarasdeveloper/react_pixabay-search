import React, { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import * as Api from 'services/api';
import Button from 'components/Button/Button';
import { AppComponent } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    per_page: 12,
    images: [],
    showModal: false,
    selectedImage: '',
    isLoader: false,
    visibleBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page, per_page } = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.fetchPictures(searchValue, page, per_page);
    }
  }

  fetchPictures = (searchValue, page, per_page) => {
    Api.apiService(searchValue, page, per_page).then(({ hits, totalHits }) => {
      const { page, per_page } = this.state;

      if (hits.length === 0) {
        this.setState({ isLoader: false });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        visibleBtn: page < Math.ceil(totalHits / per_page),
      }));
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  hendleSubmitForm = searchValue => {
    this.setState({ searchValue, page: 1, images: [] });
  };

  render() {
    return (
      <AppComponent>
        <Searchbar onSubmit={this.hendleSubmitForm} />
        <ImageGallery images={this.state.images} />
        {this.state.visibleBtn && <Button onClick={this.loadMore} />}
      </AppComponent>
    );
  }
}

export default App;
