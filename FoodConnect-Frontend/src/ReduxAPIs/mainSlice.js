import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {addOrganization, loginOrganization ,addAvailability, getNotification, acceptRequest, nearbyDonors, addDonor, loginDonor, getDonorAcceptance, storeSignUpData, nearbyOrganization} from './mainAPI';


export const addOrganizationAsync =  createAsyncThunk(
    '/addOraganization',
    async (organization) =>{
        console.log(organization)
        const response = await addOrganization(organization);
        return response.data;
    }
)
export const loginOrganizationAsync = createAsyncThunk(
    '/loginOrganization',
    async (organization) =>{
        console.log(organization)
        const response = await loginOrganization(organization);
        return response.data;
    }
)
export const addAvailabilityAsync = createAsyncThunk(
    '/addAvailability',
    async(availability) =>{
        const response = await addAvailability(availability);
        return response.data;
    }
)
export const getNotificationAsync = createAsyncThunk(
    '/getNotification',
    async(orgID) =>{
        const response = await getNotification(orgID);
        return response.data;
    }
)

export const acceptRequestAsync = createAsyncThunk( 
    '/acceptRequest',
    async(requestID, orgID) =>{
        const response = await acceptRequest(requestID, orgID);
        return response.data;
    }
)


export const nearbyDonorsAsync = createAsyncThunk( 
    '/nearbyDonors',
    async(pinCode) =>{
        const response = await nearbyDonors(pinCode);
        return response.data;
    }
)
export const nearbyOrganizationAsync = createAsyncThunk( 
    '/nearbyOrganization',
    async(pinCode) =>{
        const response = await nearbyOrganization(pinCode);
        return response.data;
    }
)

export const addDonorAsync = createAsyncThunk(
    '/addDonor',
    async(donor) =>{
        console.log(donor + "from mainSlice addDonorAsync");
        const response = await addDonor(donor);
        return response.data;
    }
)

export const loginDonorAsync = createAsyncThunk(
    '/loginDonor',
    async(donor) =>{
        const response = await loginDonor(donor);
        return response.data;
    }
)
export const getDonorAcceptanceAsync = createAsyncThunk(
    '/getDonorAcceptance',
    async(donorID) =>{
        const response = await getDonorAcceptance(donorID);
        return response.data;
    }
)



export const mainSlice = createSlice({
    name:'main',
    initialState:{
        state: 'idle',
        loggedInOrganization: null,
        notificationData: null,
        loggedInDonor: null,
        nearbyDonorsData: null,
        signUpData: null,
        nearBy: null,
    },
    reducers:{
        storeSignUpDataToRedux: (state,data) =>{
            state.signUpData = data.payload;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(addOrganizationAsync.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(addOrganizationAsync.fulfilled, (state, action) =>{
            state.status = 'idle';
        })
        .addCase(addOrganizationAsync.rejected, (state, action) =>{
            state.status = 'failed';
        }) 
        .addCase(loginOrganizationAsync.pending, (state) =>{
            state.status = 'loading';
        }  )
        .addCase(loginOrganizationAsync.fulfilled, (state, action) =>{
            state.loggedInOrganization = action.payload;
            localStorage.setItem("loggedInOrganization",JSON.stringify(state.loggedInOrganization));
            state.status = 'idle';
        })
        .addCase(loginOrganizationAsync.rejected, (state, action) =>{
            state.status = 'failed';
        })  
        .addCase(addAvailabilityAsync.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(addAvailabilityAsync.fulfilled, (state, action) =>{                                       
            state.status = 'idle';
        })
        .addCase(getNotificationAsync.pending, (state) =>{
            state.status = 'loading';
        }  )
        .addCase(getNotificationAsync.fulfilled, (state, action) =>{
            state.notificationData = action.payload;
            state.status = 'idle';
        })
        .addCase(acceptRequestAsync.pending,
            (state) =>{
                state.staus = 'loading';
            })
        .addCase(acceptRequestAsync.fulfilled, (state,action) =>{
            state.status = 'idle';
        })
        .addCase(nearbyDonorsAsync.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(nearbyDonorsAsync.fulfilled, (state, action) =>{
            state.nearBy = action.payload;
            state.status = 'idle';
        })  
        .addCase(addDonorAsync.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(addDonorAsync.fulfilled, (state, action) =>{
            state.status = 'idle';
        })
        .addCase(loginDonorAsync.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(loginDonorAsync.fulfilled, (state, action) =>{
            state.loggedInDonor = action.payload;
            localStorage.setItem("loggedInDonor",JSON.stringify(state.loggedInDonor));
            state.status = 'idle';
        })
        .addCase(getDonorAcceptanceAsync.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(getDonorAcceptanceAsync.fulfilled, (state, action) =>{
            state.status = 'idle';
        })
        .addCase(nearbyOrganizationAsync.pending,(state) =>{
            state.status = 'loading';
        })
        .addCase(nearbyOrganizationAsync.fulfilled,(state,action) =>{
            state.nearBy = action.payload;
            state.status = 'idle';
        })
        
    }
})

export const {storeSignUpDataToRedux} = mainSlice.actions;
export const selectLoggedInOrganization = (state) => state.main.loggedInOrganization;
export const selectLoggedInDonor = (state) => state.main.loggedInDonor;
export const selectnearbyDonorsData = (state) => state.main.nearbyDonorsData;
export const selectNotificationData = (state) => state.main.notificationData;
export const selectSignUpData = (state) => state.main.storeSignUpData;
export const selectNearBy = (state) => state.main.nearBy;
export default mainSlice.reducer;