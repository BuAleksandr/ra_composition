import PropTypes from 'prop-types';

export default function Cards(props) {
  const image = props.image;
  return (
    <div className="card">
      {image && <img src={image} alt="card" />}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}

Cards.propTypes = {
  image: PropTypes.string,
}

Cards.defaultProps = {
  image: '',
};