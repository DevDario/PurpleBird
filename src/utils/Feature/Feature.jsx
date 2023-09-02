import React from 'react'
import style from './Feature.module.css'
import PropTypes from 'prop-types'

const Feature = ({title, description, icon, circleWidth}) => {
  return (
    <section className={style.featureContainer}>
        <div className={style.circle} style={{
            width: circleWidth,
            height: circleWidth
        }}>
           {icon}
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description} style={{
            textAlign:"center",
            fontWeight: "200",
            flexWrap:"wrap"
        }}>{description}</p>
    </section>
  )
}

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.any.isRequired,
    circleWidth: PropTypes.string.isRequired,
}

Feature.defaultProps = {
    title: "it's easy",
    description: "PurpleBird it's easy to use and very acessible for everyone. We had the ideia of creating something useful, intuitive and very user-friendly so everyone can enjoy it as much as us",
    circleWidth: "90px"
}

export default Feature