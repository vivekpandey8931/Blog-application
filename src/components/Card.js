import React from 'react'

const Card = () => {
    return (
        <div className="card">
            <div class="ui very relaxed items">
           <div class="item">
            <div class="image imgcard ">
                <img  src="https://images.unsplash.com/photo-1621419079793-73020baef9eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80"/>
            </div>
            <div class="content">
                <a class="ui header" href="#link">Link Header</a>
                <div class="description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ...</p>
                </div>
                <div class="bottom">
                 <p>READ FULL STORY</p>
                 <i class="angle down icon"></i>
                </div>
           </div>
        </div>
        </div>
      </div>
    )
}

export default Card;
