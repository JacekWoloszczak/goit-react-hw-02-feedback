import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
