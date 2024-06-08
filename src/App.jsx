import './App.css'
import Navbar from './components/Navbar'
import Result from './components/Result'
import React, {useState, useEffect} from 'react'
import {Javascript} from '@codemirror/lang-javascript'
import {html} from '@codemirror/lang-html'
import {css } from '@codemirror/lang-css'
import { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'


function App() {
  const [html_edit, setHtml_Edit] = useState('')
  const [css_edit, setCss_Edit]= useState('')
  const [js_edit, setJs_Edit] = useState('')
  const onChangeHtml = useCallback((value)=> {
    setHtml_Edit(value);
  }, [])

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, [])

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, [])
  return (
  <div>
      <Navbar/>
      <div className='p-2'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-2  text-white'>HTML</h2>
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-2 text-white'>CSS</h2>
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold mb-2 text-white'>Javascript</h2>
          </div>
        </div>
      </div>
  </div>
  )
}

export default App
