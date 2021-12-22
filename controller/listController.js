import {listData} from "../static/listData.js";

export const getAllList=async (req, res)=>{
    res.status(200).json({
        list:listData
    })
}

export const getItemById=async (req, res)=>{
    const item=listData.find(item=>item.id===req.params.id)
    if (item) {
        res.status(200).json({
            item
        })
    } else res.status(404).json({
            message:'item not found'
        })
}