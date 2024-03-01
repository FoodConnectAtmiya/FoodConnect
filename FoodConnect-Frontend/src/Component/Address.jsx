import React from 'react'
import {useForm} from 'react-hook-form'
import '../index.css'
const Address = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
        console.log(data)
      } 
    return (
        <>
            <section className="pop-sec">
                <div className="content pop">
                    <div>
                        <div className="wrap">
                            <h1>
                                Address Details
                            </h1>
                            <main>
                                <div className="wrapper">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-2'>
                                            <label htmlFor="name">Name Of Organization:</label><br />
                                            <input required type="text" id="name" name="name" autoComplete="name" enterKeyHint="next" {...register("name")}/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="street-address">Street address:</label><br />
                                            <input type="text" id="street-address" name="street-address" autoComplete="street-address" required enterKeyHint="next" {...register("address")}></input>

                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="postal-code">ZIP or postal code (optional):</label><br />
                                            <input className="postal-code" id="postal-code" name="postal-code" autoComplete="postal-code" enterKeyHint="next" {...register("pinCode")}/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="city">City:</label><br />
                                            <input required type="text" id="city" name="city" autoComplete="address-level2" enterKeyHint="next" {...register("city")}/>
                                        </div>
                                        <button type='submit' className='btn btn-g'>Save address</button>
                                    </form>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Address