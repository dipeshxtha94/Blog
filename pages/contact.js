import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


// name,phone,email,desc
export const contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {name,phone,email,desc};

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Thanks for contacting us!')
        setName('')
        setPhone('')
        setEmail('')
        setDesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setDesc(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/images/emoji.jpg" alt="" />
      <div className={styles.center}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.component}>
        <input className={styles.input} type="text" value={name} name="name" id='name' onChange={handleChange} required />
        <span className={styles.span}></span>
        <label className={styles.label} htmlFor="name">Enter Your Name Here</label><br />
        </div>
        <div className={styles.component}>
        <input className={styles.input} type="phone" value={phone} name="phone" onChange={handleChange} required pattern="[9][8][0-9]{8}" />
        <span className={styles.span}></span>
        <label className={styles.phonelabel} htmlFor="phone">Enter Your Phone no Here</label><br />
        </div>
        <div className={styles.component}>
        <input className={styles.input} type="email" name='email' value={email} onChange={handleChange} required />
        <span className={styles.span}></span>
        <label className={styles.label} htmlFor="email">Enter Your Email Here</label><br />
        </div>
        <div className={styles.component}>
        <textarea className={styles.textareainput} value={desc} name="desc" onChange={handleChange} required />
        <span className={styles.textareaspan}></span>
        <label className={styles.textarealabel} htmlFor="desc">Enter your concern Here</label><br />
        </div>
        <input className={styles.submit} type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}

export default contact;