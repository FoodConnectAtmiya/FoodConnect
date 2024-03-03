import {React, useContext} from 'react'

import '../index.css';

const Dashboard= () => {
    // storeSignUpData, setStoreSignUpData
   
    
    // console.log(storeSignUpData);
   
    return (
       <>
    <div class="flex flex-col justify-center items-center px-20 py-12 bg-white max-md:px-5">
        <section
            class="flex flex-col justify-center  px-8 py-4 mt-20 max-w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-30 text-black text-opacity-30 w-[609px] max-md:px-5 max-md:mt-10 "
            style="width: 68vw !important;">
            <header class="flex gap-5 justify-between  w-full max-md:flex-wrap max-md:max-w-full">
                <!-- <div class="flex gap-5 justify-between text-base font-medium tracking-wider">
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e467f68fa62d44ae28187756ec272501778017c0321edd0ed3b0f796c33521?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                        alt="Search Icon" class="my-auto w-4 aspect-square">
                    <h2 class="flex-auto">Search your City</h2>
                </div>
                <button class="justify-center p-1 my-auto text-xs leading-4 text-center whitespace-nowrap aspect-square"
                    tabindex="0"></button> -->

                <div class="input-field searchcity" style="width: 100%; margin-top: 10px;">
                    <input placeholder="search your city" style="width: 100%;" class="validate" type="text" name="text"
                        required pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b" title="Search your City" />
                    <!-- Validation Error Message -->
                    <p id="email-error" style="color: red; display: none;">Invalid Email Address</p>
                </div>

            </header>
        </section>

        <p class="mt-8 text-base tracking-wide text-black text-opacity-70 max-md:max-w-full"
            style="text-align: left;  width: 68vw; padding: 0;">
            16 Organizations found near
            you</p>

        <section class="mt-4 w-full max-w-[1048px] max-md:max-w-full" style="width: auto;">
            <div class="flex gap-5 max-md:flex-col  max-md:gap-0 max-md:"
                style="display: grid; grid-template-columns: repeat(3, auto); width: auto;  ">
                <article class="flex flex-col  max-md:ml-0 max-md:w-full w-[312]" style=" width: 312px !important;">
                    <div
                        class="flex flex-col grow p-2 mx-auto w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-10 max-md:mt-8">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cac299d0f69fd1af8cb88ee5f8b35343153eb22b2c8d6b6da7cb1811dbeb061d?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                            alt="Shri Ashirwad Charitable Trust" class="w-full aspect-[1.72]">
                        <div class="mt-2 text-base tracking-wide text-black whitespace-nowrap">Shri Ashirwad Charitable
                            Trust</div>
                        <p class="mt-1 text-xs tracking-wide text-black text-opacity-70">10, Gondal Rd, Vaid Vadi,
                            Sardar Nagar, Rajkot, Gujarat 360004</p>
                        <div class="flex gap-5 justify-between mt-2 w-full">
                            <div class="flex gap-2 my-auto">
                                <div
                                    class="justify-center px-2 py-1 text-xs tracking-wide text-blue-500 whitespace-nowrap border border-solid aspect-[3.36] bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 rounded-[88px]">
                                    Food need</div>
                                <div class="flex justify-center items-center px-1.5 border border-solid aspect-square bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 h-[22px] rounded-[88px] w-[22px]"
                                    tabindex="0">
                                    <img loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb9056f30f0d1fb20496bcc41d265f670dd57c423f8f90071ea924bb039d360?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                                        alt="Food Icon" class="w-full aspect-[0.83] fill-blue-500">
                                </div>
                            </div>
                            <button
                                class="justify-center px-4 py-2 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid btn"
                                style="font-weight: 500; border-width: 1px;" tabindex="0">Donate Here</button>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col ml-5  max-md:ml-0 max-md:w-full w-[312]"
                    style=" width: 312px !important;">
                    <div
                        class="flex flex-col grow p-2 mx-auto w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-10 max-md:mt-8">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cac299d0f69fd1af8cb88ee5f8b35343153eb22b2c8d6b6da7cb1811dbeb061d?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                            alt="Shri Ashirwad Charitable Trust" class="w-full aspect-[1.72]">
                        <div class="mt-2 text-base tracking-wide text-black whitespace-nowrap">Shri Ashirwad Charitable
                            Trust</div>
                        <p class="mt-1 text-xs tracking-wide text-black text-opacity-70">10, Gondal Rd, Vaid Vadi,
                            Sardar Nagar, Rajkot, Gujarat 360004</p>
                        <div class="flex gap-5 justify-between mt-2 w-full">
                            <div class="flex gap-2 my-auto">
                                <div
                                    class="justify-center px-2 py-1 text-xs tracking-wide text-blue-500 whitespace-nowrap border border-solid aspect-[3.36] bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 rounded-[88px]">
                                    Food need</div>
                                <div class="flex justify-center items-center px-1.5 border border-solid aspect-square bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 h-[22px] rounded-[88px] w-[22px]"
                                    tabindex="0">
                                    <img loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb9056f30f0d1fb20496bcc41d265f670dd57c423f8f90071ea924bb039d360?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                                        alt="Food Icon" class="w-full aspect-[0.83] fill-blue-500">
                                </div>
                            </div>
                            <button
                                class="justify-center px-4 py-2 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid btn"
                                style="font-weight: 500; border-width: 1px;" tabindex="0">Donate Here</button>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col ml-5  max-md:ml-0 max-md:w-full w-[312]"
                    style=" width: 312px !important;">
                    <div
                        class="flex flex-col grow p-2 mx-auto w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-10 max-md:mt-8">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cac299d0f69fd1af8cb88ee5f8b35343153eb22b2c8d6b6da7cb1811dbeb061d?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                            alt="Shri Ashirwad Charitable Trust" class="w-full aspect-[1.72]">
                        <div class="mt-2 text-base tracking-wide text-black whitespace-nowrap">Shri Ashirwad Charitable
                            Trust</div>
                        <p class="mt-1 text-xs tracking-wide text-black text-opacity-70">10, Gondal Rd, Vaid Vadi,
                            Sardar Nagar, Rajkot, Gujarat 360004</p>
                        <div class="flex gap-5 justify-between mt-2 w-full">
                            <div class="flex gap-2 my-auto">
                                <div
                                    class="justify-center px-2 py-1 text-xs tracking-wide text-blue-500 whitespace-nowrap border border-solid aspect-[3.36] bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 rounded-[88px]">
                                    Food need</div>
                                <div class="flex justify-center items-center px-1.5 border border-solid aspect-square bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 h-[22px] rounded-[88px] w-[22px]"
                                    tabindex="0">
                                    <img loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb9056f30f0d1fb20496bcc41d265f670dd57c423f8f90071ea924bb039d360?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                                        alt="Food Icon" class="w-full aspect-[0.83] fill-blue-500">
                                </div>
                            </div>
                            <button
                                class="justify-center px-4 py-2 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid btn"
                                style="font-weight: 500; border-width: 1px;" tabindex="0">Donate Here</button>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col ml-5 w-[312] max-md:ml-0 max-md:w-full" style="width: 312px !important;">
                    <div
                        class="flex flex-col grow p-2 mx-auto w-full rounded-lg border border-solid bg-zinc-100 border-black border-opacity-10 max-md:mt-8 ">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cac299d0f69fd1af8cb88ee5f8b35343153eb22b2c8d6b6da7cb1811dbeb061d?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                            alt="Shri Ashirwad Charitable Trust" class="w-full aspect-[1.72]">
                        <div class="mt-2 text-base tracking-wide text-black whitespace-nowrap">Shri Ashirwad Charitable
                            Trust</div>
                        <p class="mt-1 text-xs tracking-wide text-black text-opacity-70">10, Gondal Rd, Vaid Vadi,
                            Sardar Nagar, Rajkot, Gujarat 360004</p>
                        <div class="flex gap-5 justify-between mt-2 w-full">
                            <div class="flex gap-2 my-auto">
                                <div
                                    class="justify-center px-2 py-1 text-xs tracking-wide text-blue-500 whitespace-nowrap border border-solid aspect-[3.36] bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 rounded-[88px]">
                                    Food need</div>
                                <div class="flex justify-center items-center px-1.5 border border-solid aspect-square bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-10 h-[22px] rounded-[88px] w-[22px]"
                                    tabindex="0">
                                    <img loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb9056f30f0d1fb20496bcc41d265f670dd57c423f8f90071ea924bb039d360?apiKey=3b17c65553124db1b8acbb61fa469d5e&"
                                        alt="Food Icon" class="w-full aspect-[0.83] fill-blue-500">
                                </div>
                            </div>
                            <button
                                class="justify-center px-4 py-2 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid btn"
                                style="font-weight: 500; border-width: 1px;" tabindex="0">Donate Here</button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <button
            class="justify-center px-4 py-2 mt-8 text-base tracking-wide text-green-600 whitespace-nowrap rounded border border-green-600 border-solid btn"
            style="font-weight: 500; border-width: 1px;" tabindex="0">Show more</button>
    </div>
       </>
    );
}

export default Address
