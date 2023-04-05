import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)
export const createTuitThunk = createAsyncThunk("tuits", async (tuit) => {
    await service.createTuit(tuit);
    return tuit;
});