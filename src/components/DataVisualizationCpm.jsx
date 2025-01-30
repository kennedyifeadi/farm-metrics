import PropTypes from 'prop-types';

export const DataVisualizationComp = ({title, text}) => {
  return (
    <div className='flex flex-col text-[#0a0a0a] shadow-md w-full md:w-[30%] p-2 rounded-xl bg-white'>
        <h1 className='text-[18px] font-semibold'>{title}</h1>
        <span className='text-[15px]'>{text}</span>
    </div>
  )
}

DataVisualizationComp.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};
