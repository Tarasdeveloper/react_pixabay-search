import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import * as Api from 'services/api';
import Button from 'components/Button/Button';
import { AppComponent } from './App.styled';
import Modal from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
// import icon from '../../icons/search.svg';

const toastConfig = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

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
    Api.apiService(searchValue, page, per_page)
      .then(({ hits, totalHits }) => {
        const { page, per_page } = this.state;

        if (hits.length === 0) {
          this.setState({ isLoader: false, visibleBtn: false });
          toast.error('Sorry, there we do not have result');
          return;
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          visibleBtn: page < Math.ceil(totalHits / per_page),
        }));
        toast.success('Pictures were successfully loaded!', toastConfig);
      })
      .catch(error => console.log(error));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmitForm = searchValue => {
    this.setState({ searchValue, page: 1, images: [] });
  };

  toggleModal = images => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImage: images,
    }));
  };

  render() {
    const { images, visibleBtn, showModal, selectedImage, isLoader } =
      this.state;
    return (
      <AppComponent>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {visibleBtn && <Button onClick={this.loadMore} />}
        {isLoader && <Loader />}
        {showModal && (
          <Modal imgLarge={selectedImage} onClose={this.toggleModal} />
        )}
        <ToastContainer autoClose={3000} />
      </AppComponent>
    );
  }
}

export default App;
