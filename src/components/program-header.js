import React, { Component } from "react";
import Modal from "react-modal";
import programHeaderStyles from "../styles/program-header.module.css";

export default class ProgramHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      modalIsOpen: false 
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement("body");
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { name, description } = this.props;

    return (
      <div className={programHeaderStyles.container}>
        <h3>{name}</h3>
        <button 
          className={programHeaderStyles.modalButton}
          onClick={this.openModal}
          >Learn more
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="More about this program"
          className={programHeaderStyles.modal}
        >
          <div className={programHeaderStyles.modalHeader}>
            <h2>{name}</h2>
            <span 
              className={programHeaderStyles.closeModal} 
              onClick={this.closeModal}
            >
              x
            </span>
          </div>
          <p>{description}</p>
        </Modal>
      </div>
    )
  }
}