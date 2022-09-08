const Post = require('../models/Post-model');

const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({posts})
    } catch (error) {
        res.status(500).json({msg: error});
    }    
}

const getPost = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const post = await Post.findOne({_id:taskID})
        if(!post) {
            res.status(404).json({msg: `post with id ${taskID} doesn't exist`})
        }
        res.status(200).json({post})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createPost = async (req,res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({post})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updatePost = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const post = await Post.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true,
        })
        if(!post) {
            return res.status(404).json({msg: `post with id ${taskID} doesn't exist`})
        }
        res.status(200).json({post})
    } catch (error) {
        console.log(error);        
    }
}

const deletePost = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const post = await Post.findOneAndDelete({_id:taskID})
        if(!post) {
            return res.status(404).json({msg: `post with id ${taskID} doesn't exist`})
        }
        res.status(200).json({post})
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

module.exports = {
    getAllPosts,
    createPost,
    updatePost,
    getPost,
    deletePost
}