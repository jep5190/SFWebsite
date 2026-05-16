import React from 'react'

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Sandy and Family Gunsmiths offers gunsmithing services and the sale of firearms.
            Give us a call or send us a message to discuss any project.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <React.Fragment key={`${d.name}-${i}`}>
                  <div className='col-md-4'>
                    {' '}
                    <i className={d.icon}></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                  {i === 2 && (
                    <div className='clearfix visible-md-block visible-lg-block'></div>
                  )}
                </React.Fragment>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
