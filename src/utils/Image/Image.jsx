import React from 'react'
import PropTypes from 'prop-types'
import style from './Image.module.css'

const Image = ({imageSource, width, height, radius, alternativeText, imageTitle, imageDescription, textAlign}) => {
  return (
    <section className={style.sectionContainer}>
        <img
            src={imageSource}
            width={width}
            height={height}
            style={{
                borderRadius:radius
            }}
            alt={alternativeText}
        />
        <h2 className={style.Title} style={{
            textAlign:textAlign
        }}>
            {imageTitle}
        </h2>
        <p className={style.Description} style={{
            textAlign:textAlign,
            fontWeight: "200",
            flexWrap:"wrap"
        }}>
            {imageDescription}
        </p>
    </section>
  )
}

Image.propTypes = {
    imageSource: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
    textAlign: PropTypes.string,
    imageDescription: PropTypes.string.isRequired,
    radius: PropTypes.string
}
  
Image.defaultProps = {
    alternativeText: "inform the receptor",
    width: "400px",
    height: "250px",
    imageTitle:"Select the receptor",
    textAlign:"left",
    imageDescription:"Here you have to inform your receptor's email \n"+
    "so he/she can receive your amazing message \n" +
    "more easly and faster",
    radius: "10px"
}

export default Image