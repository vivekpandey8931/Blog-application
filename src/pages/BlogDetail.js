import React,{useState,useEffect} from "react";
import Spinner from '../components/Spinner';
import axios from 'axios';


const BlogDetail = () => {
const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [category,setCategory]=useState('');
const [image,setImage]=useState('');
const [imagedescription,setImagedescription]=useState('');
const [iframeLink,setIframeLink]=useState('');
const [creatorname,setCreatorname]=useState('');
const [uploading,setUploading]=useState(false);


const uploadFileHnadler=async(e)=>{
const file=e.target.files[0];
const formData=new FormData();
formData.append('image',file);
setUploading(true);
try{
    const config={
        header:{
            'Content-Type': 'multipart/form-data'
        } }
    const {data}=await axios.post('http://localhost:5000/backend/upload',formData,config)
    console.log(data);
    setImage(data);
    setUploading(false);
    }catch(error){
     console.error(error)
     setUploading(false);
    }
    
}

const formSubmit=(e)=>{
    e.preventDefaault();
    const data={
        title,image,description,category,imagedescription,iframeLink,creatorname
    }
    console.log(data);
}

  return (
    <div className="blogdetail">
      <div class="ui container ">
        <h1>Blog detail Page</h1>
        <form class="ui form"  onSubmit={formSubmit}>
          <div class="field">
            <label>Blog Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              placeholder="Enter title here"
            />
          </div>
          <div class="field">
            <label>Blog Details</label>
            <textarea name="description"  value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description about blog here ....."></textarea>
          </div>
          <div class="field">
            <select  onChange={(e)=>setCategory(e.target.value)} >
              <option value="" disabled selected>
                Category
              </option>
              <option value="Politics">Politics</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <div class="field">
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              placeholder="enter image url"
            />
            <input
              type="file"
              name="image"
              onChange={uploadFileHnadler}
              placeholder="choose image file"
            />
            {uploading && <Spinner /> }
          </div>
          <div class="field">
            <label>Image description</label>
            <input
              type="text"
              name="imageDescription"
              value={imagedescription}
              onChange={(e)=>setImagedescription(e.target.value)}
              placeholder="write something about image here..."
            />
          </div>
          <div class="field">
            <label>Iframe Link</label>
            <input
              type="text"
              name="iframeLink"
              value={iframeLink}
              onChange={(e)=>setIframeLink(e.target.value)}
              placeholder="Paste the link here...."
            />
          </div>
          <div class="field">
            <label>Your Name</label>
            <input
              type="text"
              name="creatorName"
              value={creatorname}
              onChange={(e)=>setCreatorname(e.target.value)}
              placeholder="Enter yout name here..."
            />
          </div>

          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetail;
