import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  buyername: '',
  buyeremail: '',
  buyerphone: '',
  sellername: '',
  selleremail: '',
  sellerphone: '',
  firearmmake: '',
  firearmmodel: '',
  message: '',
}
export const Transfer = (props) => {
  const [{ buyername, buyeremail, buyerphone, sellername, selleremail, sellerphone, firearmmake, firearmmodel, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { sellername, value } = e.target
    setState((prevState) => ({ ...prevState, [sellername]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sellername, selleremail, message)
    
    emailjs
      .sendForm(
        'service_izdgn2f', 'template_xjg63rp', e.target, 'Xzx7d0XuxaaVXlcSd'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          alert("Message sent! We will reply asap.")
        },
        (error) => {
          console.log(error.text)
          alert("An error occurred, please contact us directly at Sandy@sfgunsmiths.com")
        }
      )
  }
  return (
    <div>
      <div id='transfer' className='text-center'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='section-title'>
                <h2>Transfer a firearm</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='buyername'
                        name='buyername'
                        className='form-control'
                        placeholder='Buyer Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='buyeremail'
                        name='buyeremail'
                        className='form-control'
                        placeholder='Buyer Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='phone'
                        id='buyerphone'
                        name='buyerphone'
                        className='form-control'
                        placeholder='Buyer Phone'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='sellername'
                        name='sellername'
                        className='form-control'
                        placeholder='Seller Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='selleremail'
                        name='selleremail'
                        className='form-control'
                        placeholder='Seller Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='phone'
                        id='sellerphone'
                        name='sellerphone'
                        className='form-control'
                        placeholder='Seller Phone'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='firearmmake'
                        name='firearmmake'
                        className='form-control'
                        placeholder='Firearm Make'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='firearmmodel'
                        name='firearmmodel'
                        className='form-control'
                        placeholder='Firearm Model'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message (optional)'
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
