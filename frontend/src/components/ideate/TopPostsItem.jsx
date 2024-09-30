import React from 'react'

const TopPostsItem = ({postItem}) => {
  return (
    <div className="w-full lg:max-w-xl flex flex-row gap-3 border rounded-md px-1 py-2 shadow-md">

    <div className="w-full flex flex-row items-center gap-3 justify-start py-1">
        <img className="w-10 h-10" src={postItem.image} alt="collaborator" />

        <div className="flex flex-col flex-wrap gap-1 ">
            <p className="small_card_title">{postItem.title}</p>
            <p className="small_card_des">{postItem.likes}K likes, {postItem.shares} shares</p>
        </div>
    </div>
    </div>
  )
}

export default TopPostsItem