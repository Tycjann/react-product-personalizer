import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {
          props.sizes.map(propsSize =>
            <li key={propsSize.name}>
              <button
                type="button"
                className={clsx(propsSize.name === props.currentSize && styles.active)}
                onClick={props.changeSize}
                value={propsSize.name} > {propsSize.name} </button></li>
          )
        }
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  changeSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired
}

export default OptionSize;