import PropTypes from "prop-types";
import css from './MainWrapper.module.css'

export const MainWrapper = ({ task, children }) => (
  <div className={css["main-wrapper"]}>
    <h2 className={css.task}>Task: {task}</h2>
    {children}
  </div>
);

MainWrapper.propTypes = {
  task: PropTypes.string.isRequired
};