import PropTypes from 'prop-types';

export const Cards = ({srcImg, bgCustom}) => {

  return(
    <>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
    
       </figure>
  <div className={`card-body ${bgCustom}`}>
    <img src={srcImg} height={40} width={40} className="justify-start" alt="Shoes" />
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>)
}

Cards.propTypes = {
  srcImg: PropTypes.string.isRequired,
  bgCustom: PropTypes.string
}; 
