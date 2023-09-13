import PropTypes from 'prop-types';

const Card = ({ card }) => {
  const { name, age, role, image, country, salary } = card;
  return (
    <div>
      <div className="card hero-overlay bg-opacity-85">
        <figure>
          <img className="rounded-full w-24" src={image} alt="car!" />
        </figure>
        <div className="card-body text-white space-y-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>
            <strong>{role}</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            culpa?
          </p>
          <div className="flex">
            <p>
              <small>Salary: $ {salary}</small>
            </p>
            <p>
              <small>Country: {country}</small>
            </p>
            <p>
              <small>Age: {age}</small>
            </p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary capitalize">Add to Team</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
