import React from 'react';

function Editor(props) {
  return (
    <div className='h-100 p-2'>
      <div className='code-font text-white p-3' style={{ fontSize: 14 }} >
        <div className='mb-3'>
          <span className='keyword'>public</span>
          <span className='keyword'> class</span>
          <span> Main</span>
          <span> &#123;</span>
        </div>

        <div className='pl-4 mb-3'>
          <span className='keyword'>public</span>
          <span className='keyword'> static</span>
          <span className='keyword'> void</span>
          <span className='method'> main</span>
          <span>(String[] args) &#123;</span>
        </div>

        <div className='pl-5'>
          <span>System.out.println(</span>
          <span className='string'>"Hello world"</span>
          <span>);</span>
        </div>

        <div className='pl-4 mb-3'>
          <span>&#125;</span>
        </div>

        <div className='mb-3'>
          <span>&#125;</span>
        </div>
      </div>
    </div>
  );
}

export default Editor;
