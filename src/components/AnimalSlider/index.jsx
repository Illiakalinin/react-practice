import { Component } from 'react';
import defaultImg from './defaultImg.jpg';
import styles from './AnimalSlider.module.sass';

class AnimalSlider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      imgSrc: defaultImg,
      caption: 'This is some dog)',
    };
    this.id = null;
  }

  // прописати завантаження зображення в componentDidMount

  loadImg = () => {
    console.log('load');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ imgSrc: data.message }))
      .catch(err => console.log(err));
  };

  componentDidMount () {
    // this.id = setInterval(this.loadImg, 2000);
    this.loadImg();
  }

  componentDidUpdate () {
    this.id = setTimeout(this.loadImg, 2000);
  }

  componentWillUnmount () {
    // clearInterval(this.id);
    clearTimeout(this.id);
  }

  render () {
    const { imgSrc, caption } = this.state;

    return (
      <figure className={styles.sliderContainer}>
        <img src={imgSrc} alt='dog' />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}

export default AnimalSlider;
