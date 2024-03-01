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
                                Raise a Request For A Food
                            </h1>
                            <main>
                                <div className="wrapper">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-2'>
                                            <label htmlFor="name">Food Requirement(specity number of people):</label><br />
                                            <input required type="number" id="people" min={10} max={200} name="people" autoComplete="people" enterKeyHint="next" {...register("people")}/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="name">Description:</label><br />
                                            <textarea required type="text" id="desc" name="description" autoComplete="people" enterKeyHint="next" {...register("description")}/>
                                        </div>
                                        
                                        <button type='submit' className='btn btn-g'>Raise a Request</button>
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