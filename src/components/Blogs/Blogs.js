import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className='mx-12 rounded-md  border-2 my-4'>
                <div className='pl-4'>
                <h1 className='text-4xl '>What is Context API?</h1>
                    <p className='text-lg'>A React app can use the React Context API to create global variables that can be passed around.<br/> This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent, and so on. <br/>
                    It is used for <br/> Context is also marketed as a more straightforward and lightweight Redux state management solution.</p>
                </div>
            </div>
            <div className='mx-12 rounded-md  border-2 my-4'>
                <div className='pl-4'>
                <h1 className='text-4xl '>What are Semantic Tags?</h1>
                    <p className='text-lg'>A semantic element clearly describes its meaning to both the browser and the developer. The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. The pages made with semantic elements are much easier to read. It has greater accessibility. It offers a better user experience.</p>
                </div>
            </div>
            <div className='mx-12 rounded-md  border-2 my-4'>
                <div className='pl-4'>
                <h1 className='text-4xl '>Differences among inline, block, inline-block?</h1>
                    <p className='text-lg'><strong className='underline'>Inline:</strong> Displays an element as an inline element. Any height and width properties will have no effect.<br/>Here are a few elements that have a default inline property :<strong>
                         <ul className=''>
                        <li>span</li>
                        <li>a</li>
                        <li>img</li>
                        <li>strong</li>
                    </ul>
                        </strong>
                    </p>
                    <p className='text-lg'><strong className='underline'>Block:</strong> Block element take space when they created<br/>Here are a few elements that have a default Block  property :<strong>
                         <ul className=''>
                        <li>p </li>
                        <li>div</li>
                        <li>main </li>
                        
                    </ul>
                        </strong>
                    </p>
                    <p className='text-lg'><strong className='underline'>Inline-Block:</strong> Displays an element as an inline-level block container.  CAN set height and width values.<br/>
                    </p>
                </div>
            </div>  
        </div>
    );
};

export default Blogs;