import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Liquid",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Tablet",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Topical medicines",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Suppositories",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Drops",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Inhalers",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Injections",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
