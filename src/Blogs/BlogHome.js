import React, { useState } from 'react';
import { BlogApi } from './BlogApi';
import BlogList from './BlogList';
import Search from './Search/Search';
import Empty from './Empty';

export default function BlogHome() {
  const [keyInput, setKeyInput] = useState('');
  const [blog, setBlog] = useState(BlogApi);  
  const menuItems = [...new Set(BlogApi.map((val) => val.famouse))];
  const filterItem = (curcat) => {
    const newItem = BlogApi.filter((newVal) => newVal.famouse === curcat); 
    setBlog(newItem);
  };
console.log(menuItems)
  const handleData = (e) => {
    const value = e.target.value;
    setKeyInput(value);
    if (value === '') {
      setBlog(BlogApi);}
  }
  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submit");
    searchItems();
  }
  const searchItems = () => {
    const searchBlog = BlogApi.filter((blogItem) => {
       return (
        blogItem.categorie.toLowerCase().includes(keyInput.toLowerCase().trim()) // Corrected property name to "categorie"
      );
    });
    setBlog(searchBlog);
  }
const clearallData=()=>{
  setKeyInput('')
  setBlog(BlogApi)
}
  return (
    <div>
      <Search 
        value={keyInput}
        onchangedata={handleData}
        submitform={submitForm}
        clearallData={clearallData}
      />
      {!blog.length ? <Empty  data={keyInput} /> : <BlogList menuItems={menuItems} filterItem={filterItem} blog={blog} />}
    </div>
  ); 
}
