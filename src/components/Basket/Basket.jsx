import PropTypes from 'prop-types';

const Basket = ({ selected }) => {
  //   console.log(selected);
  return (
    <div>
      <div className="bg-white rounded-md text-primary card-body">
        <h3 className="text-3xl font-bold ">
          Members Selected: {selected.length}
        </h3>
        <p className="text-xl">Remaining balance: </p>
        <p className="text-xl mb-6">Total Cost: </p>

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
};

export default Basket;
