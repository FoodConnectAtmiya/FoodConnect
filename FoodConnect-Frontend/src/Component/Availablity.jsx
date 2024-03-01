import React from 'react'
import {useForm} from 'react-hook-form'
import '../index.css'
const Availability = () => {
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
                                Food Details
                            </h1>
                            <main>
                                <div className="wrapper">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-2'>
                                            <label htmlFor="food">Food for how many peple?(10-200)</label><br />
                                            <input required type="number" min={10} max={200} id="people" name="people"  enterKeyHint="next" {...register("people")}/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="food_type">Type of food:</label><br />
                                            <select name="type" id="type">
                                                <option value="veg">Veg</option>
                                                <option value="veg">Non-veg</option>
                                            </select>
                                            {/* <input required type="number" id="people" name="people"  enterKeyHint="next" {...register("food_type")}/> */}
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="description">Desciption:</label><br />
                                            <textarea type="text" id="description" name="description"  enterKeyHint="next" {...register("desctiption")}/>
                                        </div>
                                        <button type='submit' className='btn btn-g'>Show Availablity</button>
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

export default Availability