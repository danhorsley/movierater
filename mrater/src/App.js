import React, {useState} from 'react';
import Modal from 'react-modal';
import './App.css';
import Rating from './Rating';
import ctown from './images/ctown.jpg';
import brun from './images/brun.jpg';
import apocnow from './images/apocnow.jpg';
import rbiz from './images/rbiz.jpg';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rating, setRating] = useState(0);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  const handleRate = (value) => {
    setRating(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
        <div className="grid-container">
        <img src={ctown} alt="Chinatown" className="grid-item" onClick={() => openModal(ctown)}/>
        <img src={brun} alt="Blade Runner" className="grid-item" onClick={() => openModal(brun)}/>
        <img src={apocnow} alt="Apocalypse Now" className="grid-item" onClick={() => openModal(apocnow)}/>
        <img src={rbiz} alt="Risky Business" className="grid-item" onClick={() => openModal(rbiz)}/>
        </div>
       </header>
        <Modal isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        contentLabel="ImageModal"
        className="Modal"
        overlayClassName="Overlay"
        >
          <button onClick={closeModal}>Close</button>
          {selectedImage && (
            <div className="modal-content">
              <img src={selectedImage} alt='Selected' className="modal-image" />
              <div className="modal-text">
                <h2>Rate this movie</h2>
                <Rating onRate={handleRate} />
              <p>Your rating: {rating} stars</p>
              <button onClick={closeModal}>OK</button>
              </div>
              </div>
          )}
        </Modal>
   </div>
  );
}

export default App;
