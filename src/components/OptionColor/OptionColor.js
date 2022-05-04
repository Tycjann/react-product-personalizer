import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {
          props.colors.map(propsColor =>
            <li key={propsColor}>
              <button
                type="button"
                className={clsx(styles[props.colorClassName(propsColor)], propsColor === props.currentColor && styles.active)}
                value={propsColor}
                onClick={props.changeColor}
              /></li>
          )
        }
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  changeColor: PropTypes.func.isRequired,
  colorClassName: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired
}

export default OptionColor;