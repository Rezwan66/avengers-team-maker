import PropTypes from 'prop-types';

const Basket = ({ selected, remaining, cost }) => {
  //   console.log(selected);
  return (
    <div>
      <div className="bg-white rounded-md text-primary card-body">
        <h3 className="text-3xl font-bold ">
          Members Selected: {selected.length}
        </h3>
        <p className="text-xl font-semibold">Remaining Balance:</p>
        <p className="text-xl font-semibold">$ {remaining}</p>
        <p className="text-xl font-semibold">Total Cost:</p>
        <p className="text-xl font-semibold mb-6">$ {cost}</p>

        {selected.map((item, idx) => (
          <li key={idx} className="text-left w-[180px] mx-auto">
            <strong>{item.name}</strong>
          </li>
        ))}
      </div>
    </div>
  );
};

Basket.propTypes = {
  selected: PropTypes.array.isRequired,
  remaining: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
};

export default Basket;
