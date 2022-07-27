import React from 'react'
import styles from '../styles/About.module.css'

export const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder!</h1>
      <h2>Introduction</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, provident quos ipsam suscipit modi illum placeat eveniet reprehenderit esse quod sequi delectus accusantium praesentium iusto amet minima a ducimus expedita dolore sapiente aut soluta, repellendus alias? Reiciendis, magnam facere. Ipsam ab cum sit ut ratione sapiente corrupti necessitatibus placeat quis nulla, illum nobis est eius, ipsum, animi quasi quibusdam culpa aut consequuntur amet aperiam. Assumenda, blanditiis? Voluptates ut, iste minima excepturi suscipit incidunt fugit, alias assumenda libero aliquid ipsum sint quos corporis perspiciatis vitae, velit impedit accusantium cum. Perferendi pariatur laborum non tenetur quidem est, aliquid distinctio in obcaecati. Beatae labore eum eius earum. Vero, quis vel. Voluptates atque molestiae dolore!</p>
      <h2>Services Offered</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi, aliquid qui iusto quis impedit soluta iure facilis placeat ipsum ullam, quia vel laudantium culpa aperiam alias. Itaque, earum fuga.</p>
      <h4 className={styles.h4}>Services:</h4>
      <ul>
      <li>Popular Blogs</li>
      <li>Help in Codding</li>
      <li>Latest Updates</li>
      </ul>
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam soluta sint necessitatibus amet officiis impedit minus placeat iste! Eos.</p>
    </div>
  )
}

export default about;
