import React, { Component } from 'react';
import Modal from 'react-modal';
import programHeaderStyles from './program-header.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%'
  }
};

export default class ProgramHeader extends Component {
  constructor() {
    super();

    this.state = { 
      modalIsOpen: false 
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { program } = this.props;

    return (
      <div className={programHeaderStyles.container}>
        <h3>{program.name}</h3>
        <button onClick={this.openModal}>Learn more</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="More about this program"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>More about this program</h2>
          <p>{program.description}</p>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    )
  }
}