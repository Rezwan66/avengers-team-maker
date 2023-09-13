import PropTypes from 'prop-types';

const Basket = props => {
  return (
    <div>
      <div className="bg-white rounded-md text-primary card-body">
        <h3 className="text-3xl font-bold ">Members Selected: </h3>
        <p className="text-xl">Remaining balance: </p>
        <p className="text-xl">Total Cost: </p>
        <ul></ul>
      </div>
    </div>
  );
};

Basket.propTypes = {};

export default Basket;
