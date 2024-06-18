import Head from '../Head';
import Main from '../Main'
import Footer from '../Footer'
import '../styles.css';
import React from 'react';

export default function Home(){
    return(
        <div className='container'>
    <Head/>
    <Main/>
    <Footer/>
        </div>
    )
}
