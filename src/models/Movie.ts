import { model, Schema } from "mongoose";

const movideSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {tyoe: String}
    }
    ,
    {
        timestamps: true
    }
)

export const MovieModel = model("Movie", movideSchema);