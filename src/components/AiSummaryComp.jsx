import PropTypes from 'prop-types';

export const AiSummaryComp = ({title, text, button, chart}) => {
  return (
    <div className='w-[90%] md:w-[28%] h-[80%] bg-[#0a0a0a] flex flex-col rounded-lg p-4 justify-between'>
      <span className='w-full text-white text-[24px] font-semibold'>
        {title}
      </span>
      <span className="w-full text-white text-[15px]">
        {text}
      </span>
      <div className='w-full h-max mb-4'>
      {chart}
      </div>
      <span className='w-full h-[30px] flex justify-center'>
        <button className='w-[85%] h-full bg-white rounded-full text-[#0a0a0a] flex justify-center items-center'>
          {button}
        </button>
      </span>
    </div>
  )
}

AiSummaryComp.propTypes = {
  text: PropTypes.element,
  title: PropTypes.string,
  chart: PropTypes.element,
  button: PropTypes.string,
};
