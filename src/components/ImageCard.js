import React from "react";

/*
 * ref -> the system you use instead of the DOM
 * it gives access to a single DOM element
 * Create refs in the constructor, assign them to instance vars and pass them to a particular JSX as props
 */

class ImageCard extends React.Component {
  constructor() {
    super();
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
